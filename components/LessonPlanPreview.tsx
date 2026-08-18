"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, ExternalLink, FileText, LockKeyhole, X } from "lucide-react";
import { useEffect, useState } from "react";

type LessonPlanPreviewProps = {
  href: string;
  label: string;
  isAuthenticated: boolean;
  description?: string;
};

export function LessonPlanPreview({
  href,
  label,
  isAuthenticated,
  description,
}: LessonPlanPreviewProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const redirect = encodeURIComponent(pathname || "/lessons");
  const signupHref = `/signup?redirect=${redirect}`;
  const loginHref = `/login?redirect=${redirect}`;
  const dialogTitleId = isAuthenticated
    ? "lesson-plan-preview-title"
    : "lesson-plan-lock-title";

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="focus-ring group flex w-full items-center gap-3 rounded-[1.5rem] border border-water-100 bg-white p-4 text-left shadow-sm transition hover:border-water-300 hover:bg-water-50"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-water-50 text-water-700 group-hover:bg-white">
          <FileText aria-hidden="true" size={21} />
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-bold text-slate-950">
            Lesson plan
          </span>
          <span className="mt-1 block text-sm leading-5 text-slate-600">
            {label}
          </span>
        </span>
        {isAuthenticated ? (
          <ExternalLink
            aria-hidden="true"
            size={17}
            className="ml-auto shrink-0 text-water-700"
          />
        ) : (
          <LockKeyhole
            aria-hidden="true"
            size={17}
            className="ml-auto shrink-0 text-water-700"
          />
        )}
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogTitleId}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-3 py-4 sm:px-5"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setOpen(false);
            }
          }}
        >
          {isAuthenticated ? (
            <div className="relative flex h-[88vh] w-full max-w-6xl flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-soft">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-forest-100 px-4 py-3 sm:px-5">
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wide text-forest-700">
                    Lesson plan preview
                  </p>
                  <h2
                    id={dialogTitleId}
                    className="truncate text-lg font-bold text-slate-950"
                  >
                    {label}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close lesson plan preview"
                  className="focus-ring inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                >
                  <X aria-hidden="true" size={19} />
                </button>
              </div>

              <div className="grid min-h-0 flex-1 bg-slate-100 lg:grid-cols-[minmax(0,1fr)_180px]">
                <iframe
                  src={`${href}#toolbar=0&navpanes=0`}
                  title={`${label} preview`}
                  className="h-full min-h-[58vh] w-full bg-white"
                />
                <aside className="flex items-center justify-between gap-3 border-t border-forest-100 bg-white p-4 lg:flex-col lg:items-stretch lg:justify-start lg:border-l lg:border-t-0">
                  <p className="hidden text-sm leading-6 text-slate-600 lg:block">
                    Preview the lesson plan here, or save a copy for classroom
                    use.
                  </p>
                  <a
                    href={href}
                    download
                    className="focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-water-700 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-water-900"
                  >
                    Download
                    <Download aria-hidden="true" size={15} />
                  </a>
                </aside>
              </div>
            </div>
          ) : (
            <div className="relative w-full max-w-md rounded-[2rem] bg-white p-6 shadow-soft">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="focus-ring absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              >
                <X aria-hidden="true" size={18} />
              </button>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-water-50 text-water-700">
                <LockKeyhole aria-hidden="true" size={24} />
              </div>
              <h2
                id={dialogTitleId}
                className="mt-5 text-2xl font-bold text-slate-950"
              >
                Create an account to preview this
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Lesson plan previews and downloads are available after you
                create an account or log in.
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
                  className="font-bold text-water-800 hover:text-water-950"
                >
                  Log in
                </Link>
              </p>
            </div>
          )}
        </div>
      ) : null}
    </>
  );
}
