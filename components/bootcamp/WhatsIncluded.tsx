import { includedItems } from "@/lib/bootcamp";

export function WhatsIncluded() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wide text-forest-700">
            Program materials
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            What&apos;s Included
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {includedItems.map((item) => (
            <article key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <item.icon aria-hidden="true" size={24} className="text-forest-700" />
              <h3 className="mt-4 text-base font-bold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
