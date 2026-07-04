import Link from "next/link";
import { Fredoka } from "next/font/google";
import { ArrowRight, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { adultConsentNotice } from "@/lib/bootcamp";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export function BootcampHero({ compact = false }: { compact?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-water-50 py-16 sm:py-20">
      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(#187c9c22_1px,transparent_1px),linear-gradient(90deg,#187c9c22_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="absolute -right-24 top-10 h-56 w-56 rounded-full bg-forest-100/70" />
      <div className="absolute -left-20 bottom-8 h-48 w-48 rounded-full bg-sun-100/70" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div>
          <p
            className={`${fredoka.className} inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-water-900 shadow-sm ring-1 ring-water-100`}
          >
            Four-Week Online Bootcamp
          </p>
          <h1
            className={`${fredoka.className} mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-normal text-water-900 sm:text-6xl`}
          >
            Turn Your Neighborhood Into a Research Lab
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Middle school students conduct real environmental research in their
            own communities while learning practical skills in data analysis,
            digital mapping, research communication, presentation design, and
            public speaking.
          </p>
          {!compact ? (
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Students investigate a local watershed or stormwater question,
              work with real public data, build an ArcGIS StoryMap, and present
              their findings at a virtual Source to Sound Student Symposium
              attended by environmental professionals.
            </p>
          ) : null}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/bootcamp/apply"
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-water-700 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-water-900"
            >
              Apply for a Class Slot
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
            <Link
              href="/bootcamp#timeline"
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-water-900 ring-1 ring-water-100 hover:bg-water-50"
            >
              See What Students Will Do
            </Link>
          </div>
          <p className="mt-5 flex max-w-2xl items-start gap-2 text-sm font-medium leading-6 text-slate-700">
            <ShieldCheck aria-hidden="true" size={18} className="mt-1 shrink-0 text-forest-700" />
            {adultConsentNotice}
          </p>
        </div>
        <div className="grid gap-4 rounded-[28px] bg-white p-5 shadow-soft ring-1 ring-water-100">
          <div className="rounded-[24px] bg-water-900 p-6 text-white">
            <div className="flex items-center justify-between gap-3">
              <span className={`${fredoka.className} rounded-full bg-white/15 px-3 py-1 text-sm font-bold`}>
                Live Online
              </span>
              <Sparkles aria-hidden="true" className="text-sun-100" />
            </div>
            <h2 className="mt-10 text-2xl font-bold">
              Research, map, write, and present a local watershed story.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {["Data", "Maps", "Voice"].map((label) => (
              <div key={label} className="rounded-2xl bg-slate-50 p-4">
                <MapPin aria-hidden="true" size={18} className="text-forest-700" />
                <p className={`${fredoka.className} mt-3 text-lg font-bold text-slate-950`}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
