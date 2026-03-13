export interface CaseStudyType {
  main_image_src: string;
  project_title: string;
  logo_src?: string;
  image_fit?: "cover" | "contain";
  description: string;
  features: string[];
  case_study_link: string;
  name: string;
  demo_images: string[];
  project_link?: string | null;
  cta_links?: {
    "let's talk": string;
    "read case study": string;
  };
  test_img?: string;
  testimonial?: string;
  founder_name?: string;
  position?: string;
}

export const caseStudies: CaseStudyType[] = [
  {
    main_image_src: "/projects/insight2.webp",
    project_title: "Website of Insight Cultural event",
    logo_src: "",
    description:
      "The sports points table of insight where all departments compete to get the sports trophy.",
    features: [
      "INSIGHT, the annual college extravaganza aimed at developing cultural talents of the students. It provides a platform for creative and innovative display of talent. INSIGHT brings together students from all departments to celebrate creativity, talent, and spirit of competition.",
      "It's a spectacular showcase of cultural performances, sports events, and celebrations that define our college community.",
    ],
    case_study_link: "#",
    name: "Insight",
    demo_images: [
      "/projects/insight1.webp",
      "/projects/insight2.webp",
      "/projects/insight3.webp",
      "/projects/insight4.webp",
    ],
  },
  {
    main_image_src: "/projects/project2.webp",
    project_title: "IT Enterprise with best guidance from experts",
    logo_src: "",
    description: "Description for the second project goes here.",
    features: [
      "We provide expert-driven IT solutions to help businesses grow with secure, scalable, and modern technology.  ",
      "Our team ensures reliable development, smooth deployment, and continuous support for every project.",
    ],
    case_study_link: "#",
    name: "Project Two",
    demo_images: ["/projects/project2.webp"],
  },
  {
    main_image_src: "/projects/league2.webp",
    project_title: "TNPS boys hostel league app with leaderboard and team details",
    logo_src: "",
    image_fit: "contain",
    description: "Description for the third project goes here.",
    features: [
      "The TNPS Boys Hostel League is a legacy competition where seven teams vie for the prestigious title of Champion. Starting this year, we’ve launched a five-year franchise model to strengthen each team’s brand. Along with seven diverse sports, we’ve added an exciting E-sports category to showcase digital talent. A cultural competition also adds a creative dimension, with points from both sports and culture contributing to the final rankings.",
      "On the grand Hostel Day, teams are honored as the Winner, Runner-up, and Second Runner-up. This year, we've embraced technology by launching our own app to streamline the league's operations and enhance engagement. These activities foster unity, team spirit, and healthy competition among the participants.",
    ],
    case_study_link: "#",
    name: "Project Three",
    demo_images: ["/projects/league2.webp",
                  "/projects/league.webp",
    ],
  },
  {
    main_image_src: "/projects/algo1.webp",
    project_title: "Algorithm Visualizer ",
    logo_src: "",
    description: "Understand complex concepts easily with animated execution, pseudocode explanations, and guided practice.",
    features: [
      "Learn algorithms in an interactive and visual way with our 3D Algorithm Visualizer platform. Explore detailed theory, animated execution, and step-by-step explanations designed for better understanding.",
      "Practice with real GATE questions, track your progress, and improve problem-solving skills with AI assistance. Everything you need to master Data Structures and Algorithms in one powerful learning environment.",
    ],
    case_study_link: "#",
    name: "Project Four",
    demo_images: [
      "/projects/algo1.webp",
      "/projects/algo2.webp",
      "/projects/algo3.webp",
      "/projects/algo4.webp",
    ],
  },
];
