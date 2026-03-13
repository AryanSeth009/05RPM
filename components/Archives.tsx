'use client'

import React, { useState } from 'react'
import Vinyl from '@/components/ui/Vinyl'

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
    main_image_src: "/projects/obsidius.webp",
    project_title: "Obsidius — AI Coaching & Habit Tracking",
    logo_src: "",
    description: "AI coaching, disciplined journaling, and growth tracking — built for people serious about who they are becoming.",
    features: [
      "Obsidius brings AI coaching, disciplined journaling, and growth tracking into one focused space. The app calculates a live Growth Score and surfaces streaks, patterns, and insights to keep you accountable.",
      "Built for people who are serious about who they are becoming — not just tracking habits, but building identity. Think clearly. Live intentionally. Grow daily.",
    ],
    case_study_link: "#",
    name: "Obsidius",
    demo_images: ["/projects/obsidius.webp"],
    project_link: "https://obsidius.app",
  },
  {
    main_image_src: "/projects/hostel-erp.webp",
    project_title: "Website of Insight Cultural event",
    logo_src: "",
    description:
      "Unified room management, fee tracking, and attendance monitoring — built for institutions serious about modernizing their hostel administration.",
    features: [
      "INSIGHT, the annual college extravaganza aimed at developing cultural talents of the students. It provides a platform for creative and innovative display of talent. INSIGHT brings together students from all departments to celebrate creativity, talent, and spirit of competition.",
      "It's a spectacular showcase of cultural performances, sports events, and celebrations that define our college community.",
    ],
    case_study_link: "#",
    name: "TNPS Hostel ERP",
    demo_images: [
      "/projects/hostel-erp.webp",
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

export default function Archives() {
  const [activeTrack, setActiveTrack] = useState(0);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);

  const tracks = caseStudies.map((project, index) => ({
    id: index,
    side: index < 2 ? 'Side A' : 'Side B',
    year: '2026', // Placeholder if needed
    title: project.name,
    desc: project.description,
    img: project.main_image_src,
    alt: project.project_title,
    image_fit: project.image_fit || "cover"
  }));

  return (
    <section className="py-20 md:py-32 px-4 md:px-16 flex items-center relative border-t border-black/5">
      <div className="max-w-screen-xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

        <div className="col-span-1 lg:col-span-5 fi">
          <div className="flex items-center gap-4 text-cherry text-[11px] uppercase tracking-[0.3em] font-bold mb-6">
            <span className="w-8 h-[1.5px] bg-cherry"></span>
            Selected Works
          </div>

          <h2 className="font-serif font-bold text-ink leading-none mb-12" style={{ fontSize: 'clamp(52px, 6vw, 76px)' }}>
            From the <br /><em className="italic text-cherry">Archives.</em>
          </h2>

          <ul className="flex flex-col w-full border-t border-black/10">
            {tracks.map((track) => {
              const isActive = activeTrack === track.id;
              return (
                <li
                  key={track.id}
                  className={`py-6 flex flex-col cursor-pointer border-b border-black/10 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group ${isActive
                      ? 'pl-6 border-cherry bg-cherry/[0.02]'
                      : 'hover:pl-6 hover:border-cherry hover:bg-cherry/[0.02]'
                    }`}
                  onMouseEnter={() => setActiveTrack(track.id)}
                  onClick={() => setMobileExpanded(mobileExpanded === track.id ? null : track.id)}
                >
                  {/* Row: number + text */}
                  <div className="flex items-center gap-6">
                    <span className={`font-serif text-5xl font-light transition-colors duration-[400ms] ${isActive ? 'text-cherry/15' : 'text-ink/10 group-hover:text-cherry/15'
                      }`}>
                      {(track.id + 1).toString().padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1 mt-1">
                        <span className={`text-[9px] uppercase tracking-widest font-bold transition-colors ${isActive ? 'text-cherry' : 'text-muted group-hover:text-cherry'
                          }`}>
                          {track.side}
                        </span>
                        <span className={`w-4 h-[1px] transition-colors ${isActive ? 'bg-cherry/30' : 'bg-black/10 group-hover:bg-cherry/30'
                          }`}></span>
                        <span className={`text-[9px] uppercase tracking-widest font-bold transition-colors ${isActive ? 'text-cherry' : 'text-muted group-hover:text-cherry'
                          }`}>
                          {track.year}
                        </span>
                      </div>
                      <h3 className={`font-sans font-bold text-xl transition-colors duration-[400ms] ${isActive ? 'text-cherry' : 'text-ink group-hover:text-cherry'
                        }`}>
                        {track.title}
                      </h3>
                      <p className="text-muted text-sm mt-1">{track.desc}</p>
                    </div>
                    {/* Mobile chevron */}
                    <span className={`lg:hidden text-muted transition-transform duration-300 ${mobileExpanded === track.id ? 'rotate-180 text-cherry' : ''}`}>
                      ▾
                    </span>
                  </div>

                  {/* Mobile inline image dropdown */}
                  <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    mobileExpanded === track.id ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="-ml-6 w-[calc(100%+1.5rem)] flex items-center justify-center py-6 px-4">
                      <img
                        src={track.img}
                        className="max-h-56 w-auto mx-auto object-contain rounded-sm drop-shadow-md"
                        alt={track.alt}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-12">
            <a className="inline-flex items-center gap-3 text-ink text-[11px] font-bold uppercase tracking-[0.2em] hover:text-cherry transition-colors nav-link" href="#">
              View Full Discography <span>→</span>
            </a>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-7 fi relative aspect-square md:aspect-[4/3] lg:aspect-[1.5] w-full hidden lg:flex items-center justify-center">

          <div className="absolute -right-20 top-1/2 -translate-y-1/2 z-0 hidden lg:block opacity-40 mix-blend-multiply">
            <Vinyl size={400} className="w-[600px] h-[600px]" speed={12} />
          </div>

          <div className="relative w-full h-full bg-cream/30 overflow-hidden z-10 border border-black/5 shadow-2xl flex items-center justify-center p-1 md:p-4">
            {/* Subtle background pattern/texture for the "archive" feel */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            {tracks.map((track) => {
              const isActive = activeTrack === track.id;
              return (
                <div
                  key={track.id}
                  className={`absolute inset-1 md:inset-4 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center ${isActive
                      ? 'opacity-100 visible scale-100 translate-y-0'
                      : 'opacity-0 invisible scale-[1.05] translate-y-8'
                    }`}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={track.img}
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-2xl rounded-sm"
                      alt={track.alt}
                    />
                    {/* Subtle "screen" glare reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-sm"></div>
                  </div>
                </div>
              );
            })}

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/5 pointer-events-none"></div>
          </div>

          <div className="absolute bottom-6 right-8 text-white text-[10px] uppercase font-bold tracking-[0.3em] z-20 mix-blend-difference hidden lg:block select-none pointer-events-none">
            Hover tracks to play
          </div>

        </div>

      </div>
    </section>
  )
}
