"use client";

import { ChevronLeft, ChevronRight, Download, FileText } from "lucide-react";
import { useState } from "react";

type LessonSlideDeckProps = {
  title: string;
  pdfHref?: string;
  slideImages: string[];
};

export function LessonSlideDeck({
  title,
  pdfHref,
  slideImages,
}: LessonSlideDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasSlides = slideImages.length > 0;
  const currentSlide = slideImages[currentIndex];

  function showPreviousSlide() {
    setCurrentIndex((index) => Math.max(0, index - 1));
  }

  function showNextSlide() {
    setCurrentIndex((index) => Math.min(slideImages.length - 1, index + 1));
  }

  return (
    <section className="flex min-h-[420px] flex-col rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-slate-950">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {hasSlides
              ? "Use the arrows below to move through the lesson slides."
              : "PDF preview placeholder for the complete lesson slides."}
          </p>
        </div>
        <span className="rounded-md bg-water-50 px-3 py-1.5 text-xs font-bold uppercase text-water-900">
          {hasSlides ? `${slideImages.length} slides` : "Coming soon"}
        </span>
      </div>

      <div className="mt-5 flex flex-1 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white">
        {hasSlides ? (
          <img
            src={currentSlide}
            alt={`${title} slide ${currentIndex + 1}`}
            className="h-full max-h-[560px] w-full object-contain"
          />
        ) : (
          <div className="px-6 py-16 text-center">
            <FileText
              aria-hidden="true"
              size={42}
              className="mx-auto text-water-700"
            />
            <p className="mt-4 text-sm font-semibold text-slate-700">
              Add the PDF file later and link it here.
            </p>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={showPreviousSlide}
            disabled={!hasSlides || currentIndex === 0}
            aria-label="Previous slide"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md bg-water-700 text-white transition hover:bg-water-900 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500"
          >
            <ChevronLeft aria-hidden="true" size={20} />
          </button>
          <button
            type="button"
            onClick={showNextSlide}
            disabled={!hasSlides || currentIndex === slideImages.length - 1}
            aria-label="Next slide"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md bg-water-700 text-white transition hover:bg-water-900 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500"
          >
            <ChevronRight aria-hidden="true" size={20} />
          </button>
          <span className="text-sm font-semibold text-slate-600">
            {hasSlides ? `Slide ${currentIndex + 1} of ${slideImages.length}` : "Slides coming soon"}
          </span>
        </div>

        {pdfHref ? (
          <a
            href={pdfHref}
            download
            className="focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-forest-700 px-4 py-2 text-sm font-semibold text-white hover:bg-forest-900"
          >
            Download PDF
            <Download aria-hidden="true" size={16} />
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-500"
          >
            Download PDF
            <span className="text-xs">Coming soon</span>
          </button>
        )}
      </div>
    </section>
  );
}
