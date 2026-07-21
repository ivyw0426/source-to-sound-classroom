import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Download,
  FileText,
  GraduationCap,
  Lightbulb,
  MapPinned,
  Package,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import type { AriaAttributes, ComponentType, ReactNode } from "react";
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
              Materials, prep, and classroom handouts
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Everything needed for this lesson lives here, so the separate
              teacher resources page is no longer required.
            </p>
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <ResourcePanel icon={Package} title="Materials">
              <BulletList items={lesson.materials} />
            </ResourcePanel>
            <ResourcePanel icon={FileText} title="Teacher prep">
              <BulletList items={lesson.teacherPreparation} />
            </ResourcePanel>
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
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
        <div className="grid gap-6">
          <ContentBlock icon={CheckCircle2} title="Learning Objectives">
            <BulletList items={lesson.learningObjectives} />
          </ContentBlock>

          <ContentBlock icon={ClipboardCheck} title="Step-by-Step Classroom Instructions">
            <ol className="grid gap-3">
              {lesson.instructions.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-water-700 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </ContentBlock>

          <ContentBlock icon={GraduationCap} title="Student Deliverable">
            <p className="text-sm leading-6 text-slate-700">
              {lesson.studentDeliverable}
            </p>
          </ContentBlock>

          <ContentBlock icon={Lightbulb} title="Assessment or Reflection Prompts">
            <BulletList items={lesson.assessmentPrompts} />
          </ContentBlock>

          <ContentBlock icon={MapPinned} title="Real-World Connection">
            <p className="text-sm leading-6 text-slate-700">
              {lesson.realWorldConnection}
            </p>
          </ContentBlock>

          <ContentBlock icon={Sparkles} title="Extension Ideas">
            <BulletList items={lesson.extensionIdeas} />
          </ContentBlock>
        </div>

        <aside className="grid content-start gap-5">
          <section className="rounded-lg border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-center gap-2 text-amber-900">
              <ShieldAlert aria-hidden="true" size={20} />
              <h2 className="text-lg font-bold">Safety and privacy</h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-amber-950">
              Outdoor activities require adult supervision and school approval.
              Students should not enter roads, private property, streams,
              construction areas, or unsafe locations for fieldwork.
            </p>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2 text-slate-950">
              <AlertTriangle aria-hidden="true" size={20} className="text-clay-500" />
              <h2 className="text-lg font-bold">Teacher adaptation note</h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Lessons are educational resources and may need adaptation for
              local standards, school policies, accessibility needs, weather,
              and available supervision.
            </p>
          </section>

          <section className="rounded-lg border border-water-100 bg-water-50 p-5">
            <h2 className="text-lg font-bold text-water-900">
              Online Bootcamp
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Students who want to go deeper can apply for the four-week online
              environmental research bootcamp with adult registration.
            </p>
            <Link
              href="/bootcamp"
              className="focus-ring mt-4 inline-flex min-h-10 items-center justify-center rounded-md bg-water-700 px-4 py-2 text-sm font-semibold text-white hover:bg-water-900"
            >
              Explore Bootcamp
            </Link>
          </section>
        </aside>
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

function ContentBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: IconType;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-forest-50 text-forest-700">
          <Icon aria-hidden="true" size={21} />
        </span>
        <h2 className="text-xl font-bold text-slate-950">{title}</h2>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function ResourcePanel({
  icon: Icon,
  title,
  children,
}: {
  icon: IconType;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-lg border border-slate-200 bg-slate-50 p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-forest-50 text-forest-700">
          <Icon aria-hidden="true" size={21} />
        </span>
        <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      </div>
      <div className="mt-5">{children}</div>
    </section>
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
