import Link from "next/link";
import { ArrowRight, Clock, Coins, Layers3, Signal } from "lucide-react";
import type { Lesson } from "@/lib/lessons";

type LessonCardProps = {
  lesson: Lesson;
};

export function LessonCard({ lesson }: LessonCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className="relative min-h-[190px] overflow-hidden bg-water-900 p-5 text-white">
        <img
          src={lesson.imageSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-water-900/55" />
        <div className="relative">
          <div className="flex flex-wrap gap-2">
            {lesson.topics.slice(0, 3).map((topic) => (
              <span
                key={topic}
                className="rounded-md bg-white/85 px-2.5 py-1 text-xs font-semibold text-water-900"
              >
                {topic}
              </span>
            ))}
          </div>
          <h2 className="mt-4 text-xl font-bold leading-snug text-white">
            {lesson.title}
          </h2>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="flex-1 text-sm leading-6 text-slate-600">
          {lesson.shortDescription}
        </p>
        <dl className="mt-5 grid gap-3 border-t border-slate-100 pt-4 text-sm text-slate-600 sm:grid-cols-2">
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
          <div className="flex items-center gap-2">
            <Coins aria-hidden="true" size={16} className="text-forest-700" />
            <dt className="sr-only">Materials cost</dt>
            <dd>{lesson.materialsCost}</dd>
          </div>
        </dl>
        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="rounded-md bg-forest-50 px-3 py-1.5 text-xs font-semibold text-forest-900">
            {lesson.activityType}
          </span>
          <Link
            href={`/lessons/${lesson.slug}`}
            className="focus-ring inline-flex items-center gap-2 rounded-md bg-water-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-water-900"
          >
            View Lesson
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
