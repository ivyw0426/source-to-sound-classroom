import type { Metadata } from "next";
import { UserRound } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the Source to Sound co-founders and student directors leading environmental education, curriculum development, outreach, and marketing.",
};

type Person = {
  name: string;
  role?: string;
  image?: string;
  imageAlt?: string;
  bio?: string;
  reserveSpace?: boolean;
};

type LeadershipSection = {
  title: string;
  people: Person[];
};

const leadershipSections: LeadershipSection[] = [
  {
    title: "Co-Founders",
    people: [
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
    ],
  },
  {
    title: "Directors of Curriculum Development",
    people: [
      {
        name: "Melody Zhang",
        role: "Director of Curriculum Development",
        image: "/images/board/melody-zhang.jpeg",
        imageAlt: "Melody Zhang",
        bio: "Melody is a senior at Bothell High School. Outside of school, she loves baking, playing badminton, and photography. Through her tutoring experience, she's discovered how much she enjoys helping younger students learn and grow. She's excited to be part of Source to Sound and help create fun, hands-on environmental science lessons that inspire the next generation.",
      },
      {
        name: "Anthony Cao",
        role: "Director of Curriculum Development",
        image: "/images/board/anthony-cao.png",
        imageAlt: "Anthony Cao",
        bio: "Anthony is passionate about mathematics, physics, environmental science, and engineering, and he enjoys exploring how scientific knowledge can be applied to solve real-world problems. He is interested in math and physics competitions, which challenge him to think critically and approach problems creatively. Through his volunteer work, including habitat restoration, native plant gardening, pollinator meadow projects, and tutoring, he has developed a strong appreciation for both environmental protection and community service. What excites him most about Source to Sound is the opportunity to combine his interests in science and the environment with education by helping younger students learn about sustainability through engaging lessons and hands-on activities. He looks forward to collaborating with others to inspire the next generation to care for and protect our environment.",
      },
      {
        name: "Annabelle Chen",
        role: "Director of Curriculum Development",
        bio: "Annabelle is a junior at Lake Washington High School and she enjoys playing video games in her free time. She has always had an interest in science from a young age, and she enjoys learning more about the different environmental problems around us. She joined Source to Sound to contribute in teaching more students about the wonderful environment in Washington.",
      },
    ],
  },
  {
    title: "Directors of Outreach",
    people: [
      {
        name: "Nina Bhatt",
        role: "Director of Outreach",
        bio: "Nina is a junior at Redmond High School interested in chemistry and bioengineering. She is currently in the beginning stages of developing a research project related to the environmental impact of certain bacteria in water in the Bellevue College Biology Club. Aside from STEM, being a student officer at FASCA has given her experience in communication and organization, two essential skills for her role as Director of Outreach. She's excited to have the opportunity to give exciting educational experiments and research to younger students that she never had access to when she was younger.",
      },
      {
        name: "Jack Shen",
        role: "Director of Outreach",
        reserveSpace: true,
      },
    ],
  },
  {
    title: "Directors of Marketing",
    people: [
      {
        name: "Lina Wu",
        role: "Director of Marketing",
        image: "/images/board/lina-wu.jpeg",
        imageAlt: "Lina Wu",
        bio: "Lina is interested in environmental science, sustainability, and finding ways to make a positive impact in her community. She's gained experience through the City of Redmond's Environmental Steward internship and hands-on environmental restoration work. She's also volunteered as a junior naturalist at the UW Arboretum, where she helped lead younger students during a summer camp. As Director of Marketing, she's excited to help Source to Sound expand its outreach and make environmental science more accessible and engaging for younger generations.",
      },
      {
        name: "Himari Tojima",
        role: "Director of Marketing",
        image: "/images/board/himari-tojima.jpg",
        imageAlt: "Himari Tojima",
        bio: "Himari has a passion for anything artsy or STEM related. She enjoys connecting people and loves working with others, especially when it's about her interests. She is looking forward to helping more students gain valuable opportunities through this organization.",
      },
    ],
  },
];

function Avatar({ person, featured = false }: { person: Person; featured?: boolean }) {
  if (person.image) {
    return (
      <div
        aria-label={person.imageAlt ?? person.name}
        className={
          featured
            ? "min-h-80 rounded-lg bg-forest-50 bg-cover bg-center ring-1 ring-forest-100 sm:h-full"
            : "h-36 w-36 rounded-full bg-forest-50 bg-cover bg-center ring-1 ring-forest-100 sm:h-40 sm:w-40"
        }
        role="img"
        style={{ backgroundImage: `url("${person.image}")` }}
      />
    );
  }

  return (
    <div
      aria-label={`${person.name} profile photo placeholder`}
      className={
        featured
          ? "flex min-h-80 items-center justify-center rounded-lg bg-forest-50 text-forest-700 ring-1 ring-forest-100 sm:h-full"
          : "flex h-36 w-36 items-center justify-center rounded-full bg-forest-50 text-forest-700 ring-1 ring-forest-100 sm:h-40 sm:w-40"
      }
    >
      <UserRound aria-hidden="true" size={featured ? 78 : 56} strokeWidth={1.6} />
    </div>
  );
}

function PersonCard({ person, featured = false }: { person: Person; featured?: boolean }) {
  return (
    <article
      className={
        featured
          ? "grid gap-6 rounded-lg border border-forest-100 bg-white/90 p-5 shadow-sm sm:grid-cols-[minmax(220px,0.42fr)_1fr] sm:p-6"
          : "grid gap-5 rounded-lg border border-forest-100 bg-white/90 p-5 shadow-sm sm:grid-cols-[auto_1fr] sm:p-6"
      }
    >
      <div className={featured ? "min-h-80" : "flex justify-center sm:justify-start"}>
        <Avatar person={person} featured={featured} />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-slate-950">{person.name}</h3>
        {person.role ? (
          <p className="mt-1 text-sm font-bold uppercase tracking-wide text-forest-700">
            {person.role}
          </p>
        ) : null}
        {person.reserveSpace ? (
          <div
            aria-label={`${person.name} bio placeholder`}
            className="mt-5 min-h-36 rounded-lg bg-forest-50/70"
          />
        ) : (
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            {person.bio}
          </p>
        )}
      </div>
    </article>
  );
}

function sectionId(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#fbfcf4] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-5xl font-bold tracking-normal text-water-900 sm:text-6xl">
            Meet our team
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Source to Sound is a student-founded nonprofit focused on helping
            young people understand how everyday stormwater decisions affect
            local creeks, Puget Sound, and salmon habitat. Source to Sound
            Classroom turns that mission into practical lessons teachers can use
            in K-8 science, enrichment, and club settings.
          </p>

          <div className="mt-12 space-y-16">
            {leadershipSections.map((section) => (
              <section key={section.title} aria-labelledby={sectionId(section.title)}>
                <h2
                  id={sectionId(section.title)}
                  className="font-display text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl"
                >
                  {section.title}
                </h2>
                <div className="mt-6 grid gap-5">
                  {section.people.map((person) => (
                    <PersonCard
                      key={person.name}
                      person={person}
                      featured={section.title === "Co-Founders"}
                    />
                  ))}
                </div>
              </section>
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
