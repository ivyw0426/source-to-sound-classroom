"use client";

import Link from "next/link";
import { useActionState } from "react";
import { LoaderCircle } from "lucide-react";
import {
  forgotPasswordAction,
  loginAction,
  resetPasswordAction,
  signUpAction,
  type AuthState,
} from "@/app/auth-actions";
import { adultRoles } from "@/lib/auth";

type Mode = "login" | "signup" | "forgot-password" | "reset-password";

const initialState: AuthState = { status: "idle", message: "" };

export function AuthForm({
  mode,
  redirectTo = "/account",
}: {
  mode: Mode;
  redirectTo?: string;
}) {
  const action =
    mode === "signup"
      ? signUpAction
      : mode === "forgot-password"
        ? forgotPasswordAction
        : mode === "reset-password"
          ? resetPasswordAction
          : loginAction;
  const [state, formAction, isPending] = useActionState(action, initialState);

  const title =
    mode === "signup"
      ? "Create an account"
      : mode === "forgot-password"
        ? "Reset your password"
        : mode === "reset-password"
          ? "Choose a new password"
          : "Log in";

  const description =
    mode === "signup"
      ? "Create an account to manage bootcamp applications, classroom support, and program participation. Students can browse lessons without an account."
      : mode === "forgot-password"
        ? "Enter your account email and we will send a reset link if the account exists."
        : mode === "reset-password"
          ? "Use the reset link from your email, then enter a new password."
          : "Log in to manage your profile and bootcamp application.";

  return (
    <form
      action={formAction}
      className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
    >
      <h1 className="text-3xl font-bold text-slate-950">{title}</h1>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>

      {state.message ? (
        <div
          className={`mt-5 rounded-md p-3 text-sm font-medium leading-6 ${
            state.status === "success"
              ? "bg-forest-50 text-forest-900"
              : "bg-red-50 text-red-800"
          }`}
          role={state.status === "error" ? "alert" : "status"}
        >
          {state.message}
        </div>
      ) : null}

      <input type="hidden" name="redirectTo" value={redirectTo} />

      <div className="mt-6 grid gap-4">
        {mode === "signup" ? (
          <TextInput label="Full name" name="fullName" required />
        ) : null}

        {mode !== "reset-password" ? (
          <TextInput label="Email" name="email" type="email" required />
        ) : null}

        {mode === "signup" ? (
          <label className="block">
            <span className="text-sm font-semibold text-slate-800">
              Role <span className="text-clay-500">*</span>
            </span>
            <select
              name="role"
              required
              className="focus-ring mt-2 h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-800"
            >
              <option value="">Select your role</option>
              {adultRoles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </label>
        ) : null}

        {mode === "signup" || mode === "login" || mode === "reset-password" ? (
          <TextInput
            label={mode === "reset-password" ? "New password" : "Password"}
            name="password"
            type="password"
            required
          />
        ) : null}

        {mode === "reset-password" ? (
          <TextInput
            label="Confirm new password"
            name="confirmPassword"
            type="password"
            required
          />
        ) : null}

        {mode === "signup" ? (
          <label className="flex gap-3 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-950">
            <input
              type="checkbox"
              name="adultConfirmation"
              required
              className="mt-1 h-4 w-4 rounded border-amber-300 text-water-700 focus:ring-water-700"
            />
            <span>
              I am an adult creating this account for myself, my classroom, or a
              student in my care.
            </span>
          </label>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="focus-ring mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-water-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-water-900 disabled:cursor-wait disabled:bg-slate-400"
      >
        {isPending ? <LoaderCircle aria-hidden="true" size={16} className="animate-spin" /> : null}
        {mode === "signup"
          ? "Create Account"
          : mode === "forgot-password"
            ? "Send Reset Link"
            : mode === "reset-password"
              ? "Update Password"
              : "Log In"}
      </button>

      <div className="mt-5 grid gap-2 text-sm text-slate-600">
        {mode === "login" ? (
          <>
            <Link href={`/signup?redirect=${encodeURIComponent(redirectTo)}`} className="font-semibold text-water-700 hover:text-water-900">
              Create an account
            </Link>
            <Link href="/forgot-password" className="font-semibold text-water-700 hover:text-water-900">
              Forgot your password?
            </Link>
          </>
        ) : null}
        {mode === "signup" ? (
          <Link href={`/login?redirect=${encodeURIComponent(redirectTo)}`} className="font-semibold text-water-700 hover:text-water-900">
            Already have an account? Log in
          </Link>
        ) : null}
        {mode === "forgot-password" || mode === "reset-password" ? (
          <Link href="/login" className="font-semibold text-water-700 hover:text-water-900">
            Return to login
          </Link>
        ) : null}
      </div>
    </form>
  );
}

function TextInput({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-800">
        {label} {required ? <span className="text-clay-500">*</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="focus-ring mt-2 h-11 w-full rounded-md border border-slate-300 px-3 text-sm text-slate-800"
      />
    </label>
  );
}
