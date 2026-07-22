import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CalendarDays,
  Download,
  FileText,
  Laptop,
  Map,
  PenLine,
  Presentation,
  Video,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ArcGIS StoryMap Bootcamp | Source to Sound",
  description:
    "A five-lesson online bootcamp where students investigate a local environmental problem, build ArcGIS maps, create a StoryMap, draft a policy recommendation, and present at a symposium.",
  alternates: {
    canonical: "/bootcamp",
  },
  openGraph: {
    title: "ArcGIS StoryMap Bootcamp | Source to Sound",
    description:
      "A five-lesson online bootcamp where students investigate a local environmental problem, build ArcGIS maps, create a StoryMap, draft a policy recommendation, and present at a symposium.",
  },
};

const overviewCards = [
  {
    icon: CalendarDays,
    title: "Structure",
    text: "5 lessons, 1 per week, 45-60 minutes per lesson.",
  },
  {
    icon: Video,
    title: "Meeting format",
    text: "Hosted on Zoom.",
  },
  {
    icon: Map,
    title: "Main project",
    text: "Students use ArcGIS Map Viewer and StoryMaps to investigate an environmental problem in their local community.",
  },
];

const weeklyStructure = [
  "Lesson 1: Understanding the topic and the tools",
  "Lesson 2: Building the maps",
  "Lesson 3: Creating the StoryMap",
  "Lesson 4: Write findings, draft policy recommendation, publish the URL",
  "Lesson 5: Symposium",
];

const materialsNeeded = [
  "Before class, complete the instructions on the PDF we will send out, including ArcGIS account creation information.",
  "Computer",
  "Stable internet connection",
  "Pencil/pen and paper",
];

const lessons = [
  {
    label: "Lesson 1",
    title: "Understanding the topic and the tools",
    icon: BookOpenCheck,
    agenda: [
      "Begin with bootcamp overview: over the next 4 classes, students will investigate a real environmental problem in their local community, use mapping software, build computational/data skills, and publish a platform of findings to present to a panel at the symposium.",
      "Introductions of coaches.",
      "Introduction of ArcGIS.",
      "Briefly go over the 2 parts students will use: Map Viewer and StoryMaps.",
      "Present the deliverables and skills students will gain.",
      "Build a research question: strong vs. weak questions, with examples.",
      "Give students 5 minutes to write down 2-3 candidate research questions for practice, then have some students share.",
      "Practice activity: students experiment with ArcGIS by typing in their school/neighborhood and exploring the features.",
      "Wrap up and introduce homework before the next lesson.",
    ],
    homework: [
      "Finalize 1 research question in 1 sentence, then elaborate: what place is it specific to, can ArcGIS data answer it, and what would that answer do?",
      "Explore ArcGIS and think about what aspects of this problem you want to present or learn more about.",
    ],
  },
  {
    label: "Lesson 2",
    title: "Building the maps",
    icon: Map,
    agenda: [
      "Share research questions from last class.",
      "Give feedback on specificity and ask what data students would need.",
      "Give the class 2-3 minutes to finalize their questions.",
      "Explain what a map layer is and why it matters, so students understand why they are adding layers.",
      "Add the 1st layer: boundary of the area being studied to focus the map.",
      "Add the core data layer that helps answer the research question.",
      "Experiment by adding other layers, changing colors, and adjusting the map.",
      "Save the map.",
    ],
    homework: [
      "Finish the map that will be used, experiment, and add more layers.",
      "Write 3 main observations from the current map.",
      "Write a paragraph attempting to answer the research question from the map.",
    ],
  },
  {
    label: "Lesson 3",
    title: "Creating the StoryMap",
    icon: FileText,
    agenda: [
      "Have 2-3 students share their maps.",
      "Make sure the boundary is visible, the core data layer is styled clearly, and the map is meaningful.",
      "Go over what a StoryMap is: a platform that takes your map and surrounds it with other visuals and analysis to turn it into a story or argument.",
      "Get used to the platform and show examples.",
      "Go over the essentials: the problem, research question, data/maps, what students found, and the recommendation.",
      "Embed the maps.",
      "Independent work time: students should leave class with a draft of the StoryMap and a finished outline.",
    ],
    homework: [
      "Finish the StoryMap.",
      "Read through the map to make sure it is not confusing.",
      "If emailed to us 2 days before Class 4, we can give feedback before the lesson.",
    ],
  },
  {
    label: "Lesson 4",
    title: "Write findings, draft policy recommendation, publish the URL",
    icon: PenLine,
    agenda: [
      "Have 2-3 students share their StoryMap.",
      "Revision time and questions.",
      "Sharpen the policy recommendation: specific person/body, action, location, and because our data shows finding.",
      "Add data sources.",
      "Publish the URL.",
      "Prepare for symposium presentation.",
    ],
    homework: [
      "Prepare for symposium presentation and make final touches.",
    ],
  },
  {
    label: "Lesson 5",
    title: "Symposium",
    icon: Presentation,
    agenda: [
      "Students present their published StoryMap URL and findings at the symposium.",
    ],
    homework: [],
  },
];

