"use client";

import { CheckCircle2, Send } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";

const partnershipOptions = [
  "Classroom lesson support",
  "Symposium participation",
  "Volunteer",
  "Curriculum collaboration",
];

type FormErrors = {
  name?: string;
  email?: string;
  organization?: string;
  role?: string;
  message?: string;
};

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextErrors: FormErrors = {};
    const email = String(formData.get("email") || "");

    if (!String(formData.get("name") || "").trim()) {
      nextErrors.name = "Name is required.";
    }
    if (!email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!String(formData.get("organization") || "").trim()) {
      nextErrors.organization = "School or organization is required.";
    }
    if (!String(formData.get("role") || "").trim()) {
      nextErrors.role = "Role is required.";
    }
    if (!String(formData.get("message") || "").trim()) {
      nextErrors.message = "Message is required.";
    }

    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
    >
      {submitted ? (
        <div className="mb-5 rounded-lg border border-forest-100 bg-forest-50 p-4 text-sm leading-6 text-forest-900">
          <div className="flex items-center gap-2 font-bold">
            <CheckCircle2 aria-hidden="true" size={18} />
            Message ready
          </div>
          <p className="mt-2">
            This MVP uses a placeholder form handler. In production, this would
            send the message to the Source to Sound team without collecting
            student information.
          </p>
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <TextField label="Name" name="name" error={errors.name} required />
        <TextField
          label="Email"
          name="email"
          type="email"
          error={errors.email}
          required
        />
        <TextField
          label="School or organization"
          name="organization"
          error={errors.organization}
          required
        />
        <TextField label="Role" name="role" error={errors.role} required />
      </div>

      <fieldset className="mt-5">
        <legend className="text-sm font-semibold text-slate-800">
          Partnership interests
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {partnershipOptions.map((option) => (
            <label
              key={option}
              className="flex items-center gap-3 rounded-md border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-medium text-slate-700"
            >
              <input
                type="checkbox"
                name="interests"
                value={option}
                className="h-4 w-4 rounded border-slate-300 text-water-700 focus:ring-water-700"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-5 block">
        <span className="text-sm font-semibold text-slate-800">
          Message <span aria-hidden="true" className="text-clay-500">*</span>
        </span>
        <textarea
          name="message"
          rows={6}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="focus-ring mt-2 w-full rounded-md border border-slate-300 px-3 py-3 text-sm text-slate-800"
          placeholder="Tell us what kind of support or partnership you are interested in."
          required
        />
        {errors.message ? (
          <span id="message-error" className="mt-1 block text-sm font-medium text-clay-500">
            {errors.message}
          </span>
        ) : null}
      </label>

      <p className="mt-5 rounded-md bg-slate-50 p-3 text-xs leading-5 text-slate-600">
        Privacy note: this form is for adult teachers, administrators,
        volunteers, and partners. Do not submit student names, student photos, or
        student contact information.
      </p>

      <button
        type="submit"
        className="focus-ring mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-water-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-water-900 sm:w-auto"
      >
        Send Message
        <Send aria-hidden="true" size={16} />
      </button>
    </form>
  );
}

function TextField({
  label,
  name,
  type = "text",
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
}) {
  const errorId = `${name}-error`;

  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-800">
        {label} {required ? <span aria-hidden="true" className="text-clay-500">*</span> : null}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="focus-ring mt-2 h-11 w-full rounded-md border border-slate-300 px-3 text-sm text-slate-800"
      />
      {error ? (
        <span id={errorId} className="mt-1 block text-sm font-medium text-clay-500">
          {error}
        </span>
      ) : null}
    </label>
  );
}
