import type { Metadata } from "next";
import { Download, FileSpreadsheet, FileText, Presentation, Users } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Teacher Resources",
  description:
    "Placeholder library for Source to Sound Classroom worksheets, slide decks, rubrics, supply lists, parent letters, and ArcGIS templates.",
};

const resources = [
  { title: "Worksheets", icon: FileText, description: "Student handouts, observation sheets, and planning guides." },
  { title: "Slide decks", icon: Presentation, description: "Short launch slides for watershed, runoff, and fieldwork lessons." },
  { title: "Rubrics", icon: FileSpreadsheet, description: "Assessment tools for StoryMaps, lab reports, proposals, and photo captions." },
  { title: "Supply lists", icon: FileText, description: "Classroom supply checklists for labs, mapping, and design challenges." },
  { title: "Parent letters", icon: Users, description: "Family-facing notes for field observations, photo safety, and permissions." },
  { title: "ArcGIS templates", icon: FileSpreadsheet, description: "Starter StoryMap outlines and mapping prompts for local watershed work." },
];

export default function TeacherResourcesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <SectionHeading
        eyebrow="Teacher resources"
        title="Download-ready materials will live here"
      >
        This placeholder library shows how the platform can grow into a full
        curriculum support hub. Download buttons are intentionally marked as
        coming soon until final files are published.
      </SectionHeading>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource) => (
          <article key={resource.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <resource.icon aria-hidden="true" size={28} className="text-water-700" />
            <h2 className="mt-5 text-xl font-bold text-slate-950">
              {resource.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {resource.description}
            </p>
            <button
              type="button"
              disabled
              className="mt-6 inline-flex min-h-11 w-full items-center justify-between rounded-md bg-slate-100 px-4 py-3 text-left text-sm font-semibold text-slate-500"
            >
              <span>Download</span>
              <span className="inline-flex items-center gap-2 text-xs">
                Coming soon
                <Download aria-hidden="true" size={15} />
              </span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
