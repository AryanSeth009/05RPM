'use client'

import React from 'react'
import ImageCarousel from '@/components/ui/ImageCarousel'
import { caseStudies, CaseStudyType } from '@/data/caseStudies'

const CaseStudyCard: React.FC<{ caseStudy: CaseStudyType; index: number }> = ({ caseStudy, index }) => {
    const isEven = index % 2 === 0

    return (
        <section
            className={`fi grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 md:py-24 border-b border-black/5 last:border-0`}
            style={{ transitionDelay: `${index * 0.1}s` }}
        >
            {/* Content Side */}
            <div className={`col-span-1 lg:col-span-5 flex flex-col ${isEven ? 'lg:order-first' : 'lg:order-last lg:pl-16'}`}>
                <div className="flex items-center gap-4 text-cherry text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold mb-6">
                    <span className="w-8 h-[1px] bg-cherry"></span>
                    Side {index < 2 ? 'A' : 'B'} • Track 0{index + 1}
                </div>

                <h3 className="font-serif font-bold text-ink text-[32px] md:text-5xl leading-tight mb-6 italic">
                    {caseStudy.project_title}
                </h3>

                <p className="text-muted text-[15px] md:text-lg mb-8 leading-relaxed">
                    {caseStudy.description}
                </p>

                <div className="space-y-4 mb-10">
                    <h4 className="text-ink font-bold text-[11px] uppercase tracking-widest flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cherry"></span>
                        Liner Notes
                    </h4>
                    <ul className="space-y-3">
                        {caseStudy.features.map((feature, idx) => (
                            <li key={idx} className="text-muted text-sm md:text-[15px] leading-relaxed pl-4 border-l border-cherry/20">
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                    <a
                        href={caseStudy.case_study_link}
                        className="inline-flex items-center justify-center bg-ink text-white px-6 py-3 text-[11px] font-bold uppercase tracking-widest transition-all hover:bg-cherry hover:-translate-y-1 active:scale-95"
                    >
                        Read Liner Notes <span>→</span>
                    </a>
                </div>
            </div>

            {/* Visual Side */}
            <div className={`col-span-1 lg:col-span-7 ${!isEven ? 'lg:order-first' : 'lg:pr-16'}`}>
                <div className="relative">
                    {/* Decorative Record Sleeve Backing */}
                    <div className="absolute -inset-4 border border-cherry/5 rounded-2xl -rotate-2 z-0 hidden md:block"></div>
                    <div className="absolute -inset-4 border border-ink/5 rounded-2xl rotate-1 z-0 hidden md:block"></div>

                    <div className="relative z-10">
                        <ImageCarousel
                            images={caseStudy.demo_images}
                            imageFit={caseStudy.image_fit}
                            className="shadow-2xl shadow-ink/10"
                        />
                    </div>

                    {/* Catalog Number Decoration */}
                    <div className="absolute -bottom-8 right-0 font-mono text-[9px] text-muted tracking-widest uppercase opacity-50 hidden md:block">
                        RPM-REF: {caseStudy.name.substring(0, 3).toUpperCase()}-{2026 + index} {/* VOL. 0{index + 1} */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function CaseStudies() {
    return (
        <section className="py-20 md:py-32 px-4 md:px-16 bg-white relative overflow-hidden" id="case-studies">
            {/* Decorative Ghost Note */}
            <div className="hidden md:block absolute top-20 right-[5%] font-serif text-cherry/[0.02] text-[300px] pointer-events-none select-none -rotate-12">𝄞</div>
            <div className="hidden md:block absolute bottom-20 left-[5%] font-serif text-cherry/[0.02] text-[300px] pointer-events-none select-none rotate-12">𝄢</div>

            <div className="max-w-screen-xl mx-auto relative z-10">
                <div className="fi flex flex-col md:flex-row justify-between md:items-end mb-16 md:mb-24">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-4 text-cherry text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold mb-6">
                            <span className="w-8 h-[1px] bg-cherry"></span>
                            The Collection
                        </div>
                        <h2 className="font-serif font-bold text-ink leading-tight text-[44px] md:text-[clamp(48px,6vw,84px)]">
                            Greatest <em className="italic text-cherry">Hits</em>
                        </h2>
                    </div>
                    <p className="text-muted max-w-sm md:text-right mt-6 md:mt-0 text-[15px] md:text-lg italic">
                        A curated selection of performances that defined our sound this year.
                    </p>
                </div>

                <div className="space-y-0">
                    {caseStudies.map((caseStudy, index) => (
                        <CaseStudyCard key={index} caseStudy={caseStudy} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
