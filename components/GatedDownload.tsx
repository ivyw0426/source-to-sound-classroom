"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, FileText, LockKeyhole, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type GatedDownloadProps = {
  href: string;
  label: string;
  isAuthenticated: boolean;
  variant: "card" | "button";
  eyebrow?: string;
  description?: string;
};

export function GatedDownload({
  href,
  label,
  isAuthenticated,
  variant,
  eyebrow,
  description,
}: GatedDownloadProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const redirect = encodeURIComponent(pathname || "/lessons");
  const signupHref = `/signup?redirect=${redirect}`;
  const loginHref = `/login?redirect=${redirect}`;

  if (isAuthenticated) {
    return (
      <a
        href={href}
        download
        className={getClassName(variant)}
      >
        {variant === "card" ? (
          <>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-water-50 text-water-700 group-hover:bg-white">
              <FileText aria-hidden="true" size={21} />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-bold text-slate-950">
                {eyebrow || "Download"}
              </span>
              <span className="mt-1 block text-sm leading-5 text-slate-600">
                {label}
              </span>
            </span>
            <Download
              aria-hidden="true"
              size={17}
              className="ml-auto shrink-0 text-water-700"
            />
          </>
        ) : (
          <>
            {label}
            <Download aria-hidden="true" size={16} />
          </>
        )}
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={getClassName(variant)}
      >
        {variant === "card" ? (
          <>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-water-50 text-water-700 group-hover:bg-white">
              <FileText aria-hidden="true" size={21} />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-bold text-slate-950">
                {eyebrow || "Download"}
              </span>
              <span className="mt-1 block text-sm leading-5 text-slate-600">
                {label}
              </span>
            </span>
            <LockKeyhole
              aria-hidden="true"
              size={17}
              className="ml-auto shrink-0 text-water-700"
            />
          </>
        ) : (
          <>
            {label}
            <LockKeyhole aria-hidden="true" size={16} />
          </>
        )}
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="download-lock-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 px-4 py-6"
        >
          <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-soft">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="focus-ring absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-900"
            >
              <X aria-hidden="true" size={18} />
            </button>
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-water-50 text-water-700">
              <LockKeyhole aria-hidden="true" size={24} />
            </div>
            <h2
              id="download-lock-title"
              className="mt-5 text-2xl font-bold text-slate-950"
            >
              Create an account to download this
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              You can view the lesson slides on this page, but downloads are
              available only after you create an account or log in.
            </p>
            {description ? (
              <p className="mt-3 rounded-md bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                {description}
              </p>
            ) : null}
            <Link
              href={signupHref}
              className="focus-ring mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-water-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-water-900"
            >
              Create account
            </Link>
            <p className="mt-4 text-center text-sm text-slate-600">
              Already have an account?{" "}
              <Link
                href={loginHref}
                className="font-semibold text-water-800 hover:text-water-950"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}

function getClassName(variant: "card" | "button") {
  return cn(
    "focus-ring",
    variant === "card" &&
      "group flex w-full items-center gap-3 rounded-lg border border-water-100 bg-white p-4 text-left shadow-sm transition hover:border-water-300 hover:bg-water-50",
    variant === "button" &&
      "inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-water-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-water-900",
  );
}
