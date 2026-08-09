import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { updateProfileFormAction } from "@/app/auth-actions";
import { RegistrationStatusCard } from "@/components/account/RegistrationStatusCard";
import type { BootcampRegistration, Profile } from "@/lib/auth";
import { adultRoles } from "@/lib/auth";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "My Account",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AccountPage() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return <SetupMissing />;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?redirect=/account");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("id,email,full_name,role")
    .eq("id", user.id)
    .maybeSingle<Profile>();

  const { data: registration } = await supabase
    .from("bootcamp_registrations")
    .select("*")
    .eq("user_id", user.id)
    .maybeSingle<BootcampRegistration>();

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-wide text-forest-700">
          My account
        </p>
        <h1 className="mt-2 text-4xl font-bold text-slate-950">
          Account dashboard
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Manage adult profile information and view bootcamp registration
          status.
        </p>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-[360px_1fr]">
        <section className="rounded-[2rem] border border-forest-100 bg-white/90 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">Profile</h2>
          <form action={updateProfileFormAction} className="mt-5 grid gap-4">
            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                Full name
              </span>
              <input
                name="fullName"
                defaultValue={profile?.full_name || ""}
                required
                className="focus-ring mt-2 h-11 w-full rounded-full border border-forest-100 px-3 text-sm text-slate-800"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-800">Email</span>
              <input
                value={user.email || profile?.email || ""}
                readOnly
                className="mt-2 h-11 w-full rounded-full border border-forest-100 bg-[#fbfcf4] px-3 text-sm text-slate-600"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-800">Role</span>
              <select
                name="role"
                defaultValue={profile?.role || ""}
                required
                className="focus-ring mt-2 h-11 w-full rounded-full border border-forest-100 bg-white px-3 text-sm text-slate-800"
              >
                <option value="">Select your role</option>
                {adultRoles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="submit"
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full bg-water-700 px-5 py-3 text-sm font-semibold text-white hover:bg-water-900"
            >
              Update Profile
            </button>
          </form>
        </section>
        <RegistrationStatusCard registration={registration || null} />
      </div>
    </section>
  );
}

function SetupMissing() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-6 text-amber-950">
        <h1 className="font-display text-4xl font-bold">Account setup required</h1>
        <p className="mt-3 text-sm leading-6">
          Supabase environment variables are needed before accounts can be used.
          See the README and `.env.example` for setup.
        </p>
      </div>
    </section>
  );
}

