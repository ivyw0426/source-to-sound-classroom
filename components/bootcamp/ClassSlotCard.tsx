import { CalendarClock, Users } from "lucide-react";
import type { BootcampCohort } from "@/lib/bootcamp";
import { formatCohortDates } from "@/lib/bootcamp";

export function ClassSlotCard({ cohort }: { cohort: BootcampCohort }) {
  const statusText =
    cohort.status === "open"
      ? "Open"
      : cohort.status === "waitlist"
        ? "Waitlist"
        : cohort.status === "full"
          ? "Full"
          : "Closed";

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-bold text-slate-950">{cohort.name}</h3>
        <span className="rounded-full bg-water-50 px-3 py-1 text-xs font-bold text-water-900">
          {statusText}
        </span>
      </div>
      <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
        <p className="flex items-center gap-2">
          <CalendarClock aria-hidden="true" size={16} className="text-forest-700" />
          {formatCohortDates(cohort)}
        </p>
        <p>
          {cohort.dayOfWeek}, {cohort.startTime}-{cohort.endTime}{" "}
          {cohort.timeZone}
        </p>
        <p className="flex items-center gap-2">
          <Users aria-hidden="true" size={16} className="text-forest-700" />
          {cohort.remainingSpaces === null
            ? "Remaining spaces to be announced"
            : `${cohort.remainingSpaces} spaces remaining`}
        </p>
      </div>
    </article>
  );
}
