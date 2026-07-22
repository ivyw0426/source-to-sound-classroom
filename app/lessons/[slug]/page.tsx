import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Download,
  FileText,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import type { AriaAttributes, ComponentType } from "react";
import { LessonCard } from "@/components/LessonCard";
import { LessonSlideDeck } from "@/components/LessonSlideDeck";
import { getLessonBySlug, getRelatedLessons, lessons } from "@/lib/lessons";

type LessonPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({
  params,
}: LessonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    return {
      title: "Lesson Not Found",
    };
  }

  return {
    title: lesson.title,
    description: lesson.shortDescription,
    openGraph: {
      title: `${lesson.title} | Source to Sound Classroom`,
      description: lesson.shortDescription,
    },
  };
}

export default async function LessonDetailPage({ params }: LessonPageProps) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    notFound();
  }

  const relatedLessons = getRelatedLessons(lesson.slug);

  return (
    <article>
      <section className="relative overflow-hidden bg-water-900">
        <img
          src={lesson.imageSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-water-900/65" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Link
            href="/lessons"
            className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold text-white hover:text-water-50"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Back to lessons
          </Link>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
            <div>
              <div className="flex flex-wrap gap-2">
                {lesson.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-md bg-white/85 px-3 py-1 text-xs font-bold text-water-900"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <h1 className="mt-5 text-4xl font-bold tracking-normal text-white sm:text-5xl">
                {lesson.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-water-50">
                {lesson.summary}
              </p>
            </div>
            <aside className="rounded-lg border border-white/50 bg-white/90 p-5 shadow-soft backdrop-blur">
              <h2 className="text-sm font-bold uppercase tracking-wide text-slate-700">
                Lesson snapshot
              </h2>
              <dl className="mt-4 grid gap-3 text-sm text-slate-700">
                <SnapshotRow icon={GraduationCap} label="Grade level" value={lesson.gradeRange} />
                <SnapshotRow icon={Clock} label="Duration" value={lesson.duration} />
                <SnapshotRow icon={Sparkles} label="Difficulty" value={lesson.difficulty} />
                <SnapshotRow icon={ClipboardCheck} label="Activity" value={lesson.activityType} />
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wide text-forest-700">
              Lesson resources
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              Lesson deck and downloads
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              View the lesson slides below, open the lesson plan, or download
              the slides PDF.
            </p>
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(300px,0.75fr)]">
            <LessonSlideDeck
              title={lesson.deck.title}
              slideImages={lesson.deck.slideImages}
            />

            <div className="grid gap-5">
              <section className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-forest-50 text-forest-700">
                    <CheckCircle2 aria-hidden="true" size={21} />
                  </span>
                  <h3 className="text-lg font-bold text-slate-950">
                    Lesson objectives
                  </h3>
                </div>
                <div className="mt-5">
                  <BulletList items={lesson.learningObjectives} />
                </div>
              </section>

              {lesson.lessonPlan.href ? (
                <a
                  href={lesson.lessonPlan.href}
                  download
                  className="focus-ring group flex items-center gap-3 rounded-lg border border-water-100 bg-white p-4 text-left shadow-sm transition hover:border-water-300 hover:bg-water-50"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-water-50 text-water-700 group-hover:bg-white">
                    <FileText aria-hidden="true" size={21} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-slate-950">
                      Lesson plan
                    </span>
                    <span className="mt-1 block text-sm leading-5 text-slate-600">
                      {lesson.lessonPlan.label}
                    </span>
                  </span>
                  <Download
                    aria-hidden="true"
                    size={17}
                    className="ml-auto shrink-0 text-water-700"
                  />
                </a>
              ) : null}

              {lesson.deck.pdfHref ? (
                <a
                  href={lesson.deck.pdfHref}
                  download
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-water-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-water-900"
                >
                  Download slides
                  <Download aria-hidden="true" size={16} />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-slate-200 px-5 py-3 text-sm font-semibold text-slate-500"
                >
                  {lesson.deck.title} PDF coming soon
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {relatedLessons.length > 0 ? (
        <section className="bg-white py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Related lessons
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {relatedLessons.map((relatedLesson) => (
                <LessonCard key={relatedLesson.slug} lesson={relatedLesson} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}

type IconType = ComponentType<{
  size?: number;
  className?: string;
  "aria-hidden"?: AriaAttributes["aria-hidden"];
}>;

function SnapshotRow({
  icon: Icon,
  label,
  value,
}: {
  icon: IconType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Icon aria-hidden="true" size={17} className="text-forest-700" />
      <dt className="min-w-24 font-semibold text-slate-950">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
          <CheckCircle2
            aria-hidden="true"
            size={17}
            className="mt-1 shrink-0 text-forest-700"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
