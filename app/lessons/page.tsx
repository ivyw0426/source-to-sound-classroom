import type { Metadata } from "next";
import { LessonLibrary } from "@/components/LessonLibrary";
import { lessons } from "@/lib/lessons";

export const metadata: Metadata = {
  title: "Lesson Library",
  description:
    "Search and filter free environmental STEM lessons for K-8 by stormwater, water quality, field investigation, engineering, and low impact development.",
  openGraph: {
    title: "Lesson Library | Source to Sound Classroom",
    description:
      "Search and filter free K-8 environmental STEM lessons by stormwater, water quality, field investigation, engineering, and low impact development.",
  },
};

export default function LessonsPage() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fbfcf4]">
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-forest-50 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-display text-5xl font-bold leading-tight tracking-normal text-water-900 sm:text-6xl">
            Find the perfect lesson
          </h1>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Hands-on lessons that make water science meaningful.
          </p>
        </div>
        <div className="mt-8">
          <LessonLibrary lessons={lessons} />
        </div>
      </div>
    </section>
  );
}
