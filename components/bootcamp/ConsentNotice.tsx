import { ShieldCheck } from "lucide-react";
import { adultConsentNotice, safetyNotice } from "@/lib/bootcamp";

export function ConsentNotice() {
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
      <div className="flex items-center gap-2 font-bold">
        <ShieldCheck aria-hidden="true" size={20} />
        Adult consent and safety
      </div>
      <p className="mt-2">{adultConsentNotice}</p>
      <p className="mt-2">{safetyNotice}</p>
    </div>
  );
}
