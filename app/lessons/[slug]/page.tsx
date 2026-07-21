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
  Package,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import type { AriaAttributes, ComponentType } from "react";
import { LessonCard } from "@/components/LessonCard";
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
                <SnapshotRow icon={Package} label="Materials cost" value={lesson.materialsCost} />
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
              The full lesson slide deck will be posted here as a PDF.
            </p>
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(300px,0.75fr)]">
            <section className="flex min-h-[420px] flex-col rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-950">
                    Lesson PPT PDF
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    PDF preview placeholder for the complete lesson slides.
                  </p>
                </div>
                <span className="rounded-md bg-water-50 px-3 py-1.5 text-xs font-bold uppercase text-water-900">
                  Coming soon
                </span>
              </div>
              <div className="mt-5 flex flex-1 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-white">
                <div className="px-6 text-center">
                  <FileText
                    aria-hidden="true"
                    size={42}
                    className="mx-auto text-water-700"
                  />
                  <p className="mt-4 text-sm font-semibold text-slate-700">
                    Add the PDF file later and link it here.
                  </p>
                </div>
              </div>
              <button
                type="button"
                disabled
                className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-slate-200 px-4 py-3 text-sm font-semibold text-slate-500"
              >
                Download lesson PPT PDF
                <span className="text-xs">Coming soon</span>
              </button>
            </section>

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

              <section className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-water-50 text-water-700">
                    <Download aria-hidden="true" size={21} />
                  </span>
                  <h3 className="text-lg font-bold text-slate-950">
                    Handouts and templates
                  </h3>
                </div>
                <div className="mt-5 grid gap-3">
                  <button
                    type="button"
                    disabled
                    className="inline-flex min-h-11 items-center justify-between gap-3 rounded-md bg-white px-4 py-3 text-left text-sm font-semibold text-slate-500 ring-1 ring-slate-200"
                  >
                    <span>Lesson PPT PDF</span>
                    <span className="text-xs">Coming soon</span>
                  </button>
                  {lesson.downloads.map((download) =>
                    download.href ? (
                      <a
                        key={download.label}
                        href={download.href}
                        className="focus-ring inline-flex min-h-11 items-center justify-between gap-3 rounded-md bg-water-700 px-4 py-3 text-sm font-semibold text-white hover:bg-water-900"
                      >
                        {download.label}
                        <Download aria-hidden="true" size={16} />
                      </a>
                    ) : (
                      <button
                        key={download.label}
                        type="button"
                        disabled
                        className="inline-flex min-h-11 items-center justify-between gap-3 rounded-md bg-white px-4 py-3 text-left text-sm font-semibold text-slate-500 ring-1 ring-slate-200"
                      >
                        <span>{download.label}</span>
                        <span className="text-xs">Coming soon</span>
                      </button>
                    ),
                  )}
                </div>
              </section>
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
