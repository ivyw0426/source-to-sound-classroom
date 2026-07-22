export type Difficulty = "Beginner" | "Intermediate" | "Advanced";
export type ActivityType =
  | "Lab Investigation"
  | "Field Investigation"
  | "Engineering Design"
  | "Photography";

export type DownloadLink = {
  label: string;
  href?: string;
};

export type LessonDeck = {
  title: string;
  pdfHref?: string;
  slideImages: string[];
};

export type Lesson = {
  slug: string;
  title: string;
  shortDescription: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  gradeRange: string;
  duration: string;
  durationGroup: "1 class" | "2-3 classes" | "Multi-day project";
  difficulty: Difficulty;
  activityType: ActivityType;
  materialsCost: string;
  topics: string[];
  learningObjectives: string[];
  materials: string[];
  teacherPreparation: string[];
  instructions: string[];
  studentDeliverable: string;
  assessmentPrompts: string[];
  realWorldConnection: string;
  extensionIdeas: string[];
  downloads: DownloadLink[];
  lessonPlan: DownloadLink;
  deck: LessonDeck;
  featured?: boolean;
};

function numberedSlideImages(folder: string, count: number, padded = false) {
  return Array.from({ length: count }, (_, index) => {
    const slideNumber = index + 1;
    const fileNumber = padded ? String(slideNumber).padStart(2, "0") : String(slideNumber);
    return `/lesson-slides/${folder}/slide-${fileNumber}.jpg`;
  });
}

export const topicFilters = [
  "Stormwater",
  "Water Quality",
  "Engineering",
  "Field Investigation",
  "Low Impact Development",
];

