import { Laptop, NotebookPen, ShieldAlert } from "lucide-react";
import type { AriaAttributes, ComponentType } from "react";
import {
  safetyNotice,
  suggestedMaterials,
  technologyRequirements,
} from "@/lib/bootcamp";

export function MaterialsList() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <RequirementCard
          icon={Laptop}
          title="Required technology"
          items={technologyRequirements}
        />
        <RequirementCard
          icon={NotebookPen}
          title="Suggested project materials"
          items={suggestedMaterials}
        />
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950 lg:col-span-2">
          <div className="flex items-center gap-2 font-bold">
            <ShieldAlert aria-hidden="true" size={20} />
            Safety notice
          </div>
          <p className="mt-2">{safetyNotice}</p>
        </div>
      </div>
    </section>
  );
}

function RequirementCard({
  icon: Icon,
  title,
  items,
}: {
  icon: ComponentType<{
    size?: number;
    className?: string;
    "aria-hidden"?: AriaAttributes["aria-hidden"];
  }>;
  title: string;
  items: string[];
}) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <Icon aria-hidden="true" size={26} className="text-water-700" />
      <h2 className="mt-4 text-2xl font-bold text-slate-950">{title}</h2>
      <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
        {items.map((item) => (
          <li key={item} className="rounded-md bg-slate-50 px-3 py-2">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
