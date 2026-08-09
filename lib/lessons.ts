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
  "Runoff",
  "Water Quality",
  "Pollution",
  "Water Filtration",
  "Engineering",
  "Field Investigation",
  "Stream Habitat",
  "Low Impact Development",
];

export const lessons: Lesson[] = [
  {
    slug: "water-filtration-challenge",
    title: "Clean the Water Filtration Challenge",
    shortDescription:
      "Students design and test bottle filters to learn how layered materials can remove particles from polluted stormwater.",
    summary:
      "Students explore how stormwater runoff carries pollutants from roads and parking lots into salmon streams without filtration. Teams design, build, test, and compare model water filters using pebbles, gravel, sand, cotton balls, and coffee filters, then connect their results to real-world filtration systems such as rain gardens and water treatment plants.",
    imageSrc: "/lesson-thumbnails/water-filtration-challenge.png",
    imageAlt:
      "Students testing water with clear containers during a hands-on filtration challenge",
    gradeRange: "Grades 2-5",
    duration: "45 minutes to 1 hour",
    durationGroup: "1 class",
    difficulty: "Beginner",
    activityType: "Engineering Design",
    materialsCost: "Low-cost classroom supplies",
    topics: ["Water Filtration", "Water Quality", "Engineering", "Stormwater"],
    learningObjectives: [
      "Explain what stormwater runoff is and where it goes after it leaves a road or parking lot.",
      "Describe how filtration removes particles from water using layered materials.",
      "Design and build a water filter and evaluate its performance against other designs.",
      "Connect the filtration challenge to real-world infrastructure like water treatment plants and rain gardens.",
    ],
    materials: [
      "1 plastic water bottle per team",
      "1/2 cup pebbles per team",
      "1/2 cup gravel per team",
      "1/2 cup sand per team",
      "6 cotton balls per team",
      "2 coffee filter sheets per team",
      "Prepared dirty water with soil, sand, food coloring, and crushed leaves",
    ],
    teacherPreparation: [
      "Cut all bottles in advance so students can use the top half as the filter and the bottom half as the collection chamber.",
      "Prepare dirty water the night before so sediment is fully mixed in.",
      "Pre-label team stations with numbers.",
      "Set out filter materials at each station before students arrive.",
    ],
    instructions: [
      "Introduce stormwater runoff and explain that runoff can carry pollutants from roads and parking lots into salmon streams.",
      "Give teams 15 minutes to design and build their filters using the available materials.",
      "Have students place the bottle top upside down into the bottle bottom so the neck points downward.",
      "Students choose materials and decide the order of layers inside the top half of the bottle.",
      "Remind teams to pack materials firmly enough that water moves through the filter instead of around the edges.",
      "Pour identical measured amounts of dirty water into each filter and give teams 5 minutes to collect filtered water.",
      "Judge the designs based on clarity of filtered water, speed of filtration, and final volume of water produced.",
      "Lead a class discussion about which materials worked best, why layers matter, and how the model connects to real stormwater systems.",
    ],
    studentDeliverable:
      "A completed bottle filter, observations from the filtration test, and a redesign explanation based on water clarity, filtration speed, and collected volume.",
    assessmentPrompts: [
      "Which material do you think did the most work in your filter, and why?",
      "What would have happened if you only used one material instead of layers?",
      "If you could redesign your filter right now, what would you change?",
      "Where does water from a school parking lot go when it rains, and is anything cleaning it before it reaches a stream?",
    ],
    realWorldConnection:
      "The challenge models how layered materials can trap particles before water reaches streams, helping students understand rain gardens, water treatment plants, and other filtration systems.",
    extensionIdeas: [
      "Let teams redesign and retest filters after comparing results.",
      "Add a class data table to compare clarity, speed, and water volume across teams.",
      "Connect the best-performing filter layers to rain garden soil layers or water treatment processes.",
    ],
    downloads: [
      {
        label: "Lesson Plan PDF",
        href: "/lesson-plans/water-filtration-challenge-plan.pdf",
      },
    ],
    lessonPlan: {
      label: "Clean the Water Filtration Challenge Lesson Plan",
      href: "/lesson-plans/water-filtration-challenge-plan.pdf",
    },
    deck: {
      title: "Clean the Water Filtration Challenge",
      pdfHref: "/lesson-downloads/water-filtration-challenge.pdf",
      slideImages: numberedSlideImages("water-filtration-challenge", 8),
    },
    featured: true,
  },
  {
    slug: "save-the-stream",
    title: "Save the Stream!",
    shortDescription:
      "Students rescue a model stream by identifying and removing simulated pollution while protecting fish, plants, rocks, and other habitat features.",
    summary:
      "Students investigate how pollution left on the ground can be carried into streams through a simulated stream-rescue activity. Teams examine a model stream with toy fish, plants, rocks, and simulated pollution, then use tongs and sorting cups to remove only the pollution and classify what they found.",
    imageSrc: "/lesson-thumbnails/save-the-stream.png",
    imageAlt:
      "A small forest stream surrounded by rocks and green plants",
    gradeRange: "Kindergarten-Grade 2",
    duration: "35-45 minutes",
    durationGroup: "1 class",
    difficulty: "Beginner",
    activityType: "Lab Investigation",
    materialsCost: "Low-cost classroom supplies",
    topics: ["Pollution", "Stream Habitat", "Water Quality"],
    learningObjectives: [
      "Identify common materials that may pollute streams.",
      "Explain that pollution on streets, lawns, and sidewalks can become water pollution.",
      "Recognize several different types of water pollution.",
      "Carefully remove pollution from a model stream and sort it into simple categories.",
    ],
    materials: [
      "1 shallow tray, plastic container, or aluminum pan per team",
      "Blue paper, blue plastic, or water to create a stream",
      "3-5 toy fish or laminated fish pictures",
      "Small plants, twigs, leaves, and small rocks",
      "1-2 tongs or large tweezers per team",
      "1 small spoon per team",
      "4 sorting cups or bowls per team",
      "Student observation sheet",
      "Paper scraps, bottle caps, yarn or string, foil pieces, soil or cocoa powder, and optional cooking oil",
      "Pencils",
    ],
    teacherPreparation: [
      "Place blue paper, blue plastic, or a shallow layer of water in each tray to create a model stream.",
      "Add toy fish, plants, rocks, and twigs to create a stream habitat.",
      "Place simulated pollution throughout the stream and along streambanks.",
      "Prepare tongs, spoons, or nets for students to use at stations.",
      "Prepare one model stream for each team.",
    ],
    instructions: [
      "Show students the model streams before they begin.",
      "Ask students to identify the animals and plants in the habitat.",
      "Introduce the cleanup tools and have students take turns removing one pollution item at a time.",
      "After removing an item, students identify what type of pollution it represents and place it in the correct sorting container.",
      "Students remove only the pollution and leave fish, plants, rocks, and other naturally occurring stream materials.",
      "After streams have been cleared, discuss how each type of pollution may affect stream habitats and what students found.",
    ],
    studentDeliverable:
      "A completed observation sheet showing pollution students found, one item they removed, and one way they can help keep streams clean.",
    assessmentPrompts: [
      "Which items did not belong in the stream?",
      "What kind of pollution did your team find?",
      "How could pollution on a sidewalk or lawn end up in a stream?",
      "What is one thing you can do to help keep streams clean?",
    ],
    realWorldConnection:
      "The model stream helps young students see that trash, sediment, oil, and other pollution left on land can become water pollution when rain carries it into streams.",
    extensionIdeas: [
      "Have students create a simple poster showing what belongs and does not belong in a stream.",
      "Sort pollution into plastic and trash, paper, soil and yard waste, and special pollution categories.",
      "Add new simulated materials and ask students to decide what type of pollution each one represents.",
    ],
    downloads: [
      { label: "Lesson Plan PDF", href: "/lesson-plans/save-the-stream-plan.pdf" },
    ],
    lessonPlan: {
      label: "Save the Stream! Lesson Plan",
      href: "/lesson-plans/save-the-stream-plan.pdf",
    },
    deck: {
      title: "Save the Stream!",
      pdfHref: "/lesson-downloads/save-the-stream.pdf",
      slideImages: numberedSlideImages("save-the-stream", 8),
    },
  },
  {
    slug: "raindrop-racers",
    title: "Raindrop Racers",
    shortDescription:
      "Students race water across different surface ramps to compare which surfaces absorb water and which create fast-moving runoff.",
    summary:
      "Students investigate how quickly rainwater moves across different ground surfaces by building simulated surface ramps. Teams test foil or plastic, bare soil, grass or moss, gravel, and sponge surfaces, then compare which surfaces create runoff and which absorb or slow water.",
    imageSrc: "/lesson-thumbnails/raindrop-racers.png",
    imageAlt:
      "Rain drops on a green leaf during a runoff and absorption investigation",
    gradeRange: "Kindergarten-Grade 2",
    duration: "35-45 minutes",
    durationGroup: "1 class",
    difficulty: "Beginner",
    activityType: "Lab Investigation",
    materialsCost: "Low-cost classroom supplies",
    topics: ["Runoff", "Stormwater", "Water Quality"],
    learningObjectives: [
      "Observe that water moves differently across different surfaces.",
      "Identify which surface absorbs water the fastest and which creates runoff.",
      "Make predictions and compare hypotheses with results.",
      "Use vocabulary including absorb, runoff, and impervious surface.",
    ],
    materials: [
      "5 shallow trays, baking sheets, or plastic lids",
      "Aluminum foil or plastic sheet for one tray",
      "2-3 cups soil",
      "Grass, sod, moss, or artificial grass for one tray",
      "2 cups gravel or small rocks",
      "Sponge pieces or one sponge",
      "5 small books or blocks to create matching slopes",
      "About 3 cups water",
      "2-3 drops blue food coloring",
      "1 measuring cup or tablespoon",
      "5 water cups",
      "5 collection cups",
      "Student observation sheet",
      "Pencils",
    ],
    teacherPreparation: [
      "Cover each tray with one surface material.",
      "Raise one end of each tray using a book or block, keeping each tray at approximately the same angle.",
      "Place a collection cup beneath the lower end of each tray.",
      "Mix a few drops of blue food coloring into the water.",
      "Measure the same amount of water into cups for every test tray.",
    ],
    instructions: [
      "Show students the five test surfaces and ask where they have seen each surface in real life.",
      "Have students predict which surface will have the fastest raindrop, which will soak up the most water, and which will soak up the least water.",
      "Students record predictions on their handout.",
      "For each tray, students pour the measured water at the marked starting point near the top of the ramp.",
      "Students observe whether the water moves fast, medium, or slow.",
      "Students compare how much water reached the bottom collection cup.",
      "Students order the surface types from fastest to slowest and from least to most water absorbed.",
      "Discuss which raindrop won the race, which surface held the most water, which surface produced the most runoff, and which surface might be best near a stream.",
    ],
    studentDeliverable:
      "A completed observation sheet with predictions, surface test results, and comparisons of runoff speed and water absorption.",
    assessmentPrompts: [
      "Which surface had the fastest raindrop?",
      "Which surface held the most water?",
      "Which surface produced the most runoff?",
      "Which surface might be best near a stream, and why?",
    ],
    realWorldConnection:
      "Students connect everyday surfaces such as pavement, soil, grass, gravel, and wetlands to runoff speed, absorption, and stream protection.",
    extensionIdeas: [
      "Repeat the test using the same amount of water but a different ramp angle.",
      "Ask students to design a schoolyard surface that would slow and absorb rainwater.",
      "Compare the sponge model to wetlands or planted areas that hold water during rainstorms.",
    ],
    downloads: [
      { label: "Lesson Plan PDF", href: "/lesson-plans/raindrop-racers-plan.pdf" },
    ],
    lessonPlan: {
      label: "Raindrop Racers Lesson Plan",
      href: "/lesson-plans/raindrop-racers-plan.pdf",
    },
    deck: {
      title: "Raindrop Racers",
      pdfHref: "/lesson-downloads/raindrop-racers.pdf",
      slideImages: numberedSlideImages("raindrop-racers", 8),
    },
  },
  {
    slug: "filtration-lab",
    title: "Create an Ecocolumn",
    shortDescription:
      "Students build ecocolumns from stacked 2-liter bottles to model how water filters through different materials before reaching a stream.",
    summary:
      "Students build ecocolumns from stacked 2-liter bottles with aquatic, decomposition, and terrestrial chambers. They test water and soil conditions, observe how water moves through the system, and connect the model to how soil and roots in rain gardens filter runoff.",
    imageSrc: "/lesson-thumbnails/filtration-lab.png",
    imageAlt:
      "Students working with science materials during a hands-on lab investigation",
    gradeRange: "Grades K-8",
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
      pdfHref: "/lesson-downloads/creating-an-ecocolumn.pdf",
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
    imageSrc: "/lesson-thumbnails/drain-detectives.png",
    imageAlt:
      "Rainwater moving along a city street near stormwater infrastructure",
    gradeRange: "Grades K-8",
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
      pdfHref: "/lesson-downloads/drain-detectives.pdf",
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
    imageSrc: "/lesson-thumbnails/after-the-rain.png",
    imageAlt:
      "Raindrops and wet pavement after rainfall for a stormwater investigation",
    gradeRange: "Grades K-8",
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
      pdfHref: "/lesson-downloads/after-the-rain.pdf",
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
