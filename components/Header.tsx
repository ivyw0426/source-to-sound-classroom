import Link from "next/link";
import { logoutAction } from "@/app/auth-actions";
import { UserMenu } from "@/components/auth/UserMenu";
import { getCurrentUser } from "@/lib/supabase/server";

const navItems = [
  { href: "/lessons", label: "Lessons" },
  { href: "/bootcamp", label: "Online Bootcamp", badge: true },
  { href: "/initiatives", label: "Initiatives" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export async function Header() {
  const user = await getCurrentUser();

  return (
    <header className="sticky top-0 z-40 border-b border-forest-100 bg-[#fbfcf4]/95 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
      >
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-forest-100">
            <img
              src="/images/sts-logo.png"
              alt=""
              aria-hidden="true"
              className="h-10 w-10 object-contain"
            />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-xl font-bold leading-5 text-water-900">
              Source to Sound
            </span>
            <span className="block text-[11px] font-semibold lowercase tracking-normal text-forest-700">
              explore. learn. protect.
            </span>
          </span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring group rounded-full px-4 py-2 text-sm font-bold text-slate-700 hover:text-water-900"
            >
              {item.label}
              {item.badge ? (
                <span className="ml-2 rounded-full bg-sun-100 px-2 py-0.5 text-[10px] font-bold uppercase text-water-900">
                  New
                </span>
              ) : null}
            </Link>
          ))}
        </div>
        <UserMenu user={user} />
      </nav>
      <div className="flex flex-wrap justify-center gap-2 border-t border-forest-100 px-4 py-3 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="focus-ring rounded-full px-3 py-2 text-sm font-bold text-slate-700 hover:bg-water-50"
          >
            {item.label}
          </Link>
        ))}
        {user ? (
          <>
            <Link
              href="/account"
              className="focus-ring rounded-full px-3 py-2 text-sm font-bold text-water-900 hover:bg-water-50"
            >
              My Account
            </Link>
            <form action={logoutAction}>
              <button
                type="submit"
                className="focus-ring rounded-full px-3 py-2 text-sm font-bold text-slate-700 hover:bg-forest-50"
              >
                Log Out
              </button>
            </form>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="focus-ring rounded-full px-3 py-2 text-sm font-bold text-water-900 hover:bg-water-50"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="focus-ring rounded-full bg-water-700 px-4 py-2 text-sm font-bold text-white"
            >
              Create Account
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
