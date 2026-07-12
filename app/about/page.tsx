import type { Metadata } from "next";
import {
  BookOpen,
  Camera,
  Droplets,
  HeartHandshake,
  Leaf,
  Sprout,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Source to Sound, a student-founded nonprofit focused on environmental education, stormwater runoff, salmon habitat, and hands-on watershed learning.",
};

const founders = [
  {
    name: "Founder Name",
    role: "Founder",
    initials: "ST",
    bio: "Add a short founder bio here with environmental education experience, school background, and the story behind Source to Sound.",
  },
  {
    name: "Founder Name",
    role: "Co-Founder",
    initials: "SS",
    bio: "Use this space for another founder profile, including why watershed learning, salmon habitat, and student-led projects matter.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-forest-700">
              About Source to Sound
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
              Student-founded environmental education for watershed-literate
              classrooms.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Source to Sound is a student-founded nonprofit focused on helping
              young people understand how everyday stormwater decisions affect
              local creeks, Puget Sound, and salmon habitat. Source to Sound
              Classroom turns that mission into practical lessons teachers can
              use in grades 6-8 science, enrichment, and club settings.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-slate-950">Mission</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700">
              Make environmental STEM more accessible by providing free,
              project-based curriculum that connects classrooms to local
              watersheds, green infrastructure, and student-led solutions.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                "Free lessons for teachers",
                "Hands-on stormwater and water quality investigations",
                "Local relevance for Pacific Northwest watersheds",
                "Future pathways for student showcases and symposium work",
              ].map((item) => (
                <div key={item} className="rounded-md bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Focus areas" title="Practical topics with local impact">
            The curriculum is intentionally focused, so teachers can build a
            coherent unit around runoff, watershed health, habitat, and civic
            action.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              {
                icon: Droplets,
                title: "Stormwater runoff",
                text: "Where rain goes after it hits roofs, pavement, fields, and drains.",
              },
              {
                icon: Sprout,
                title: "Green infrastructure",
                text: "Rain gardens, healthy soils, native plants, and design solutions.",
              },
              {
                icon: BookOpen,
                title: "Hands-on learning",
                text: "Projects that ask students to observe, model, map, test, and explain.",
              },
              {
                icon: HeartHandshake,
                title: "Community connection",
                text: "Future partnerships with schools, cities, volunteers, and watershed groups.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <item.icon aria-hidden="true" size={26} className="text-water-700" />
                <h2 className="mt-4 text-lg font-bold text-slate-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <SectionHeading eyebrow="Founders" title="Meet the people behind Source to Sound">
              This section is ready for founder photos, names, roles, and short
              bios as the nonprofit story grows.
            </SectionHeading>
            <div className="mt-6 rounded-lg border border-forest-100 bg-forest-50 p-5">
              <Leaf aria-hidden="true" size={24} className="text-forest-700" />
              <p className="mt-4 text-sm leading-6 text-slate-700">
                Keep founder profiles concise, credible, and teacher-facing:
                what you started, why it matters, and how schools can work with
                you.
              </p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {founders.map((founder) => (
              <article
                key={founder.role}
                className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-sm"
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-forest-100 via-water-50 to-white">
                  <div className="text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl font-bold text-forest-700 shadow-sm">
                      {founder.initials}
                    </div>
                    <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-white/85 px-3 py-1 text-xs font-bold uppercase tracking-wide text-forest-700">
                      <Camera aria-hidden="true" size={14} />
                      Photo coming soon
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold text-slate-950">
                    {founder.name}
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-forest-700">
                    {founder.role}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {founder.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-normal text-slate-950">
            Built to grow with teachers and partners.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            The MVP is free for teachers and avoids paywalls. Future support may
            come through donations, grants, district partnerships, sponsored
            classroom kits, city or county education partnerships, professional
            development workshops, and environmentally aligned sponsors.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact">Start a conversation</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
