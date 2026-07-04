import Link from "next/link";
import { LogOut, UserCircle } from "lucide-react";
import { logoutAction } from "@/app/auth-actions";
import type { User } from "@supabase/supabase-js";

export function UserMenu({ user }: { user: User | null }) {
  if (!user) {
    return (
      <div className="hidden items-center gap-2 lg:flex">
        <Link
          href="/login"
          className="focus-ring rounded-md px-3 py-2 text-sm font-semibold text-water-900 hover:bg-water-50"
        >
          Log In
        </Link>
        <Link
          href="/signup"
          className="focus-ring rounded-md bg-water-700 px-4 py-2 text-sm font-semibold text-white hover:bg-water-900"
        >
          Create Account
        </Link>
      </div>
    );
  }

  return (
    <div className="hidden items-center gap-2 lg:flex">
      <Link
        href="/account"
        className="focus-ring inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-water-900 hover:bg-water-50"
      >
        <UserCircle aria-hidden="true" size={16} />
        My Account
      </Link>
      <form action={logoutAction}>
        <button
          type="submit"
          className="focus-ring inline-flex items-center gap-2 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200"
        >
          <LogOut aria-hidden="true" size={16} />
          Log Out
        </button>
      </form>
    </div>
  );
}
