import type { Metadata } from "next";
import { Camera, Map, Presentation, Sprout } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Initiatives",
  description:
    "Student projects, StoryMaps, rain garden designs, and symposium work from Source to Sound Classroom initiatives.",
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

export default function InitiativesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <SectionHeading
        eyebrow="Initiatives"
        title="Watershed work students can share"
      >
        Student projects are published only after school and guardian approval.
      </SectionHeading>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-forest-100 bg-white/90 p-6 shadow-sm"
          >
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
    </section>
  );
}
