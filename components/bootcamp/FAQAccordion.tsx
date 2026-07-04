"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { bootcampFaqs } from "@/lib/bootcamp";

export function FAQAccordion() {
  const [openQuestion, setOpenQuestion] = useState(bootcampFaqs[0].question);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-wide text-forest-700">
          FAQ
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-normal text-slate-950">
          Common bootcamp questions
        </h2>
        <div className="mt-8 divide-y divide-slate-200 rounded-lg border border-slate-200">
          {bootcampFaqs.map((faq) => {
            const isOpen = openQuestion === faq.question;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenQuestion(isOpen ? "" : faq.question)}
                  className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-slate-950"
                >
                  {faq.question}
                  <ChevronDown
                    aria-hidden="true"
                    size={18}
                    className={isOpen ? "rotate-180 transition" : "transition"}
                  />
                </button>
                {isOpen ? (
                  <p className="px-5 pb-5 text-sm leading-6 text-slate-600">
                    {faq.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
