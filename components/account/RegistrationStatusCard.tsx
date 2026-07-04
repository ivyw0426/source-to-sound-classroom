import Link from "next/link";
import type { BootcampRegistration } from "@/lib/auth";
import { getCohortLabel } from "@/lib/bootcamp";

export function RegistrationStatusCard({
  registration,
}: {
  registration: BootcampRegistration | null;
}) {
  if (!registration) {
    return (
      <section className="rounded-lg border border-dashed border-slate-300 bg-white p-6 text-center">
        <h2 className="text-xl font-bold text-slate-950">
          You have not registered for a bootcamp yet.
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Explore the online program and apply for a class slot when you are
          ready.
        </p>
        <Link
          href="/bootcamp"
          className="focus-ring mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-water-700 px-5 py-3 text-sm font-semibold text-white hover:bg-water-900"
        >
          Explore the Online Bootcamp
        </Link>
      </section>
    );
  }

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-950">
            Bootcamp application
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Student: {registration.student_first_name}, grade{" "}
            {registration.student_grade}
          </p>
        </div>
        <span className="rounded-full bg-water-50 px-3 py-1 text-sm font-bold text-water-900">
          {registration.status}
        </span>
      </div>
      <dl className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">
        <div>
          <dt className="font-bold text-slate-950">Preferred class slot</dt>
          <dd>{getCohortLabel(registration.preferred_class_slot)}</dd>
        </div>
        <div>
          <dt className="font-bold text-slate-950">Alternate class slot</dt>
          <dd>{getCohortLabel(registration.alternate_class_slot)}</dd>
        </div>
        <div>
          <dt className="font-bold text-slate-950">School or organization</dt>
          <dd className="break-words">{registration.school_or_organization}</dd>
        </div>
        <div>
          <dt className="font-bold text-slate-950">Location</dt>
          <dd>
            {registration.city}, {registration.state}
          </dd>
        </div>
      </dl>
      {registration.status === "Submitted" ? (
        <Link
          href="/bootcamp/apply"
          className="focus-ring mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-200"
        >
          Edit submitted application
        </Link>
      ) : null}
    </section>
  );
}
