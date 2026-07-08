import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy notes for Source to Sound Classroom lessons, accounts, and bootcamp applications.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <h1 className="text-4xl font-bold text-slate-950">Privacy</h1>
      <div className="mt-6 grid gap-6 text-sm leading-7 text-slate-700">
        <p>
          Source to Sound Classroom is designed so public lessons can be browsed
          without an account. The MVP does not create direct student accounts,
          public user profiles, comments, direct messaging, or public student
          submissions.
        </p>
        <p>
          Accounts may be used by teachers, parents or guardians, school
          administrators, and program partners. Bootcamp applications collect
          adult contact information, student first name, grade, general research
          interests, and class-slot preferences. The site does not request
          student last names, birthdays, home addresses, student phone numbers,
          or unnecessary student information.
        </p>
        <p>
          Student names, photos, recordings, project work, or identifying
          information should not be publicly shared without separate school and
          guardian permission. Submitted applications are private and should be
          protected by database security policies.
        </p>
        <p>
          Educational and safety information on this website is general and
          should be adapted to school, district, program, and local
          requirements. Programs serving minors should receive professional
          privacy, legal, and school-policy review before collecting information
          at scale.
        </p>
      </div>
    </section>
  );
}
