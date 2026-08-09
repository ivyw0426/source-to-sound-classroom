import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition",
        variant === "primary" &&
          "bg-water-700 text-white shadow-soft hover:bg-water-900",
        variant === "secondary" &&
          "bg-white/90 text-water-900 ring-1 ring-water-700/30 hover:bg-water-50",
        variant === "ghost" &&
          "bg-transparent text-water-900 hover:bg-water-50",
        className,
      )}
    >
      {children}
    </Link>
  );
}
