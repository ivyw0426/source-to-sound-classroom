import {
  BarChart3,
  CalendarClock,
  Camera,
  ClipboardList,
  Compass,
  FileText,
  Laptop,
  Map,
  MessageSquare,
  Mic,
  Presentation,
  Search,
  ShieldCheck,
  Sprout,
  Trophy,
  Users,
} from "lucide-react";

export type CohortStatus = "open" | "waitlist" | "full" | "closed";

export type BootcampCohort = {
  id: string;
  name: string;
  startDate: string | null;
  endDate: string | null;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  timeZone: string;
  maxCapacity: number;
  remainingSpaces: number | null;
  status: CohortStatus;
};

export const bootcampCohorts: BootcampCohort[] = [
  {
    id: "fall-a",
    name: "Fall Cohort A",
    startDate: null,
    endDate: null,
    dayOfWeek: "Weekday afternoon",
    startTime: "4:00 PM",
    endTime: "5:15 PM",
    timeZone: "Pacific Time",
    maxCapacity: 18,
    remainingSpaces: 12,
    status: "open",
  },
  {
    id: "fall-b",
    name: "Fall Cohort B",
    startDate: null,
    endDate: null,
    dayOfWeek: "Saturday morning",
    startTime: "10:00 AM",
    endTime: "11:15 AM",
    timeZone: "Pacific Time",
    maxCapacity: 18,
    remainingSpaces: 6,
    status: "open",
  },
  {
    id: "winter-a",
    name: "Winter Cohort A",
    startDate: null,
    endDate: null,
    dayOfWeek: "Weekday evening",
    startTime: "5:00 PM",
    endTime: "6:15 PM",
    timeZone: "Pacific Time",
    maxCapacity: 18,
    remainingSpaces: null,
    status: "waitlist",
  },
];

export const bootcampWeeks = [
  {
    week: "Week 1",
    title: "Ask a Local Question",
    icon: Search,
    summary:
      "Students learn how stormwater moves through neighborhoods, identify their local watershed, and choose a practical research question.",
    points: [
      "Which parts of my neighborhood create the most runoff?",
      "Where does the water entering drains near my school go?",
      "Where is green infrastructure missing?",
      "How might impervious surfaces affect a nearby creek?",
    ],
  },
  {
    week: "Week 2",
    title: "Map and Analyze",
    icon: Map,
    summary:
      "Students work with public environmental datasets, introductory data analysis, and ArcGIS tools to identify local patterns.",
    points: [
      "Public environmental datasets",
      "Impervious surfaces, streams, land use, and water quality",
      "Introductory data interpretation",
      "Digital map building",
    ],
  },
  {
    week: "Week 3",
    title: "Build the Story",
    icon: FileText,
    summary:
      "Students create an ArcGIS StoryMap combining maps, observations, photos, data, written analysis, and a recommendation.",
    points: [
      "StoryMap structure",
      "Evidence-based writing",
      "Visual communication",
      "Presentation materials",
    ],
  },
  {
    week: "Week 4",
    title: "Present the Research",
    icon: Presentation,
    summary:
      "Students practice public speaking, refine their explanation, and present at a virtual Source to Sound Student Symposium.",
    points: [
      "Public-speaking practice",
      "Research explanation",
      "Peer and professional feedback",
      "Final symposium presentation",
    ],
  },
];

export const includedItems = [
  { title: "Four live online sessions", icon: CalendarClock, note: "Planned weekly instruction" },
  { title: "Guided research plan", icon: ClipboardList, note: "Question, evidence, and next steps" },
  { title: "ArcGIS StoryMap instruction", icon: Map, note: "Subject to platform availability" },
  { title: "Public data sources", icon: BarChart3, note: "Environmental datasets and map layers" },
  { title: "Research workbook", icon: FileText, note: "Expected program material" },
  { title: "Community observation guide", icon: Camera, note: "Adult-supervised observations" },
  { title: "Data-analysis templates", icon: Laptop, note: "Introductory analysis support" },
  { title: "Presentation materials", icon: Presentation, note: "Slides and speaking outline" },
  { title: "Public-speaking practice", icon: Mic, note: "Confidence and clarity coaching" },
  { title: "Symposium preparation", icon: Users, note: "Participating professionals may vary" },
  { title: "Virtual presentation opportunity", icon: MessageSquare, note: "Subject to program availability" },
  { title: "Digital completion certificate", icon: Trophy, note: "Planned for participating students" },
];

