import type { Metadata } from "next";
import { Camera, Map, Presentation, Sprout } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Student Showcase",
  description:
    "Future home for student StoryMaps, photos, rain garden designs, and symposium work from Source to Sound Classroom projects.",
};

const projects = [
  {
    title: "Student StoryMaps",
    icon: Map,
    description: "Watershed investigations with maps, photos, analysis, and recommendations.",
  },
  {
    title: "Photo documentaries",
    icon: Camera,
    description: "Approved student images documenting stormwater evidence after rain.",
  },
  {
    title: "Rain garden designs",
    icon: Sprout,
    description: "Student proposals for native plants, infiltration, and schoolyard runoff solutions.",
  },
  {
    title: "Symposium projects",
    icon: Presentation,
    description: "Future presentations from classroom partners and student environmental teams.",
  },
];

export default function StudentShowcasePage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <SectionHeading
        eyebrow="Student showcase"
        title="A future gallery for watershed work"
      >
        This page is reserved for student projects after schools and guardians
        approve publication. The MVP does not collect student personal
        information or public submissions.
      </SectionHeading>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <article key={project.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <project.icon aria-hidden="true" size={30} className="text-forest-700" />
            <div className="mt-5 inline-flex rounded-md bg-sun-100 px-2.5 py-1 text-xs font-bold text-slate-800">
              Coming soon
            </div>
            <h2 className="mt-4 text-xl font-bold text-slate-950">
              {project.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {project.description}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-10 rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
        Any student photos, names, or project submissions require school and
        guardian permission before publication.
      </div>
    </section>
  );
}
