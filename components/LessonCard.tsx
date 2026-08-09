import Link from "next/link";
import { ArrowRight, Clock, Layers3, Signal } from "lucide-react";
import type { Lesson } from "@/lib/lessons";

type LessonCardProps = {
  lesson: Lesson;
};

export function LessonCard({ lesson }: LessonCardProps) {
  return (
    <Link
      href={`/lessons/${lesson.slug}`}
      aria-label={`View ${lesson.title} lesson`}
      className="focus-ring group flex h-full flex-col overflow-hidden rounded-[1.1rem] border border-forest-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-water-900 text-white">
        <img
          src={lesson.imageSrc}
          alt={lesson.imageAlt}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-forest-700 px-3 py-1 text-[11px] font-bold text-white shadow-sm">
          {lesson.topics[0]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h2 className="text-lg font-bold leading-snug text-slate-950">
          {lesson.title}
        </h2>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
          {lesson.shortDescription}
        </p>
        <dl className="mt-4 grid gap-2 border-t border-forest-100 pt-3 text-xs text-slate-600 sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <Layers3 aria-hidden="true" size={16} className="text-forest-700" />
            <dt className="sr-only">Grade range</dt>
            <dd>{lesson.gradeRange}</dd>
          </div>
          <div className="flex items-center gap-2">
            <Clock aria-hidden="true" size={16} className="text-forest-700" />
            <dt className="sr-only">Duration</dt>
            <dd>{lesson.duration}</dd>
          </div>
          <div className="flex items-center gap-2">
            <Signal aria-hidden="true" size={16} className="text-forest-700" />
            <dt className="sr-only">Difficulty</dt>
            <dd>{lesson.difficulty}</dd>
          </div>
        </dl>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="rounded-md bg-forest-50 px-2.5 py-1.5 text-[11px] font-bold text-forest-900">
            {lesson.activityType}
          </span>
          <span className="inline-flex items-center gap-2 rounded-md bg-water-700 px-3 py-2 text-xs font-bold text-white transition group-hover:bg-water-900">
            View Lesson
            <ArrowRight aria-hidden="true" size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}
