"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { adultRoles } from "@/lib/auth";
import { siteUrl } from "@/lib/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const emailSchema = z.string().trim().email("Enter a valid email address.");
const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters.");

const redirectToSchema = z
  .string()
  .optional()
  .transform((value) => {
    if (!value || !value.startsWith("/")) return "/";
    return value;
  });

const signupSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name."),
  email: emailSchema,
  password: passwordSchema,
  role: z.enum(adultRoles),
  adultConfirmation: z.literal("on", {
    error: () => ({
      message:
        "Confirm that an adult is creating this account for themselves, a classroom, or a student in their care.",
    }),
  }),
  redirectTo: redirectToSchema,
});

const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Enter your password."),
  redirectTo: redirectToSchema,
});

const forgotPasswordSchema = z.object({
  email: emailSchema,
});

const resetPasswordSchema = z.object({
  password: passwordSchema,
  confirmPassword: passwordSchema,
});

const profileSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name."),
  role: z.enum(adultRoles),
});

export type AuthState = {
  status: "idle" | "success" | "error";
  message: string;
};

const initialError: AuthState = {
  status: "error",
  message:
    "Authentication is not configured yet. Add Supabase environment variables to enable accounts.",
};

export async function signUpAction(
  _previousState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const parsed = signupSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { status: "error", message: parsed.error.issues[0].message };
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) return initialError;

  const { fullName, email, password, role, redirectTo } = parsed.data;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        role,
      },
      emailRedirectTo: `${siteUrl}/auth/callback?next=/account`,
    },
  });

  if (error) {
    return {
      status: "error",
      message:
        error.message.includes("already registered") ||
        error.message.includes("already exists")
          ? "An account already exists for that email. Try logging in or resetting your password."
          : "We could not create the account. Please check your details and try again.",
    };
  }

  if (data.user) {
    await supabase.from("profiles").upsert({
      id: data.user.id,
      email,
      full_name: fullName,
      role,
    });
  }

  revalidatePath("/", "layout");

  if (data.session) {
    redirect(redirectTo || "/account");
  }

  return {
    status: "success",
    message:
      "Account created. Check your email if confirmation is required before logging in.",
  };
}

export async function loginAction(
  _previousState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const parsed = loginSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { status: "error", message: parsed.error.issues[0].message };
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) return initialError;

  const { error } = await supabase.auth.signInWithPassword(parsed.data);

  if (error) {
    return {
      status: "error",
      message:
        "Email or password was not accepted. Check your login details or reset your password.",
    };
  }

  revalidatePath("/", "layout");
  redirect(parsed.data.redirectTo || "/account");
}

export async function forgotPasswordAction(
  _previousState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const parsed = forgotPasswordSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { status: "error", message: parsed.error.issues[0].message };
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) return initialError;

  const { error } = await supabase.auth.resetPasswordForEmail(parsed.data.email, {
    redirectTo: `${siteUrl}/auth/callback?next=/reset-password`,
  });

  if (error) {
    return {
      status: "error",
      message:
        "Password reset is temporarily unavailable. Please try again in a few minutes.",
    };
  }

  return {
    status: "success",
    message:
      "If an account exists for that email, a reset link has been sent.",
  };
}

export async function resetPasswordAction(
  _previousState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const parsed = resetPasswordSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { status: "error", message: parsed.error.issues[0].message };
  }

  if (parsed.data.password !== parsed.data.confirmPassword) {
    return { status: "error", message: "Passwords do not match." };
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) return initialError;

  const { error } = await supabase.auth.updateUser({
    password: parsed.data.password,
  });

  if (error) {
    return {
      status: "error",
      message:
        "This reset link may be expired. Request a new password reset email and try again.",
    };
  }

  revalidatePath("/", "layout");
  redirect("/account");
}

export async function updateProfileAction(
  _previousState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const parsed = profileSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { status: "error", message: parsed.error.issues[0].message };
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) return initialError;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { status: "error", message: "Log in again to update your profile." };
  }

  const { error } = await supabase.from("profiles").upsert({
    id: user.id,
    email: user.email,
    full_name: parsed.data.fullName,
    role: parsed.data.role,
    updated_at: new Date().toISOString(),
  });

  if (error) {
    return {
      status: "error",
      message: "Profile updates are temporarily unavailable. Try again soon.",
    };
  }

  revalidatePath("/account");
  return { status: "success", message: "Profile updated." };
}

export async function updateProfileFormAction(formData: FormData) {
  await updateProfileAction({ status: "idle", message: "" }, formData);
}

export async function logoutAction() {
  const supabase = await createSupabaseServerClient();
  if (supabase) {
    await supabase.auth.signOut();
  }

  revalidatePath("/", "layout");
  redirect("/");
}
