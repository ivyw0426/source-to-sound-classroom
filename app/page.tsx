import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CircleUserRound,
  Compass,
  Leaf,
  LogIn,
  Mail,
  Sprout,
  Waves,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { LessonCard } from "@/components/LessonCard";
import { lessons } from "@/lib/lessons";

const featuredLessons = lessons.filter((lesson) => lesson.featured).slice(0, 3);

const primaryActions = [
  {
    icon: BookOpen,
    label: "Browse Lessons",
    href: "/lessons",
    variant: "primary" as const,
  },
  {
    icon: CircleUserRound,
    label: "Create Account",
    href: "/signup",
    variant: "secondary" as const,
  },
  {
    icon: LogIn,
    label: "Log In",
    href: "/login",
    variant: "ghost" as const,
  },
  {
    icon: Mail,
    label: "Contact Us",
    href: "/contact",
    variant: "ghost" as const,
  },
];

const exploreItems = [
  { icon: BookOpen, title: "Lessons", href: "/lessons" },
  { icon: Compass, title: "Online Bootcamp", href: "/bootcamp" },
  { icon: Sprout, title: "Initiatives", href: "/initiatives" },
];

export default function HomePage() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fbfcf4]">
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-forest-50 to-transparent" />
      <div className="absolute -left-16 top-28 h-56 w-56 rounded-full bg-forest-50/90 blur-3xl" />
      <div className="absolute bottom-28 right-0 h-64 w-64 rounded-full bg-water-50/80 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 pb-6 pt-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-8 lg:pt-12">
        <div className="z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-sm font-bold text-forest-700 shadow-sm ring-1 ring-forest-100">
            <Leaf aria-hidden="true" size={18} className="-rotate-45" />
            Open-access K-8 curriculum
          </div>
          <h1 className="max-w-2xl font-display text-5xl font-bold leading-[1.05] tracking-normal text-water-900 sm:text-6xl lg:text-[72px]">
            Source to Sound
          </h1>
          <p className="mt-5 max-w-md text-lg leading-8 text-slate-700">
            We provide K-8 access to stormwater and watershed research through
            hands-on field projects, building a generation that understands
            where their water goes and why it matters.
          </p>
          <div className="mt-8 grid max-w-lg gap-3 sm:grid-cols-2">
            {primaryActions.map((action) => (
              <ButtonLink
                key={action.href}
                href={action.href}
                variant={action.variant}
                className="justify-center gap-2"
              >
                <action.icon aria-hidden="true" size={18} />
                {action.label}
              </ButtonLink>
            ))}
          </div>
        </div>

        <div className="relative min-h-[430px] sm:min-h-[500px] lg:min-h-[540px]">
          <div className="absolute left-0 top-10 z-20 flex h-20 w-20 items-center justify-center rounded-full bg-sun-100 text-water-900 shadow-soft ring-4 ring-white sm:h-24 sm:w-24">
            <Waves aria-hidden="true" size={42} strokeWidth={1.7} />
          </div>
          <div className="absolute left-[7%] top-5 h-[66%] w-[72%] rotate-[-4deg] overflow-hidden rounded-[2rem] border-[7px] border-white bg-white shadow-soft">
            <img
              src="/images/source-to-sound-hero.png"
              alt="A winding wetland stream bordered by evergreen forest"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-water-900/20 via-transparent to-white/5" />
          </div>
          <div className="absolute right-[2%] top-[12%] z-10 h-[28%] w-[38%] rotate-[7deg] overflow-hidden rounded-[1.6rem] border-[6px] border-white bg-white shadow-soft">
            <img
              src="/images/students-hands-on-lab-crop.jpg"
              alt="Students working together on a hands-on water science activity"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-[20%] right-[8%] z-10 h-[25%] w-[34%] rotate-[5deg] overflow-hidden rounded-[1.4rem] border-[6px] border-white bg-white shadow-soft">
            <img
              src="/images/rain-garden-initiative.jpg"
              alt="A planted rain garden and green street managing stormwater runoff"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute right-[28%] top-[2%] z-20 rotate-[-8deg] rounded-[1.5rem] bg-white px-5 py-4 font-display text-xl font-bold leading-6 text-water-900 shadow-soft ring-1 ring-forest-100">
            Real science.
            <br />
            Real impact.
          </div>
          <div className="absolute bottom-0 left-4 right-4 z-30 rounded-[1.75rem] bg-white/92 p-4 shadow-soft ring-1 ring-forest-100 backdrop-blur sm:left-8 sm:right-8">
            <div className="grid grid-cols-3 gap-3 text-center">
              {exploreItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="focus-ring flex min-h-20 flex-col items-center justify-center gap-2 rounded-[1.25rem] bg-forest-50/90 px-2 py-3 text-sm font-bold text-water-900 transition hover:-translate-y-0.5 hover:bg-forest-100"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-forest-700 shadow-sm">
                    <item.icon aria-hidden="true" size={22} />
                  </span>
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="relative mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <Leaf
          aria-hidden="true"
          className="absolute left-2 top-16 hidden -rotate-45 text-forest-100 md:block"
          size={54}
        />
        <Sprout
          aria-hidden="true"
          className="absolute right-8 bottom-8 hidden text-forest-100 md:block"
          size={58}
        />
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-forest-700">
              Featured lessons
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-normal text-water-900 sm:text-5xl">
              Start with ready-to-use projects.
            </h2>
          </div>
          <ButtonLink href="/lessons" variant="ghost" className="gap-2 self-start">
            View all lessons
            <ArrowRight aria-hidden="true" size={16} />
          </ButtonLink>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {featuredLessons.map((lesson) => (
            <LessonCard key={lesson.slug} lesson={lesson} />
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-[2rem] border border-forest-100 bg-water-900 shadow-soft lg:grid-cols-[1fr_0.85fr]">
          <div className="p-6 text-white sm:p-8 lg:p-10">
            <p className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-water-50 ring-1 ring-white/20">
              ArcGIS Bootcamp
            </p>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-normal sm:text-5xl">
              Build a StoryMap from a local watershed question.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-water-50">
              Students research, map, publish, and present an environmental project.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/bootcamp" variant="secondary" className="gap-2">
                Online Bootcamp
                <ArrowRight aria-hidden="true" size={16} />
              </ButtonLink>
              <ButtonLink
                href="/bootcamp/apply"
                variant="ghost"
                className="bg-white/10 text-white hover:bg-white/15"
              >
                Apply for a Class Slot
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-3 bg-forest-50/95 p-5 sm:grid-cols-3 lg:grid-cols-1 lg:p-8">
            {["Question", "Maps", "StoryMap"].map((label) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-[1.25rem] bg-white/90 p-4 text-water-900 shadow-sm"
              >
                <Compass aria-hidden="true" size={22} className="text-forest-700" />
                <span className="text-lg font-bold">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 rounded-lg border border-forest-100 bg-white/85 p-6 shadow-sm sm:p-8 lg:grid-cols-[0.75fr_1fr]">
          <h2 className="font-display text-4xl font-bold tracking-normal text-water-900 sm:text-5xl">
            Bring watershed STEM into your classroom.
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <ButtonLink href="/contact" variant="secondary" className="gap-2">
              <Mail aria-hidden="true" size={18} />
              Contact Source to Sound
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
