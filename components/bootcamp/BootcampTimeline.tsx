import { bootcampWeeks } from "@/lib/bootcamp";

export function BootcampTimeline() {
  return (
    <section id="timeline" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wide text-forest-700">
            Four-week structure
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            From local question to symposium presentation
          </h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {bootcampWeeks.map((week) => (
            <article key={week.week} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-water-50 px-3 py-1 text-xs font-bold text-water-900">
                  {week.week}
                </span>
                <week.icon aria-hidden="true" size={24} className="text-water-700" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-950">
                {week.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {week.summary}
              </p>
              <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-700">
                {week.points.map((point) => (
                  <li key={point} className="rounded-md bg-slate-50 px-3 py-2">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-8 rounded-lg bg-forest-900 p-5 text-sm font-semibold leading-6 text-white">
          By the end of the program, each student or team will have a completed
          environmental research project, an ArcGIS StoryMap, and a symposium
          presentation.
        </p>
      </div>
    </section>
  );
}
