import type { Metadata } from "next";
import { Mail, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Source to Sound Classroom for lesson support, symposium participation, volunteering, curriculum collaboration, and partnerships.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
      <div>
        <SectionHeading
          eyebrow="Contact"
          title="Bring Source to Sound into your classroom or partnership"
        >
          Use this form for adult teacher, school, volunteer, and partner
          inquiries. Classroom support, symposium participation, and curriculum
          collaboration are welcome starting points.
        </SectionHeading>
        <div className="mt-8 grid gap-4">
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <Mail aria-hidden="true" size={24} className="text-water-700" />
            <h2 className="mt-4 text-lg font-bold text-slate-950">
              What to include
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Share your grade level, school context, timeline, and whether you
              need lesson support, a guest connection, or partnership planning.
            </p>
          </div>
          <div className="rounded-lg border border-forest-100 bg-forest-50 p-5">
            <ShieldCheck aria-hidden="true" size={24} className="text-forest-700" />
            <h2 className="mt-4 text-lg font-bold text-forest-900">
              Student privacy
            </h2>
            <p className="mt-2 text-sm leading-6 text-forest-900">
              Do not submit student personal information. Student photos, names,
              or project submissions require school and guardian permission
              before publication.
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
