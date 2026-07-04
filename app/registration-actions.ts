"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { adultRoles } from "@/lib/auth";
import { bootcampCohorts, getCohortById } from "@/lib/bootcamp";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const cohortIds = bootcampCohorts.map((cohort) => cohort.id);

const registrationSchema = z.object({
  adultName: z.string().trim().min(2, "Enter the adult full name."),
  adultEmail: z.string().trim().email("Enter a valid adult email address."),
  adultRole: z.enum(adultRoles),
  schoolOrOrganization: z
    .string()
    .trim()
    .min(2, "Enter a school or organization."),
  city: z.string().trim().min(2, "Enter a city."),
  state: z.string().trim().min(2, "Enter a state."),
  studentFirstName: z
    .string()
    .trim()
    .min(1, "Enter the student's first name only."),
  studentGrade: z.enum(["6", "7", "8"], {
    error: () => ({ message: "Select grade 6, 7, or 8." }),
  }),
  researchInterest: z
    .string()
    .trim()
    .min(10, "Share at least one general research interest."),
  previousExperience: z.string().trim().optional(),
  preferredClassSlot: z
    .string()
    .refine((value) => cohortIds.includes(value), "Select a valid class slot."),
  alternateClassSlot: z.string().optional(),
  timeZoneConfirmation: z.literal("on", {
    error: () => ({ message: "Confirm the time zone for live sessions." }),
  }),
  attendanceConfirmation: z.literal("on", {
    error: () => ({ message: "Confirm the student can attend all sessions." }),
  }),
  laptopAccess: z.literal("on", {
    error: () => ({ message: "Confirm laptop or desktop access." }),
  }),
  internetAccess: z.literal("on", {
    error: () => ({ message: "Confirm reliable internet access." }),
  }),
  videoAccess: z.literal("on", {
    error: () => ({ message: "Confirm video-session access." }),
  }),
  accommodationsOrNotes: z.string().trim().optional(),
  questions: z.string().trim().optional(),
  authorizedAdult: z.literal("on", {
    error: () => ({ message: "Confirm you are an authorized adult." }),
  }),
  noGuarantee: z.literal("on", {
    error: () => ({ message: "Confirm enrollment is not guaranteed." }),
  }),
  supervision: z.literal("on", {
    error: () => ({ message: "Confirm adult supervision for outdoor work." }),
  }),
  mediaPermission: z.literal("on", {
    error: () => ({ message: "Confirm separate media permission is required." }),
  }),
});

export type RegistrationState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitBootcampRegistration(
  _previousState: RegistrationState,
  formData: FormData,
): Promise<RegistrationState> {
  const parsed = registrationSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { status: "error", message: parsed.error.issues[0].message };
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return {
      status: "error",
      message:
        "Registration storage is not configured yet. Add Supabase environment variables before accepting applications.",
    };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { status: "error", message: "Log in before submitting an application." };
  }

  const preferredCohort = getCohortById(parsed.data.preferredClassSlot);
  if (!preferredCohort || preferredCohort.status === "closed") {
    return {
      status: "error",
      message:
        "That class slot is no longer available. Choose a different slot or waitlist option.",
    };
  }

  if (preferredCohort.status === "full") {
    return {
      status: "error",
      message:
        "That class slot became full while you were applying. Choose a waitlist or alternate slot.",
    };
  }

  const { data: existing, error: existingError } = await supabase
    .from("bootcamp_registrations")
    .select("id,status")
    .eq("user_id", user.id)
    .maybeSingle();

  if (existingError) {
    return {
      status: "error",
      message:
        "We could not check your existing registration. Please try again soon.",
    };
  }

  if (existing && existing.status !== "Submitted") {
    return {
      status: "error",
      message:
        "Your application is already under review or finalized, so it cannot be edited here.",
    };
  }

  const technologyAccess = [
    "Laptop or desktop",
    "Reliable internet",
    "Live video sessions",
  ].join(", ");

  const payload = {
    user_id: user.id,
    adult_name: parsed.data.adultName,
    adult_email: parsed.data.adultEmail,
    adult_role: parsed.data.adultRole,
    school_or_organization: parsed.data.schoolOrOrganization,
    student_first_name: parsed.data.studentFirstName,
    student_grade: parsed.data.studentGrade,
    city: parsed.data.city,
    state: parsed.data.state,
    preferred_class_slot: parsed.data.preferredClassSlot,
    alternate_class_slot: parsed.data.alternateClassSlot || null,
    technology_access: technologyAccess,
    research_interest: [
      parsed.data.researchInterest,
      parsed.data.previousExperience
        ? `Previous experience: ${parsed.data.previousExperience}`
        : "",
      parsed.data.questions ? `Questions: ${parsed.data.questions}` : "",
    ]
      .filter(Boolean)
      .join("\n\n"),
    accommodations_or_notes: parsed.data.accommodationsOrNotes || null,
    guardian_consent_confirmed: true,
    status: "Submitted",
    updated_at: new Date().toISOString(),
  };

  const query = existing
    ? supabase
        .from("bootcamp_registrations")
        .update(payload)
        .eq("id", existing.id)
        .eq("user_id", user.id)
    : supabase.from("bootcamp_registrations").insert(payload);

  const { error } = await query;

  if (error) {
    return {
      status: "error",
      message:
        "The application could not be saved. Please check your answers and try again.",
    };
  }

  revalidatePath("/account");
  revalidatePath("/bootcamp/apply");

  return {
    status: "success",
    message:
      "Application submitted. Submitting this form does not guarantee enrollment.",
  };
}
