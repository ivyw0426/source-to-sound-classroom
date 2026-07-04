import Link from "next/link";
import { Droplets, ExternalLink } from "lucide-react";

const navItems = [
  { href: "/lessons", label: "Lessons" },
  { href: "/teacher-resources", label: "Resources" },
  { href: "/student-showcase", label: "Showcase" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
      >
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-water-700 text-white">
            <Droplets aria-hidden="true" size={21} />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold text-water-900">
              Source to Sound
            </span>
            <span className="block text-xs font-semibold uppercase tracking-wide text-forest-700">
              Classroom
            </span>
          </span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-water-50 hover:text-water-900"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="focus-ring hidden items-center gap-2 rounded-md bg-forest-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-forest-900 sm:inline-flex"
        >
          Support Our Work
          <ExternalLink aria-hidden="true" size={15} />
        </Link>
      </nav>
      <div className="flex gap-1 overflow-x-auto border-t border-slate-100 px-4 py-2 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="focus-ring shrink-0 rounded-md px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-water-50"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
