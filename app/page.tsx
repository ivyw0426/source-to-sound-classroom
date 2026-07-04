import {
  BookOpenCheck,
  ClipboardList,
  Droplets,
  Map,
  School,
  ShieldCheck,
  Sprout,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { LessonCard } from "@/components/LessonCard";
import { SectionHeading } from "@/components/SectionHeading";
import { lessons } from "@/lib/lessons";

const featuredLessons = lessons.filter((lesson) => lesson.featured);

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-water-900">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80"
          alt="A green Pacific Northwest watershed landscape with water, trees, and open sky"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-water-900/65" />
        <div className="relative mx-auto flex min-h-[68vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-4 inline-flex rounded-md bg-white/15 px-3 py-1 text-sm font-semibold ring-1 ring-white/25">
              Open-access grades 6-8 curriculum library
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
              Free hands-on watershed and stormwater lessons for middle school
              classrooms.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-water-50">
              Source to Sound Classroom helps grades 6-8 teachers bring
              environmental STEM to life through project-based lessons rooted in
              Pacific Northwest watersheds.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/lessons">Browse Lessons</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Featured lessons"
              title="Start with projects teachers can run right away"
            >
              Each lesson includes classroom-ready objectives, materials,
              instructions, student deliverables, and safety notes.
            </SectionHeading>
            <ButtonLink href="/lessons" variant="ghost" className="self-start">
              View all lessons
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featuredLessons.map((lesson) => (
              <LessonCard key={lesson.slug} lesson={lesson} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How it works" title="A faster path from idea to classroom action">
            Browse by topic or activity type, open a lesson, and adapt the
            materials to your school schedule, safety rules, and local watershed.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: BookOpenCheck,
                title: "Choose a lesson",
                text: "Search by stormwater, GIS, rain gardens, photography, duration, difficulty, or classroom activity type.",
              },
              {
                icon: ClipboardList,
                title: "Use the guide",
                text: "Review objectives, prep notes, materials, instructions, deliverables, and reflection prompts.",
              },
              {
                icon: School,
                title: "Connect to place",
                text: "Adapt projects to your campus, neighborhood, local stream, or community environmental partner.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <item.icon aria-hidden="true" className="text-water-700" size={28} />
                <h3 className="mt-5 text-lg font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-water-900 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-water-100">
              Why stormwater matters
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-normal sm:text-4xl">
              Runoff connects schoolyards to salmon streams.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Droplets,
                text: "Rain moves across roofs, roads, lawns, and parking lots, carrying pollutants toward drains and streams.",
              },
              {
                icon: Sprout,
                text: "Healthy soils, native plants, and rain gardens can slow runoff and filter water.",
              },
              {
                icon: Map,
                text: "Maps help students see how local choices fit into the larger watershed system.",
              },
              {
                icon: ShieldCheck,
                text: "Structured fieldwork builds environmental literacy while keeping safety expectations clear.",
              },
            ].map((item) => (
              <div key={item.text} className="rounded-lg bg-white/10 p-5 ring-1 ring-white/15">
                <item.icon aria-hidden="true" size={24} className="text-sun-100" />
                <p className="mt-4 text-sm leading-6 text-water-50">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <SectionHeading eyebrow="Teacher trust" title="Built for real classrooms">
              Lessons are concise, standards-friendly, and designed for busy
              teachers who need enough structure to begin without a long
              onboarding process.
            </SectionHeading>
          </div>
          <div className="grid gap-4">
            {[
              "No student accounts or student personal data collection in the MVP.",
              "Outdoor activities emphasize adult supervision, school approval, and safe boundaries.",
              "Materials use low-cost supplies, public data, or adaptable classroom alternatives.",
              "Downloads are marked clearly when templates are still coming soon.",
            ].map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm font-medium leading-6 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg bg-forest-900 px-6 py-10 text-white shadow-soft sm:px-10">
          <div className="grid gap-6 md:grid-cols-[1.3fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-normal">
                Bring watershed STEM into your classroom.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-forest-50">
                Ask about classroom lesson support, curriculum collaboration,
                symposium participation, or future sponsored classroom kits.
              </p>
            </div>
            <ButtonLink href="/contact" variant="secondary">
              Contact Source to Sound
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
