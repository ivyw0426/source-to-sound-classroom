"use client";

import {
  Beaker,
  Binoculars,
  Droplets,
  Leaf,
  Search,
  Settings2,
  SlidersHorizontal,
  X,
} from "lucide-react";
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
  "Lab Investigation",
  "Field Investigation",
];

type LessonLibraryProps = {
  lessons: Lesson[];
};

function TopicIcon({ topic }: { topic: string }) {
  if (topic.includes("Water") || topic.includes("Runoff") || topic.includes("Stormwater")) {
    return <Droplets aria-hidden="true" size={14} />;
  }

  if (topic.includes("Engineering") || topic.includes("Filtration")) {
    return <Beaker aria-hidden="true" size={14} />;
  }

  if (topic.includes("Field") || topic.includes("Habitat")) {
    return <Binoculars aria-hidden="true" size={14} />;
  }

  return <Leaf aria-hidden="true" size={14} />;
}

export function LessonLibrary({ lessons }: LessonLibraryProps) {
  const [query, setQuery] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [duration, setDuration] = useState(durationOptions[0]);
  const [difficulty, setDifficulty] = useState(difficultyOptions[0]);
  const [activityType, setActivityType] = useState(activityOptions[0]);
  const [showAllTopics, setShowAllTopics] = useState(false);

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
  const visibleTopics = showAllTopics ? topicFilters : topicFilters.slice(0, 7);

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
    <div className="mx-auto grid w-full max-w-6xl gap-8">
      <section
        aria-label="Lesson filters"
        className="rounded-[1.5rem] border border-forest-100 bg-white/90 p-4 shadow-sm backdrop-blur sm:p-5"
      >
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <label className="block">
            <span className="sr-only">Search lessons</span>
            <span className="flex h-12 items-center gap-2 rounded-xl border border-forest-100 bg-white px-4 focus-within:border-water-700 focus-within:ring-2 focus-within:ring-water-100">
              <Search aria-hidden="true" size={18} className="text-slate-500" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try runoff, drains, ecocolumn..."
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

        <div className="mt-5 border-t border-forest-100 pt-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-bold text-water-900">
            <SlidersHorizontal aria-hidden="true" size={17} />
            Explore by topic
          </div>
          <div className="flex flex-wrap gap-2">
            {visibleTopics.map((topic) => {
              const selected = selectedTopics.includes(topic);
              return (
                <button
                  key={topic}
                  type="button"
                  onClick={() => toggleTopic(topic)}
                  className={cn(
                    "focus-ring inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold transition",
                    selected
                      ? "border-water-700 bg-water-700 text-white"
                      : "border-forest-100 bg-white text-slate-700 hover:border-water-100 hover:bg-water-50",
                  )}
                  aria-pressed={selected}
                >
                  <TopicIcon topic={topic} />
                  {topic}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => setShowAllTopics((current) => !current)}
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-forest-100 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:border-water-100 hover:bg-water-50"
              aria-expanded={showAllTopics}
            >
              <Settings2 aria-hidden="true" size={14} />
              {showAllTopics ? "Less" : "More"}
            </button>
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          <button
            type="button"
            onClick={resetFilters}
            disabled={!hasActiveFilters}
            className="focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-water-900 transition hover:bg-water-50 disabled:cursor-not-allowed disabled:text-slate-400 disabled:hover:bg-transparent"
          >
            <X aria-hidden="true" size={16} />
            Reset filters
          </button>
        </div>
      </section>

      {filteredLessons.length > 0 ? (
        <section aria-label="Lesson results">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="inline-flex items-center gap-2 text-2xl font-extrabold tracking-normal text-water-900">
              <Leaf aria-hidden="true" size={22} className="text-forest-500" />
              Featured Lessons
            </h2>
            <p className="text-sm font-bold text-forest-700">
              Showing {filteredLessons.length} of {lessons.length}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredLessons.map((lesson) => (
              <LessonCard key={lesson.slug} lesson={lesson} />
            ))}
          </div>
        </section>
      ) : (
        <section className="rounded-[2rem] border border-dashed border-forest-100 bg-white p-8 text-center">
          <h2 className="font-display text-3xl font-bold text-water-900">
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
            className="focus-ring mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-water-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-water-900"
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
        className="focus-ring mt-2 h-12 w-full rounded-xl border border-forest-100 bg-white px-4 text-sm font-medium text-slate-700"
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
