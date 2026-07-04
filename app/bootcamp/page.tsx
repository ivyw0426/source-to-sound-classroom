import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, Map, Presentation, ShieldCheck } from "lucide-react";
import { BootcampHero } from "@/components/bootcamp/BootcampHero";
import { BootcampTimeline } from "@/components/bootcamp/BootcampTimeline";
import { ClassSlotCard } from "@/components/bootcamp/ClassSlotCard";
import { ConsentNotice } from "@/components/bootcamp/ConsentNotice";
import { FAQAccordion } from "@/components/bootcamp/FAQAccordion";
import { MaterialsList } from "@/components/bootcamp/MaterialsList";
import { SkillsGrid } from "@/components/bootcamp/SkillsGrid";
import { WhatsIncluded } from "@/components/bootcamp/WhatsIncluded";
import { bootcampCohorts } from "@/lib/bootcamp";

export const metadata: Metadata = {
  title:
    "Online Environmental Research Bootcamp for Middle School Students | Source to Sound",
  description:
    "A four-week online environmental research program where students in grades 6-8 learn data analysis, digital mapping, ArcGIS StoryMaps, presentation development, and public speaking.",
  alternates: {
    canonical: "/bootcamp",
  },
  openGraph: {
    title:
      "Online Environmental Research Bootcamp for Middle School Students | Source to Sound",
    description:
      "A four-week online environmental research program where students in grades 6-8 learn data analysis, digital mapping, ArcGIS StoryMaps, presentation development, and public speaking.",
  },
};

export default function BootcampPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: "Source to Sound Online Environmental Research Bootcamp",
    provider: {
      "@type": "Organization",
      name: "Source to Sound Classroom",
    },
    educationalProgramMode: "online",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "Middle school student",
    },
    description:
      "A four-week online environmental research program for grades 6-8 students focused on stormwater, watersheds, public data, digital mapping, ArcGIS StoryMaps, and presentation skills.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BootcampHero />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            {
              icon: BookOpenCheck,
              title: "Program overview",
              text: "Students use their neighborhood as a research context, moving from question to evidence to recommendation.",
            },
            {
              icon: Map,
              title: "ArcGIS StoryMaps",
              text: "Students learn how maps, data, photos, and written analysis can become a clear environmental story.",
            },
            {
              icon: Presentation,
              title: "Student symposium",
              text: "The planned final session gives students a chance to present findings and receive feedback.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <item.icon aria-hidden="true" size={28} className="text-water-700" />
              <h2 className="mt-4 text-xl font-bold text-slate-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <BootcampTimeline />
      <SkillsGrid />
      <WhatsIncluded />
      <MaterialsList />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wide text-forest-700">
              Available class slots
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">
              Apply for a four-week cohort
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Dates are placeholders until final program calendars are announced.
              Submitting an application does not guarantee enrollment.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {bootcampCohorts.map((cohort) => (
              <ClassSlotCard key={cohort.id} cohort={cohort} />
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/bootcamp/apply"
              className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-md bg-water-700 px-5 py-3 text-sm font-semibold text-white hover:bg-water-900"
            >
              Apply for a Class Slot
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-forest-700">
              Final project
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">
              A research project students can explain with evidence
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Students build a local watershed or stormwater investigation that
              combines a research question, maps, public data, observations,
              visual communication, and an evidence-based recommendation.
            </p>
          </div>
          <ConsentNotice />
        </div>
      </section>
      <FAQAccordion />
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg bg-forest-900 p-8 text-white shadow-soft sm:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="flex items-center gap-2 text-forest-50">
                <ShieldCheck aria-hidden="true" size={20} />
                <span className="text-sm font-bold uppercase tracking-wide">
                  Adult application required
                </span>
              </div>
              <h2 className="mt-3 text-3xl font-bold">
                Ready to request a class slot?
              </h2>
              <p className="mt-3 text-sm leading-6 text-forest-50">
                Create or log into an adult account to submit the application.
              </p>
            </div>
            <Link
              href="/bootcamp/apply"
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-water-900 hover:bg-water-50"
            >
              Start Application
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
