import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-sm font-bold uppercase tracking-wide text-forest-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 font-display text-4xl font-bold tracking-normal text-water-900 sm:text-5xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-base leading-7 text-slate-600">{children}</p>
      ) : null}
    </div>
  );
}