export const lessons: Lesson[] = [
  {
    slug: "filtration-lab",
    title: "Create an Ecocolumn",
    shortDescription:
      "Students build ecocolumns from stacked 2-liter bottles to model how water filters through different materials before reaching a stream.",
    summary:
      "Students build ecocolumns from stacked 2-liter bottles with aquatic, decomposition, and terrestrial chambers. They test water and soil conditions, observe how water moves through the system, and connect the model to how soil and roots in rain gardens filter runoff.",
    imageSrc:
      "https://images.unsplash.com/photo-1581093458791-9d42cc0307f3?auto=format&fit=crop&w=1400&q=80",
    imageAlt:
      "Students working with science materials during a hands-on lab investigation",
    gradeRange: "Grades 6-8",
    duration: "About 3 class periods",
    durationGroup: "2-3 classes",
    difficulty: "Intermediate",
    activityType: "Lab Investigation",
    materialsCost: "Under $15 per team",
    topics: ["Water Quality", "Engineering", "Stormwater"],
    learningObjectives: [
      "Build an ecocolumn from stacked 2-liter bottles that includes aquatic, decomposition, and terrestrial chambers.",
      "Model how water filters, or fails to filter, through different materials before reaching a stream.",
      "Measure water and soil indicators such as pH, nitrate/nitrite, aquarium test-strip readings, and dissolved oxygen.",
      "Use observations and test results to compare how ecocolumn chambers interact.",
      "Connect ecocolumn filtration to how rain garden soil and roots reduce stormwater impacts.",
    ],
    materials: [
      "3 empty 2-liter bottles",
      "2 cups gravel",
      "1 piece cheese cloth",
      "2 cups compost/soil",
      "Compost materials such as seeds, banana peels, and eggshells",
      "Mixed grass seeds",
      "1 aquatic plant, such as elodea",
      "Treated water",
      "Utility knife and scissors",
    ],
    teacherPreparation: [
      "Prepare or supervise bottle cutting for the aquatic, connector, decomposition, and terrestrial chambers.",
      "Prepare bottle caps with holes for cheesecloth drainage wicks.",
      "Set safety expectations for utility knives, scissors, water testing, and cleanup.",
      "Gather test strips, test tubes, color charts, and any dissolved oxygen equipment before testing.",
    ],
    instructions: [
      "Create the aquatic chamber from the bottom half of a 2-liter bottle and add gravel, treated water, and an aquatic plant.",
      "Create a connector section from the middle of a second bottle and secure it above the aquatic chamber.",
      "Install a cheesecloth drainage wick through a prepared bottle cap so water can move downward while soil stays in place.",
      "Build and stack the decomposition chamber, then build the terrestrial chamber with potting soil and grass seeds.",
      "Add a saved bottle-bottom piece as the top cover.",
      "Collect soil and water samples, then test pH, nitrate/nitrite, aquarium water indicators, and dissolved oxygen as directed in the plan.",
      "Record quantitative and qualitative data for each location and test date.",
    ],
    studentDeliverable:
      "A completed ecocolumn with quantitative and qualitative data tables comparing chamber conditions and water-quality results.",
    assessmentPrompts: [
      "How did water move through the different chambers of your ecocolumn?",
      "Which test results best show whether your ecocolumn is filtering water effectively?",
      "How does your model help explain why rain garden soil and roots matter?",
    ],
    realWorldConnection:
      "Rain gardens work because soil and roots slow and filter runoff. The ecocolumn makes that process visible at a material level.",
    extensionIdeas: [
      "Compare data across teams to identify the best-performing ecocolumn designs.",
      "Change one layer or material and retest water-quality indicators.",
      "Use the model to explain how green infrastructure protects streams.",
    ],
    downloads: [
      { label: "Lesson Plan PDF", href: "/lesson-plans/creating-an-ecocolumn-plan.pdf" },
    ],
    lessonPlan: {
      label: "Create an Ecocolumn Lesson Plan",
      href: "/lesson-plans/creating-an-ecocolumn-plan.pdf",
    },
    deck: {
      title: "Creating an Ecocolumn",
      pdfHref: "/lesson-pdfs/creating-an-ecocolumn.pdf",
      slideImages: numberedSlideImages("filtration-lab", 15, true),
    },
    featured: true,
  },
  {
    slug: "drain-detectives",
    title: "Drain Detectives",
    shortDescription:
      "Students investigate storm drains around their school, document conditions and nearby filtration features, and build a class map.",
    summary:
      "Students investigate storm drains around their school, document each drain's condition and nearby filtration features, identify the waterway it might connect to, and combine their findings into a class map.",
    imageSrc:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    imageAlt:
      "Rainwater moving along a city street near stormwater infrastructure",
    gradeRange: "Grades 6-8",
    duration: "1-2 class periods",
    durationGroup: "2-3 classes",
    difficulty: "Beginner",
    activityType: "Field Investigation",
    materialsCost: "Materials listed in lesson plan",
    topics: ["Stormwater", "Field Investigation", "Low Impact Development", "Water Quality"],
    learningObjectives: [
      "Explain what a storm drain is and how it differs from a household drain.",
      "Explain how stormwater runoff can carry pollution directly into lakes, rivers, and streams.",
      "Identify four Low Impact Development features: rain gardens, bioswales, permeable pavement, and native plant strips.",
      "Collect and record observations about storm drains around the school.",
      "Use collected evidence to identify a drain that should be prioritized for improvement.",
    ],
    materials: [
      "1 large printed map of the school and surrounding area",
      "Green and red pins, stickers, or markers",
      "1 student recording sheet or notebook per team",
      "1-2 pencils or pens per team",
      "Phone, tablet, or camera for photographs",
    ],
    teacherPreparation: [
      "Prepare a large printed map of the school and surrounding area.",
      "Define safe survey areas before students go outside.",
      "Prepare a model entry and tools students can use to locate nearby bodies of water.",
      "Review the seven pieces of information students collect for each drain.",
    ],
    instructions: [
      "Present slides 1-4 to introduce storm drains and provide context for the activity.",
      "On the Your Task slide, explain that students will locate drains around the school and determine whether filtration systems are present.",
      "Review the seven pieces of information students collect for every drain: drain number, location, connected waterway, condition, LID feature, estimated distance to nearest water, and photograph.",
      "Provide one model entry before students go outside and show tools for locating bodies of water.",
      "Bring students back inside and build a class map using the large printed school map.",
      "Have teams add their drains one at a time and design the map according to the Building the Class Map slide.",
      "Use the completed map to discuss total drains, unfiltered drains, drains with LID features, areas with the most unfiltered drains, and possible improvements or policy recommendations.",
    ],
    studentDeliverable:
      "A class storm-drain map and completed data sheet documenting drain location, condition, LID features, nearest water, and photos.",
    assessmentPrompts: [
      "How many drains did the class find in total?",
      "How many drains are unfiltered, and how many have Low Impact Development features?",
      "Which streets or areas have the highest concentration of unfiltered drains?",
      "What specific improvement or policy should be recommended?",
    ],
    realWorldConnection:
      "Storm drain observations help communities understand where runoff may carry pollution directly into lakes, rivers, and streams.",
    extensionIdeas: [
      "Compare drains with and without LID features on the class map.",
      "Identify patterns in where unfiltered drains are concentrated.",
      "Draft a recommendation for one drain or area that should be prioritized for improvement.",
    ],
    downloads: [
      { label: "Lesson Plan PDF", href: "/lesson-plans/drain-detectives-plan.pdf" },
    ],
    lessonPlan: {
      label: "Drain Detectives Lesson Plan",
      href: "/lesson-plans/drain-detectives-plan.pdf",
    },
    deck: {
      title: "Drain Detectives",
      pdfHref: "/lesson-pdfs/drain-detectives.pdf",
      slideImages: numberedSlideImages("drain-detectives", 7),
    },
    featured: true,
  },
  {
    slug: "after-the-rain",
    title: "After the Rain",
    shortDescription:
      "Students monitor school surfaces over six weeks to compare how pavement, lawn, and planted garden beds respond to rainfall.",
    summary:
      "Students investigate how different ground surfaces around their school correspond to rainfall and influence stormwater runoff. Over six weeks, teams monitor an impervious surface, a maintained lawn, and a planted garden bed, then use shared class data to compare runoff and water quality.",
    imageSrc:
      "https://images.unsplash.com/photo-1501691223387-dd0500403074?auto=format&fit=crop&w=1400&q=80",
    imageAlt:
      "Raindrops and wet pavement after rainfall for a stormwater investigation",
    gradeRange: "Grades 6-8",
    duration: "Six-week monitoring project",
    durationGroup: "Multi-day project",
    difficulty: "Intermediate",
    activityType: "Field Investigation",
    materialsCost: "Materials listed in lesson plan",
    topics: ["Stormwater", "Water Quality", "Field Investigation"],
    learningObjectives: [
      "Explain surface permeability and distinguish between infiltration and surface runoff.",
      "Explain why pavement produces more runoff than soil or vegetation.",
      "Describe how stormwater runoff collects pollutants from roads, parking lots, and maintained landscapes.",
      "Define turbidity and explain what high and low turbidity indicate.",
      "Develop a research question, hypothesis, and presentation based on findings.",
    ],
    materials: [
      "1 student data sheet or notebook per team",
      "1-2 pencils or pens per team",
      "1 soil moisture meter",
      "1 cardstock runoff frame at least 3 feet long",
      "Measuring container with 500 mL of water",
      "Timer or stopwatch",
      "Container for collecting runoff water",
      "Turbidity tube with Secchi disk pattern",
      "Soil or water test tube for pH testing",
      "pH test strips",
      "pH color chart or test-strip bottle",
      "Phone, tablet, or camera for photographs",
    ],
    teacherPreparation: [
      "Select monitoring stations for an impervious surface, a maintained lawn, and a planted garden bed.",
      "Prepare a shared class spreadsheet where students can enter one row for each station after each visit.",
      "Gather soil-moisture, runoff, turbidity, pH, timing, and photography materials.",
      "Review safe fieldwork procedures and assign team roles for measurement, timing, recording, and photography.",
    ],
    instructions: [
      "Present slides 1-8 as guided by the slide instructions.",
      "Introduce the research project on slide 9.",
      "Use slide 10 to set up three monitoring stations: impervious surface, maintained lawn, and planted garden bed.",
      "During each weekly field visit, record date, time, group number, station number, recent weather or rainfall, soil moisture, runoff or absorption time, turbidity, pH, and observations.",
      "After each visit, students enter one row for each station into the shared class spreadsheet.",
      "After the final field visit, each group reviews the class data and forms a research question.",
      "Each group creates a final presentation with a research question and hypothesis, findings, conclusion, and recommendation.",
    ],
    studentDeliverable:
      "A final presentation with a research question and hypothesis, findings, conclusion, and a specific actionable recommendation to reduce stormwater runoff.",
    assessmentPrompts: [
      "Which surface handled water most effectively?",
      "Which surface produced the greatest runoff?",
      "What does the class data suggest about surface type, location, time, and weather conditions?",
      "What specific action could the school or local government take to reduce stormwater runoff?",
    ],
    realWorldConnection:
      "Monitoring runoff, turbidity, and pH helps students connect school surfaces to stormwater pollution and water-quality decisions.",
    extensionIdeas: [
      "Compare results after different rainfall conditions.",
      "Use photographs to support the final presentation findings.",
      "Continue monitoring the same stations across seasons.",
    ],
    downloads: [
      { label: "Lesson Plan PDF", href: "/lesson-plans/after-the-rain-plan.pdf" },
    ],
    lessonPlan: {
      label: "After the Rain Lesson Plan",
      href: "/lesson-plans/after-the-rain-plan.pdf",
    },
    deck: {
      title: "After the Rain",
      pdfHref: "/lesson-pdfs/after-the-rain.pdf",
      slideImages: numberedSlideImages("after-the-rain", 12, true),
    },
    featured: true,
  },
];

export function getLessonBySlug(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}

export function getRelatedLessons(currentSlug: string, limit = 3) {
  const current = getLessonBySlug(currentSlug);
  if (!current) return [];

  return lessons
    .filter((lesson) => lesson.slug !== currentSlug)
    .map((lesson) => ({
      lesson,
      score: lesson.topics.filter((topic) => current.topics.includes(topic)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ lesson }) => lesson);
}
