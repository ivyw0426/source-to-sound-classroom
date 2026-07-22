import type { Metadata } from "next";
import { LessonLibrary } from "@/components/LessonLibrary";
import { SectionHeading } from "@/components/SectionHeading";
import { lessons } from "@/lib/lessons";

export const metadata: Metadata = {
  title: "Lesson Library",
  description:
    "Search and filter free environmental STEM lessons for grades 6-8 by stormwater, water quality, field investigation, engineering, and low impact development.",
  openGraph: {
    title: "Lesson Library | Source to Sound Classroom",
    description:
      "Search and filter free middle school environmental STEM lessons by stormwater, water quality, field investigation, engineering, and low impact development.",
  },
};

export default function LessonsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <SectionHeading
        eyebrow="Lesson library"
        title="Find the right watershed project for your next unit"
      >
        Search classroom-ready lessons by topic, time, difficulty, or activity
        type. Current lessons include After the Rain, Drain Detectives, and
        Create an Ecocolumn.
      </SectionHeading>
      <div className="mt-10">
        <LessonLibrary lessons={lessons} />
      </div>
    </section>
  );
}
