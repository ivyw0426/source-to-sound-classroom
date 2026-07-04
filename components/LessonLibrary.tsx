"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { LessonCard } from "@/components/LessonCard";
import type { ActivityType, Difficulty, Lesson } from "@/lib/lessons";
import { topicFilters } from "@/lib/lessons";
import { cn } from "@/lib/utils";

const durationOptions = ["Any duration", "1 class", "2-3 classes", "Multi-day project"];
const difficultyOptions: Array<"Any difficulty" | Difficulty> = [
  "Any difficulty",
  "Beginner",
  "Intermediate",
  "Advanced",
];
const activityOptions: Array<"Any activity" | ActivityType> = [
  "Any activity",
  "Mapping",
  "Lab Investigation",
  "Field Investigation",
  "Engineering Design",
  "Photography",
];

type LessonLibraryProps = {
  lessons: Lesson[];
};

export function LessonLibrary({ lessons }: LessonLibraryProps) {
  const [query, setQuery] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [duration, setDuration] = useState(durationOptions[0]);
  const [difficulty, setDifficulty] = useState(difficultyOptions[0]);
  const [activityType, setActivityType] = useState(activityOptions[0]);

  const filteredLessons = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return lessons.filter((lesson) => {
      const searchableText = [
        lesson.title,
        lesson.shortDescription,
        lesson.summary,
        lesson.activityType,
        lesson.difficulty,
        ...lesson.topics,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        normalizedQuery.length === 0 || searchableText.includes(normalizedQuery);
      const matchesTopics =
        selectedTopics.length === 0 ||
        selectedTopics.some((topic) => lesson.topics.includes(topic));
      const matchesDuration =
        duration === "Any duration" || lesson.durationGroup === duration;
      const matchesDifficulty =
        difficulty === "Any difficulty" || lesson.difficulty === difficulty;
      const matchesActivity =
        activityType === "Any activity" || lesson.activityType === activityType;

      return (
        matchesQuery &&
        matchesTopics &&
        matchesDuration &&
        matchesDifficulty &&
        matchesActivity
      );
    });
  }, [activityType, difficulty, duration, lessons, query, selectedTopics]);

  const hasActiveFilters =
    query ||
    selectedTopics.length > 0 ||
    duration !== "Any duration" ||
    difficulty !== "Any difficulty" ||
    activityType !== "Any activity";

  function toggleTopic(topic: string) {
    setSelectedTopics((current) =>
      current.includes(topic)
        ? current.filter((item) => item !== topic)
        : [...current, topic],
    );
  }

  function resetFilters() {
    setQuery("");
    setSelectedTopics([]);
    setDuration("Any duration");
    setDifficulty("Any difficulty");
    setActivityType("Any activity");
  }

  return (
    <div className="grid gap-8">
      <section
        aria-label="Lesson filters"
        className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-6"
      >
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <label className="block">
            <span className="text-sm font-semibold text-slate-800">
              Search lessons
            </span>
            <span className="mt-2 flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 focus-within:border-water-700 focus-within:ring-2 focus-within:ring-water-100">
              <Search aria-hidden="true" size={18} className="text-slate-500" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try runoff, salmon, StoryMap..."
                className="w-full border-0 bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </span>
          </label>
          <FilterSelect
            label="Duration"
            value={duration}
            onChange={setDuration}
            options={durationOptions}
          />
          <FilterSelect
            label="Difficulty"
            value={difficulty}
            onChange={setDifficulty}
            options={difficultyOptions}
          />
          <FilterSelect
            label="Activity type"
            value={activityType}
            onChange={setActivityType}
            options={activityOptions}
          />
        </div>

        <div className="mt-5">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
            <SlidersHorizontal aria-hidden="true" size={17} />
            Topic filters
          </div>
          <div className="flex flex-wrap gap-2">
            {topicFilters.map((topic) => {
              const selected = selectedTopics.includes(topic);
              return (
                <button
                  key={topic}
                  type="button"
                  onClick={() => toggleTopic(topic)}
                  className={cn(
                    "focus-ring rounded-md border px-3 py-2 text-sm font-semibold transition",
                    selected
                      ? "border-water-700 bg-water-700 text-white"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-water-100 hover:bg-water-50",
                  )}
                  aria-pressed={selected}
                >
                  {topic}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-slate-600">
            Showing {filteredLessons.length} of {lessons.length} lessons
          </p>
          <button
            type="button"
            onClick={resetFilters}
            disabled={!hasActiveFilters}
            className="focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-water-900 transition hover:bg-water-50 disabled:cursor-not-allowed disabled:text-slate-400 disabled:hover:bg-transparent"
          >
            <X aria-hidden="true" size={16} />
            Reset filters
          </button>
        </div>
      </section>

      {filteredLessons.length > 0 ? (
        <section aria-label="Lesson results" className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredLessons.map((lesson) => (
            <LessonCard key={lesson.slug} lesson={lesson} />
          ))}
        </section>
      ) : (
        <section className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-950">
            No lessons match those filters.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
            Try removing a topic chip or broadening the duration, difficulty, or
            activity type. More curriculum units can be added to this library
            over time.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="focus-ring mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-water-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-water-900"
          >
            Show all lessons
          </button>
        </section>
      )}
    </div>
  );
}

type FilterSelectProps<T extends string> = {
  label: string;
  value: T;
  onChange: (value: T) => void;
  options: readonly T[];
};

function FilterSelect<T extends string>({
  label,
  value,
  onChange,
  options,
}: FilterSelectProps<T>) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-800">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as T)}
        className="focus-ring mt-2 h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm font-medium text-slate-700"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
