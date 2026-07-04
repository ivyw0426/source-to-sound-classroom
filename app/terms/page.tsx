import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms and safety notes for using Source to Sound Classroom educational resources and bootcamp materials.",
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <h1 className="text-4xl font-bold text-slate-950">Terms and Safety</h1>
      <div className="mt-6 grid gap-6 text-sm leading-7 text-slate-700">
        <p>
          Source to Sound Classroom provides educational resources for teachers,
          families, and program partners. Lessons and bootcamp materials may
          need adaptation for local standards, school policies, accessibility
          needs, weather, supervision, and community context.
        </p>
        <p>
          Outdoor observations require adult supervision and school or guardian
          approval. Students may not enter roads, streams, construction areas,
          private property, or other unsafe locations for fieldwork.
        </p>
        <p>
          Bootcamp applications request class-slot review only. Submitting an
          application does not guarantee enrollment, specific cohort dates,
          software access, professional participation, certificates, or public
          presentation opportunities unless separately confirmed by the program.
        </p>
        <p>
          The website&apos;s educational and safety information is general and
          should not be treated as legal, medical, engineering, or site-specific
          safety advice. Programs serving minors should receive professional
          review before operating at scale.
        </p>
      </div>
    </section>
  );
}
