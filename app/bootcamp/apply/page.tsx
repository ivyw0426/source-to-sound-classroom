import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { BootcampApplicationForm } from "@/components/bootcamp/BootcampApplicationForm";
import { ConsentNotice } from "@/components/bootcamp/ConsentNotice";
import type { Profile } from "@/lib/auth";
import { bootcampCohorts } from "@/lib/bootcamp";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Bootcamp Application",
  description:
    "Apply for a Source to Sound online environmental research bootcamp class slot.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function BootcampApplyPage() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return <AuthSetupMissing />;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?redirect=/bootcamp/apply");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("id,email,full_name,role")
    .eq("id", user.id)
    .maybeSingle<Profile>();

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-wide text-forest-700">
          Bootcamp application
        </p>
        <h1 className="mt-2 text-4xl font-bold text-slate-950">
          Apply for a class slot
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          This form is submitted by an adult. It collects only the information
          needed to review a class-slot request and does not guarantee
          enrollment.
        </p>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
        <BootcampApplicationForm
          cohorts={bootcampCohorts}
          defaultEmail={user.email || profile?.email || ""}
          defaultName={profile?.full_name || ""}
          defaultRole={profile?.role || ""}
        />
        <aside className="grid content-start gap-5">
          <ConsentNotice />
          <div className="rounded-lg border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-600">
            <h2 className="text-lg font-bold text-slate-950">
              Already submitted?
            </h2>
            <p className="mt-2">
              Your account dashboard shows registration status and class-slot
              details. Submitted applications can be edited until review begins.
            </p>
            <Link
              href="/account"
              className="mt-4 inline-flex font-semibold text-water-700 hover:text-water-900"
            >
              View account dashboard
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}

function AuthSetupMissing() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-6 text-amber-950">
        <h1 className="text-3xl font-bold">Supabase setup required</h1>
        <p className="mt-3 text-sm leading-6">
          Add Supabase environment variables before accepting bootcamp
          applications. Public lesson pages still work without accounts.
        </p>
      </div>
    </section>
  );
}
