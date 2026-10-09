import type { Metadata } from "next";
import Image from "next/image";
import {
  BookOpen,
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
    name: "Shreya Santhosh",
    role: "Co-Founder",
    image: "/images/founders/shreya-santhosh.jpg",
    imageAlt: "Shreya Santhosh outdoors",
    bio: "Shreya Santhosh is a senior at Tesla STEM High School interested in biology and environmental science. She has conducted genetics research at the University of Washington, exploring potential cancer therapies and mechanisms underlying disease, and has previously served as a Sustainability Ambassador, promoting sustainable environmental choices. Beyond research, she tutors elementary students in mathematics through The Math Agency, and mentors younger students in science through Science Olympiad. Raised in the Pacific Northwest, she is committed to educating younger generations on ocean conservation and the ways pollution and water systems affect wildlife and ecosystems.",
  },
  {
    name: "Ivy Wei",
    role: "Co-Founder",
    image: "/images/founders/ivy-wei.jpg",
    imageAlt: "Ivy Wei at Woodland Park Zoo",
    bio: "Ivy Wei is a senior at Tesla STEM High School interested in environmental education and accessible STEM learning for younger students. She has collaborated with the University of Washington's outreach program SEAS (Students Explore Aquatic Sciences) on environmental science curriculum development and presented hands-on educational activities at its Open House. Beyond environmental education, Ivy has conducted independent research on Alzheimer's and pursued advanced coursework through the University of Washington. Growing up in the Pacific Northwest, she is especially passionate about the region's natural ecosystems, particularly salmon and their vital role in local watersheds. She hopes to share her passion through inspiring younger generations to explore the natural world.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#fbfcf4]">
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
              use in K-8 science, enrichment, and club settings.
            </p>
          </div>
          <div className="rounded-[2rem] border border-forest-100 bg-white/90 p-6 shadow-sm">
            <h2 className="font-display text-3xl font-bold text-water-900">Mission</h2>
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
                <div key={item} className="rounded-full bg-forest-50 px-4 py-3 text-sm font-semibold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfcf4] py-16 sm:py-20">
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
              <div key={item.title} className="rounded-[2rem] border border-forest-100 bg-white/90 p-5 shadow-sm">
                <item.icon aria-hidden="true" size={26} className="text-water-700" />
                <h2 className="mt-4 text-lg font-bold text-slate-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfcf4] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <SectionHeading eyebrow="Founders" title="Meet the people behind Source to Sound">
              Source to Sound is led by students who care about making
              environmental science local, practical, and welcoming for younger
              learners.
            </SectionHeading>
            <div className="mt-6 rounded-[2rem] border border-forest-100 bg-forest-50 p-5">
              <Leaf aria-hidden="true" size={24} className="text-forest-700" />
              <p className="mt-4 text-sm leading-6 text-slate-700">
                Their work connects classroom STEM with Pacific Northwest
                watersheds, ocean conservation, salmon habitat, and the choices
                that shape local ecosystems.
              </p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {founders.map((founder) => (
              <article
                key={founder.name}
                className="overflow-hidden rounded-[2rem] border border-forest-100 bg-white/90 shadow-sm"
              >
                <div className="relative aspect-[4/5] bg-forest-50">
                  <Image
                    src={founder.image}
                    alt={founder.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
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

      <section className="bg-[#fbfcf4] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold tracking-normal text-water-900">
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
