import { bootcampSkills } from "@/lib/bootcamp";

export function SkillsGrid() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wide text-forest-700">
            Skills students develop
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            Serious research skills, taught at a middle school pace
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {bootcampSkills.map((skill) => (
            <div key={skill.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <skill.icon aria-hidden="true" size={22} className="text-water-700" />
              <p className="mt-3 text-sm font-bold leading-5 text-slate-950">
                {skill.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
