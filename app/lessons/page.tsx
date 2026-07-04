import type { Metadata } from "next";
import { LessonLibrary } from "@/components/LessonLibrary";
import { SectionHeading } from "@/components/SectionHeading";
import { lessons } from "@/lib/lessons";

export const metadata: Metadata = {
  title: "Lesson Library",
  description:
    "Search and filter free environmental STEM lessons for grades 6-8 by stormwater, watersheds, salmon, water quality, GIS, engineering, rain gardens, and more.",
  openGraph: {
    title: "Lesson Library | Source to Sound Classroom",
    description:
      "Search and filter free middle school environmental STEM lessons by topic, duration, difficulty, and activity type.",
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
        type. Every lesson is free for teachers and designed for grades 6-8.
      </SectionHeading>
      <div className="mt-10">
        <LessonLibrary lessons={lessons} />
      </div>
    </section>
  );
}
