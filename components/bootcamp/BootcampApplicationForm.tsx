"use client";

import { useActionState } from "react";
import type { ReactNode } from "react";
import { LoaderCircle } from "lucide-react";
import {
  submitBootcampRegistration,
  type RegistrationState,
} from "@/app/registration-actions";
import { adultRoles } from "@/lib/auth";
import type { BootcampCohort } from "@/lib/bootcamp";
import { formatCohortDates } from "@/lib/bootcamp";

const initialState: RegistrationState = { status: "idle", message: "" };

export function BootcampApplicationForm({
  cohorts,
  defaultEmail,
  defaultName,
  defaultRole,
}: {
  cohorts: BootcampCohort[];
  defaultEmail: string;
  defaultName?: string;
  defaultRole?: string;
}) {
  const [state, formAction, isPending] = useActionState(
    submitBootcampRegistration,
    initialState,
  );

  const openCohorts = cohorts.filter((cohort) =>
    ["open", "waitlist"].includes(cohort.status),
  );

  if (openCohorts.length === 0) {
    return (
      <section className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
        <h2 className="text-2xl font-bold text-slate-950">
          New class dates are being planned.
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Please check back soon or contact Source to Sound to ask about the
          waitlist.
        </p>
      </section>
    );
  }

  return (
    <form action={formAction} className="grid gap-6">
      {state.message ? (
        <div
          className={`rounded-lg p-4 text-sm font-medium leading-6 ${
            state.status === "success"
              ? "bg-forest-50 text-forest-900"
              : "bg-red-50 text-red-800"
          }`}
          role={state.status === "error" ? "alert" : "status"}
        >
          {state.message}
        </div>
      ) : null}

      <FormSection title="Adult information">
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField label="Adult full name" name="adultName" defaultValue={defaultName} required />
          <TextField label="Adult email" name="adultEmail" type="email" defaultValue={defaultEmail} required />
          <label className="block">
            <span className="text-sm font-semibold text-slate-800">
              Relationship to student <Required />
            </span>
            <select
              name="adultRole"
              defaultValue={defaultRole || ""}
              required
              className="focus-ring mt-2 h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-800"
            >
              <option value="">Select a role</option>
              {adultRoles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </label>
          <TextField label="School or organization" name="schoolOrOrganization" required />
          <TextField label="City" name="city" required />
          <TextField label="State" name="state" required />
        </div>
      </FormSection>

      <FormSection title="Student information">
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField label="Student first name only" name="studentFirstName" required />
          <label className="block">
            <span className="text-sm font-semibold text-slate-800">
              Grade <Required />
            </span>
            <select
              name="studentGrade"
              required
              className="focus-ring mt-2 h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-800"
            >
              <option value="">Select grade</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </label>
        </div>
        <TextArea
          label="General research interests"
          name="researchInterest"
          description="Examples: storm drains, rain gardens, creek health, maps, salmon, water quality."
          required
        />
        <TextArea
          label="Previous environmental, mapping, or research experience"
          name="previousExperience"
          description="Optional. It is fine if the student has no previous experience."
        />
      </FormSection>

      <FormSection title="Class scheduling">
        <div className="grid gap-4 sm:grid-cols-2">
          <CohortSelect label="Preferred four-week class slot" name="preferredClassSlot" cohorts={openCohorts} required />
          <CohortSelect label="Alternate four-week class slot" name="alternateClassSlot" cohorts={openCohorts} />
        </div>
        <Checkbox name="timeZoneConfirmation">
          I understand that listed times are Pacific Time unless otherwise noted.
        </Checkbox>
        <Checkbox name="attendanceConfirmation">
          The student can attend all four live sessions for the selected cohort.
        </Checkbox>
      </FormSection>

      <FormSection title="Technology">
        <Checkbox name="laptopAccess">The student has access to a laptop or desktop computer.</Checkbox>
        <Checkbox name="internetAccess">The student has reliable internet access.</Checkbox>
        <Checkbox name="videoAccess">The student can join live video sessions.</Checkbox>
      </FormSection>

      <FormSection title="Additional information">
        <TextArea label="Accessibility or accommodation notes" name="accommodationsOrNotes" />
        <TextArea label="Questions for the program team" name="questions" />
      </FormSection>

      <FormSection title="Required consent">
        <Checkbox name="authorizedAdult">
          I am the student&apos;s parent, legal guardian, teacher, or authorized adult.
        </Checkbox>
        <Checkbox name="noGuarantee">
          I understand that submitting this form does not guarantee enrollment.
        </Checkbox>
        <Checkbox name="supervision">
          I agree to supervise or arrange appropriate supervision for outdoor activities.
        </Checkbox>
        <Checkbox name="mediaPermission">
          I understand that separate permission will be required before any student
          name, image, work, recording, or identifying information is publicly shared.
        </Checkbox>
      </FormSection>

      <button
        type="submit"
        disabled={isPending}
        className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-water-700 px-5 py-3 text-sm font-semibold text-white hover:bg-water-900 disabled:cursor-wait disabled:bg-slate-400"
      >
        {isPending ? <LoaderCircle aria-hidden="true" size={16} className="animate-spin" /> : null}
        Submit Application
      </button>
    </form>
  );
}

function FormSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="text-xl font-bold text-slate-950">{title}</h2>
      <div className="mt-5 grid gap-4">{children}</div>
    </section>
  );
}

function Required() {
  return <span className="text-clay-500">*</span>;
}

function TextField({
  label,
  name,
  type = "text",
  defaultValue,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-800">
        {label} {required ? <Required /> : null}
      </span>
      <input
        name={name}
        type={type}
        defaultValue={defaultValue}
        required={required}
        className="focus-ring mt-2 h-11 w-full rounded-md border border-slate-300 px-3 text-sm text-slate-800"
      />
    </label>
  );
}

function TextArea({
  label,
  name,
  description,
  required,
}: {
  label: string;
  name: string;
  description?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-800">
        {label} {required ? <Required /> : null}
      </span>
      {description ? (
        <span className="mt-1 block text-xs leading-5 text-slate-500">
          {description}
        </span>
      ) : null}
      <textarea
        name={name}
        required={required}
        rows={4}
        className="focus-ring mt-2 w-full rounded-md border border-slate-300 px-3 py-3 text-sm text-slate-800"
      />
    </label>
  );
}

function CohortSelect({
  label,
  name,
  cohorts,
  required,
}: {
  label: string;
  name: string;
  cohorts: BootcampCohort[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-800">
        {label} {required ? <Required /> : null}
      </span>
      <select
        name={name}
        required={required}
        className="focus-ring mt-2 h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-800"
      >
        <option value="">Select a class slot</option>
        {cohorts.map((cohort) => (
          <option key={cohort.id} value={cohort.id}>
            {cohort.name} - {formatCohortDates(cohort)} - {cohort.status}
          </option>
        ))}
      </select>
    </label>
  );
}

function Checkbox({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  return (
    <label className="flex gap-3 rounded-md border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-700">
      <input
        type="checkbox"
        name={name}
        required
        className="mt-1 h-4 w-4 rounded border-slate-300 text-water-700 focus:ring-water-700"
      />
      <span>{children}</span>
    </label>
  );
}
