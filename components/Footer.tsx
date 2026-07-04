import Link from "next/link";
import { Leaf, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2 text-water-900">
            <Leaf aria-hidden="true" size={20} />
            <span className="font-bold">Source to Sound Classroom</span>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
            Free project-based environmental STEM lessons for grades 6-8,
            focused on stormwater, watersheds, salmon habitat, and water
            quality.
          </p>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Lessons are educational resources and may need teacher adaptation
            for local school policies. Outdoor activities require adult
            supervision and school approval.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold text-slate-900">Explore</h2>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <Link className="hover:text-water-900" href="/lessons">
              Lesson Library
            </Link>
            <Link className="hover:text-water-900" href="/teacher-resources">
              Teacher Resources
            </Link>
            <Link className="hover:text-water-900" href="/student-showcase">
              Student Showcase
            </Link>
            <Link className="hover:text-water-900" href="/bootcamp">
              Online Bootcamp
            </Link>
            <Link className="hover:text-water-900" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-water-900" href="/terms">
              Terms
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold text-slate-900">Contact</h2>
          <Link
            href="/contact"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-water-700 hover:text-water-900"
          >
            <Mail aria-hidden="true" size={16} />
            Classroom support and partnerships
          </Link>
          <p className="mt-5 text-xs leading-5 text-slate-500">
            The MVP does not collect student personal information. Student
            photos, names, or submissions require school and guardian permission
            before publication.
          </p>
        </div>
      </div>
    </footer>
  );
}