export const technologyRequirements = [
  "Laptop or desktop computer",
  "Reliable internet connection",
  "Email access through a parent, guardian, or teacher",
  "Modern web browser",
  "Ability to join live video sessions",
];

export const suggestedMaterials = [
  "Notebook or research journal",
  "Phone or camera for community observations",
  "Printed neighborhood map, if desired",
  "Basic measuring tools",
  "Adult supervision for outdoor observations",
];

export const bootcampSkills = [
  { title: "Environmental research", icon: Sprout },
  { title: "Research-question development", icon: Search },
  { title: "Data interpretation", icon: BarChart3 },
  { title: "Introductory data analysis", icon: ClipboardList },
  { title: "Digital map building", icon: Map },
  { title: "ArcGIS StoryMaps", icon: Compass },
  { title: "Evidence-based writing", icon: FileText },
  { title: "Visual communication", icon: Presentation },
  { title: "Presentation development", icon: Laptop },
  { title: "Public speaking", icon: Mic },
];

export const bootcampFaqs = [
  {
    question: "Who is the bootcamp for?",
    answer:
      "The program is designed for students in grades 6-8. An adult parent, guardian, teacher, administrator, or program partner must create the account and submit the application.",
  },
  {
    question: "Does my student need previous research experience?",
    answer:
      "No. The bootcamp introduces research-question development, observation, data interpretation, and presentation skills step by step.",
  },
  {
    question: "Does my student need previous ArcGIS experience?",
    answer:
      "No. ArcGIS mapping and StoryMap work are introduced during the program. Access and specific tools are subject to program availability.",
  },
  {
    question: "How long is the program?",
    answer:
      "The planned format is four live online sessions across four weeks, with short independent project work between sessions.",
  },
  {
    question: "Is attendance required for all four weeks?",
    answer:
      "Students should plan to attend all four sessions because each week builds toward the final StoryMap and symposium presentation.",
  },
  {
    question: "What technology is required?",
    answer:
      "Participants need a laptop or desktop computer, reliable internet, a modern browser, adult-accessible email, and the ability to join live video sessions.",
  },
  {
    question: "Can students work in teams?",
    answer:
      "Team projects may be possible when students are part of the same classroom, club, or adult-supervised group. Details depend on the cohort.",
  },
  {
    question: "Who attends the symposium?",
    answer:
      "The virtual symposium is planned for students, families, educators, peers, and invited environmental professionals. Participating professionals may vary by session.",
  },
  {
    question: "Is adult supervision required?",
    answer:
      "Yes. Students must be accompanied or supervised by an adult for outdoor observations and must avoid roads, streams, private property, construction areas, and unsafe locations.",
  },
  {
    question: "How are class slots assigned?",
    answer:
      "Applications are reviewed by requested cohort, remaining space, and program fit. Submitting an application does not guarantee enrollment.",
  },
  {
    question: "What happens after an application is submitted?",
    answer:
      "The application appears in the adult account dashboard with a Submitted status. The program team can follow up about acceptance, waitlist status, or next steps.",
  },
];

export function formatCohortDates(cohort: BootcampCohort) {
  if (!cohort.startDate || !cohort.endDate) {
    return "Dates to be announced";
  }

  return `${cohort.startDate} - ${cohort.endDate}`;
}

export function getOpenCohorts() {
  return bootcampCohorts.filter((cohort) =>
    ["open", "waitlist"].includes(cohort.status),
  );
}

export function getCohortById(id: string) {
  return bootcampCohorts.find((cohort) => cohort.id === id);
}

export function getCohortLabel(id: string | null | undefined) {
  if (!id) return "No alternate selected";
  const cohort = getCohortById(id);
  return cohort ? cohort.name : id;
}

export const safetyNotice =
  "Students must be accompanied or supervised by an adult when conducting outdoor observations. Students may not enter roads, streams, construction areas, private property, or other unsafe locations.";

export const adultConsentNotice =
  "Adult registration and consent are required. The MVP does not create student accounts or publicly display student information.";

export const setupReviewNotice =
  "Programs serving minors should receive professional privacy, legal, and school-policy review before collecting information at scale.";

export const shieldIcon = ShieldCheck;
