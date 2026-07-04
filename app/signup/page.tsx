import type { Metadata } from "next";
import { AuthForm } from "@/components/auth/AuthForm";

export const metadata: Metadata = {
  title: "Create Account",
  robots: { index: false, follow: false },
};

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string }>;
}) {
  const params = await searchParams;
  return (
    <section className="mx-auto max-w-xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <AuthForm mode="signup" redirectTo={params.redirect || "/account"} />
    </section>
  );
}
