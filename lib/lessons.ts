export type Difficulty = "Beginner" | "Intermediate" | "Advanced";
export type ActivityType =
  | "Mapping"
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
  "Watersheds",
  "Salmon",
  "Water Quality",
  "Engineering",
  "GIS",
  "Field Investigation",
  "Rain Gardens",
  "Photography",
];

export const lessons: Lesson[] = [
  {
    slug: "watershed-investigators",
    title: "Watershed Investigators",
    shortDescription:
      "Students use maps and public data to investigate how impervious surfaces affect local streams.",
    summary:
      "Students explore their local watershed using maps, photos, and public data. They identify patterns between land cover, runoff, and stream health, then publish a recommendation in an ArcGIS StoryMap.",
    imageSrc:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80",
    imageAlt:
      "A green watershed valley with a river channel moving through the landscape",
    gradeRange: "Grades 6-8",
    duration: "4-6 class periods",
    durationGroup: "Multi-day project",
    difficulty: "Intermediate",
    activityType: "Mapping",
    materialsCost: "Free-$20",
    topics: ["Watersheds", "Stormwater", "GIS", "Water Quality"],
    learningObjectives: [
      "Define watershed boundaries and describe how water moves through a local landscape.",
      "Use map layers or public data to identify impervious surfaces near streams.",
      "Explain how land use can affect runoff, water quality, and salmon habitat.",
      "Create a clear evidence-based recommendation for a school or community audience.",
    ],
    materials: [
      "Computers or tablets with internet access",
      "ArcGIS StoryMaps or slide deck alternative",
      "Local watershed map or municipal stormwater map",
      "Optional: schoolyard photos or neighborhood observations",
    ],
    teacherPreparation: [
      "Choose one local stream, creek, or drainage basin students can investigate.",
      "Preview public data sources and prepare links for students.",
      "Create a simple StoryMap template or provide a slide-based backup option.",
    ],
    instructions: [
      "Introduce watersheds and impervious surfaces with a local map.",
      "Have students mark school, stream, road, roof, and parking lot locations.",
      "Guide teams through gathering evidence from maps, photos, and observations.",
      "Students analyze where runoff may move quickly and where pollutants may collect.",
      "Teams build a StoryMap with maps, captions, evidence, and a recommendation.",
      "Host a gallery walk where students compare findings and refine recommendations.",
    ],
    studentDeliverable:
      "An ArcGIS StoryMap or slide-based map story with evidence, analysis, and one practical recommendation.",
    assessmentPrompts: [
      "What evidence best supports your runoff concern?",
      "How does your recommendation reduce risk to water quality or habitat?",
      "What additional data would make your conclusion stronger?",
    ],
    realWorldConnection:
      "City planners, watershed groups, and transportation teams use this same map-based reasoning to prioritize green infrastructure and protect local streams.",
    extensionIdeas: [
      "Invite a city stormwater staff member to review student recommendations.",
      "Compare two neighborhoods with different levels of tree canopy or pavement.",
      "Add a salmon habitat layer or culvert barrier data where available.",
    ],
    downloads: [
      { label: "Teacher Guide PDF" },
      { label: "StoryMap Planning Sheet" },
      { label: "Student Rubric" },
    ],
    deck: {
      title: "Watershed Investigators",
      slideImages: [],
    },
    featured: true,
  },
  {
    slug: "filtration-lab",
    title: "Create an Ecocolumn",
    shortDescription:
      "Students build ecocolumns from recycled bottles and household supplies to visualize how different ecosystems interact with each other, and how water travels through them.",
    summary:
      "Students build ecocolumns from recycled bottles and household supplies to visualize how different ecosystems interact with each other, and how water travels through them.",
    imageSrc:
      "https://images.unsplash.com/photo-1581093458791-9d42cc0307f3?auto=format&fit=crop&w=1400&q=80",
    imageAlt:
      "Students working with science materials during a hands-on lab investigation",
    gradeRange: "Grades 6-8",
    duration: "2-3 class periods",
    durationGroup: "2-3 classes",
    difficulty: "Beginner",
    activityType: "Lab Investigation",
    materialsCost: "$20-$60 per class",
    topics: ["Water Quality", "Engineering", "Stormwater"],
    learningObjectives: [
      "Build a model that demonstrates filtration and runoff treatment.",
      "Compare how different materials affect water clarity and flow rate.",
      "Use data to support a claim about effective filtration design.",
      "Connect lab results to rain gardens, soils, and green infrastructure.",
    ],
    materials: [
      "Clean recycled plastic bottles",
      "Coffee filters or mesh",
      "Sand, gravel, compost, soil, and optional activated charcoal",
      "Turbid test water made with soil and leaf bits",
      "Clear cups, timers, measuring cups, and observation sheets",
    ],
    teacherPreparation: [
      "Pre-cut bottles if needed for safety and time.",
      "Prepare a consistent sample of cloudy test water.",
      "Set expectations that filtered water is not safe to drink.",
    ],
    instructions: [
      "Introduce the design question: which material layers best filter runoff?",
      "Teams sketch a filtration column and predict its performance.",
      "Students build columns using agreed safety procedures.",
      "Teams pour equal amounts of test water and record flow time and clarity.",
      "Students compare results, revise one design variable, and retest.",
      "Close with a discussion connecting results to rain gardens and soil layers.",
    ],
    studentDeliverable:
      "A lab sheet with design diagram, observations, data table, claim, evidence, and reasoning.",
    assessmentPrompts: [
      "Which layer seemed most important in your design and why?",
      "What tradeoff did you notice between filtering speed and clarity?",
      "How is your model similar to and different from a real rain garden?",
    ],
    realWorldConnection:
      "Green infrastructure uses soil, roots, compost, and stone layers to slow runoff and filter pollutants before water reaches streams.",
    extensionIdeas: [
      "Measure pH or conductivity before and after filtration.",
      "Test plant roots or leaf litter as an added design variable.",
      "Connect the model to a school rain garden proposal.",
    ],
    downloads: [
      { label: "Teacher Guide PDF" },
      { label: "Lab Data Sheet" },
      { label: "Slides" },
    ],
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
      "Students map storm drains near school, document conditions, and create a stormwater infrastructure proposal.",
    summary:
      "Students conduct a supervised school-area storm drain survey. They document drain locations, nearby pollutant sources, and maintenance concerns, then propose a small infrastructure or awareness improvement.",
    imageSrc:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    imageAlt:
      "Rainwater moving along a city street near stormwater infrastructure",
    gradeRange: "Grades 6-8",
    duration: "3-5 class periods",
    durationGroup: "Multi-day project",
    difficulty: "Intermediate",
    activityType: "Field Investigation",
    materialsCost: "Free-$30",
    topics: ["Stormwater", "Field Investigation", "Engineering", "Water Quality"],
    learningObjectives: [
      "Identify stormwater infrastructure around a school or neighborhood.",
      "Collect field observations safely using a simple protocol.",
      "Prioritize locations where runoff pollution risk may be higher.",
      "Communicate an infrastructure or outreach proposal to an authentic audience.",
    ],
    materials: [
      "Printed school-area map or shared digital map",
      "Clipboards, pencils, safety vests, and adult chaperones",
      "Camera or teacher-approved classroom device",
      "Storm drain survey sheet",
    ],
    teacherPreparation: [
      "Get school approval for outdoor fieldwork and define a safe survey boundary.",
      "Review rules: students do not enter roads, private property, streams, or unsafe areas.",
      "Plan adult supervision and an indoor map-based option for poor weather.",
    ],
    instructions: [
      "Discuss where storm drains send runoff and why drain conditions matter.",
      "Review the survey route, roles, and safety expectations.",
      "Teams document visible drains, nearby litter, leaves, slopes, and pavement.",
      "Students return indoors and mark high-risk locations on a class map.",
      "Teams select one location and draft a proposal such as drain marking, leaf cleanup, signage, or a rain garden study.",
      "Students present proposals with evidence from the survey.",
    ],
    studentDeliverable:
      "A mapped storm drain survey and a one-page proposal for a school or community improvement.",
    assessmentPrompts: [
      "Which location should be addressed first and what evidence supports that choice?",
      "What safety rule mattered most during fieldwork?",
      "Who would need to approve or maintain your proposed solution?",
    ],
    realWorldConnection:
      "Public works teams inspect drains, prioritize maintenance, and use community reports to reduce flooding and pollution.",
    extensionIdeas: [
      "Submit appropriate non-student data to a local adopt-a-drain or stormwater program.",
      "Create bilingual storm drain awareness posters.",
      "Compare observations before and after a heavy rain.",
    ],
    downloads: [
      { label: "Field Survey Sheet" },
      { label: "Proposal Template" },
      { label: "Safety Checklist" },
    ],
    deck: {
      title: "Drain Detectives",
      pdfHref: "/lesson-pdfs/drain-detectives.pdf",
      slideImages: numberedSlideImages("drain-detectives", 7),
    },
    featured: true,
  },
  {
    slug: "school-rain-garden-design",
    title: "School Rain Garden Design",
    shortDescription:
      "Students test soil infiltration, select native plants, and design a rain garden for a school downspout or parking lot edge.",
    summary:
      "Students investigate a real school runoff location and design a rain garden concept. The lesson blends infiltration testing, native plant research, scale drawing, and practical constraints.",
    imageSrc:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1400&q=80",
    imageAlt:
      "Native plants and garden beds that can absorb and filter stormwater",
    gradeRange: "Grades 6-8",
    duration: "5-8 class periods",
    durationGroup: "Multi-day project",
    difficulty: "Advanced",
    activityType: "Engineering Design",
    materialsCost: "$30-$100",
    topics: ["Rain Gardens", "Engineering", "Stormwater", "Salmon"],
    learningObjectives: [
      "Explain how rain gardens slow, absorb, and filter stormwater runoff.",
      "Conduct a basic soil infiltration test using a consistent method.",
      "Select native plants based on site conditions and habitat value.",
      "Create a design proposal that considers location, maintenance, and safety.",
    ],
    materials: [
      "Measuring tape, stakes or cones, and infiltration test materials",
      "Soil texture reference and native plant list",
      "Graph paper or digital design tool",
      "School site map or downspout photo",
    ],
    teacherPreparation: [
      "Identify one potential school site for design only; installation requires separate approval.",
      "Coordinate any outdoor testing with facilities staff.",
      "Prepare a short native plant reference list suited to local conditions.",
    ],
    instructions: [
      "Introduce rain gardens as a green infrastructure strategy.",
      "Students inspect a candidate site and note runoff source, slope, sunlight, and constraints.",
      "Teams conduct or review an infiltration test.",
      "Students choose native plants and explain their design choices.",
      "Teams create a scaled rain garden concept with labels and maintenance notes.",
      "Students present designs to peers or a school facilities audience.",
    ],
    studentDeliverable:
      "A labeled rain garden design proposal with site evidence, plant choices, and maintenance considerations.",
    assessmentPrompts: [
      "How does your design manage water during a storm?",
      "Which constraint most shaped your design?",
      "How could your rain garden support insects, birds, or salmon habitat downstream?",
    ],
    realWorldConnection:
      "Landscape architects, engineers, and conservation districts design rain gardens to reduce runoff volumes and improve watershed health.",
    extensionIdeas: [
      "Build a small planter-box rain garden model.",
      "Invite a native plant expert for design feedback.",
      "Estimate project budget and create a grant-style pitch.",
    ],
    downloads: [
      { label: "Design Brief" },
      { label: "Native Plant Research Sheet" },
      { label: "Presentation Rubric" },
    ],
    deck: {
      title: "School Rain Garden Design",
      slideImages: [],
    },
  },
  {
    slug: "after-the-rain-photo-documentary",
    title: "After the Rain Photo Documentary",
    shortDescription:
      "Students document stormwater evidence in their neighborhoods through photography and short written explanations.",
    summary:
      "Students use photography and concise captions to notice what happens after rain. They document puddles, runoff paths, erosion, drains, plants, and pollution indicators while following strict safety and privacy rules.",
    imageSrc:
      "https://images.unsplash.com/photo-1501691223387-dd0500403074?auto=format&fit=crop&w=1400&q=80",
    imageAlt:
      "Raindrops and wet pavement after rainfall for a stormwater photo investigation",
    gradeRange: "Grades 6-8",
    duration: "1-2 class periods plus optional homework",
    durationGroup: "2-3 classes",
    difficulty: "Beginner",
    activityType: "Photography",
    materialsCost: "Free",
    topics: ["Photography", "Stormwater", "Watersheds", "Field Investigation"],
    learningObjectives: [
      "Identify visible evidence of stormwater movement after rain.",
      "Use photos and captions to explain an environmental observation.",
      "Connect everyday places to larger watershed systems.",
      "Practice privacy-aware and safety-focused documentation.",
    ],
    materials: [
      "Teacher-approved camera device or printed image alternative",
      "Photo caption worksheet",
      "Classroom projector or gallery wall",
      "Safety and privacy guidelines",
    ],
    teacherPreparation: [
      "Decide whether photos are taken on campus, at home with guardian guidance, or from teacher-provided images.",
      "Remind students not to photograph identifiable people, license plates, private property details, or unsafe locations.",
      "Prepare a submission method that does not collect student personal information publicly.",
    ],
    instructions: [
      "Model how to read a stormwater photo for evidence.",
      "Students capture or select 3-5 images that show runoff, pooling, drains, plants, erosion, or pollution clues.",
      "Students write concise captions explaining what each image shows.",
      "Teams sort photos into categories and discuss patterns.",
      "Students choose one image and write a recommendation or question for further investigation.",
      "Optional: create a class gallery only after school and guardian permissions are confirmed.",
    ],
    studentDeliverable:
      "A short photo documentary with captions, one pattern statement, and one action idea or investigation question.",
    assessmentPrompts: [
      "What stormwater evidence is visible in your strongest photo?",
      "What can a photo show well, and what data would still be missing?",
      "How did you follow safety and privacy expectations?",
    ],
    realWorldConnection:
      "Community scientists and environmental educators use photo documentation to identify drainage problems, track seasonal changes, and tell watershed stories.",
    extensionIdeas: [
      "Pair photos with a hand-drawn runoff map.",
      "Create a before-and-after rain comparison.",
      "Use selected approved photos in a future student showcase.",
    ],
    downloads: [
      { label: "Caption Worksheet" },
      { label: "Photo Safety Guide" },
      { label: "Gallery Template" },
    ],
    deck: {
      title: "After the Rain Photo Documentary",
      slideImages: [],
    },
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