export default function BootcampPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: "ArcGIS StoryMap Bootcamp",
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
      "A five-lesson online bootcamp where students investigate a local environmental problem, build ArcGIS maps, create a StoryMap, draft a policy recommendation, and present at a symposium.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative overflow-hidden bg-water-900">
        <img
          src="/images/source-to-sound-hero.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-water-900/70" />
        <div className="relative mx-auto grid min-h-[62vh] max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
          <div className="text-white">
            <p className="inline-flex rounded-md bg-white/15 px-3 py-1 text-sm font-semibold ring-1 ring-white/25">
              Online bootcamp
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
              ArcGIS StoryMap Bootcamp
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-water-50">
              Students investigate a real environmental problem in their local
              community, build maps in ArcGIS, create a StoryMap, draft a policy
              recommendation, publish the URL, and present at a symposium.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/bootcamp/apply"
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-water-900 hover:bg-water-50"
              >
                Apply for a Class Slot
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
              <a
                href="/bootcamp/bootcamp-lesson-plan.pdf"
                download
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/15"
              >
                Download Lesson Plan PDF
                <Download aria-hidden="true" size={16} />
              </a>
            </div>
          </div>
          <div className="rounded-lg border border-white/30 bg-white/90 p-5 shadow-soft backdrop-blur">
            <h2 className="text-lg font-bold text-slate-950">
              Weekly structure
            </h2>
            <ol className="mt-4 grid gap-3">
              {weeklyStructure.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-slate-50 px-3 py-2 text-sm font-semibold leading-6 text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {overviewCards.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm"
              >
                <item.icon aria-hidden="true" size={26} className="text-water-700" />
                <h2 className="mt-4 text-xl font-bold text-slate-950">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-forest-700">
              Materials needed
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-normal text-slate-950">
              Before the first Zoom lesson
            </h2>
            <ul className="mt-6 grid gap-3">
              {materialsNeeded.map((material) => (
                <li
                  key={material}
                  className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-medium leading-6 text-slate-700"
                >
                  {material}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <Laptop aria-hidden="true" size={26} className="text-water-700" />
              <h2 className="text-2xl font-bold text-slate-950">
                Program overview
              </h2>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              The bootcamp includes 5 lessons, 1 per week, with each lesson
              lasting 45-60 minutes and hosted on Zoom. Lessons 1-4 guide
              students from research question to published StoryMap URL. Lesson
              5 is the symposium.
            </p>
          </div>
        </div>
      </section>

      <section id="lesson-plan" className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wide text-forest-700">
              Lesson plan
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-normal text-slate-950">
              Five weekly sessions
            </h2>
          </div>
          <div className="mt-8 grid gap-5">
            {lessons.map((lesson) => (
              <article
                key={lesson.label}
                className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-md bg-water-700 px-3 py-1.5 text-xs font-bold uppercase text-white">
                    {lesson.label}
                  </span>
                  <lesson.icon aria-hidden="true" size={22} className="text-water-700" />
                  <h3 className="text-xl font-bold text-slate-950">
                    {lesson.title}
                  </h3>
                </div>
                <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_0.72fr]">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-slate-700">
                      In class
                    </h4>
                    <ul className="mt-3 grid gap-2">
                      {lesson.agenda.map((item) => (
                        <li
                          key={item}
                          className="rounded-md bg-white px-3 py-2 text-sm leading-6 text-slate-700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-slate-700">
                      Homework
                    </h4>
                    {lesson.homework.length > 0 ? (
                      <ul className="mt-3 grid gap-2">
                        {lesson.homework.map((item) => (
                          <li
                            key={item}
                            className="rounded-md bg-white px-3 py-2 text-sm leading-6 text-slate-700"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-3 rounded-md bg-white px-3 py-2 text-sm leading-6 text-slate-700">
                        No homework listed for the symposium.
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg bg-forest-900 p-8 text-white shadow-soft sm:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-bold">
                Ready to request a class slot?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-forest-50">
                Apply for the online bootcamp or download the lesson plan PDF
                for the full weekly structure.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/bootcamp/apply"
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-water-900 hover:bg-water-50"
              >
                Start Application
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
              <a
                href="/bootcamp/bootcamp-lesson-plan.pdf"
                download
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15"
              >
                Download PDF
                <Download aria-hidden="true" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
