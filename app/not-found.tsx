import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-bold uppercase tracking-wide text-forest-700">
        Page not found
      </p>
      <h1 className="mt-3 text-4xl font-bold text-slate-950">
        This resource is not available.
      </h1>
      <p className="mt-4 text-base leading-7 text-slate-600">
        The lesson or page may have moved. The lesson library is the best place
        to keep browsing.
      </p>
      <div className="mt-8">
        <ButtonLink href="/lessons">Browse Lessons</ButtonLink>
      </div>
    </section>
  );
}
