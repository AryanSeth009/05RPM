import React from 'react'
import Vinyl from '@/components/ui/Vinyl'
import Cassette from '@/components/ui/Cassette'
import FloatEl from '@/components/ui/FloatEl'

export default function Hero() {
    return (
        <section className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-16 flex flex-col items-center md:items-start text-center md:text-left overflow-hidden">
            <div className="max-w-screen-xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">

                {/* Left Content */}
                <div className="fi flex flex-col items-center md:items-start pt-8 md:pt-0">
                    <div className="flex items-center gap-2 md:gap-4 text-cherry text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold mb-4 md:mb-8">
                        <span className="w-4 md:w-8 h-[1px] md:h-[1.5px] bg-cherry"></span>
                        Nagpur, India — Est. 2026
                    </div>
                    <h1 className="font-serif font-bold leading-[0.95] text-ink text-[52px] md:text-[clamp(64px,7vw,100px)] mb-6 md:mb-8">
                        You deserve<br />more than<br /><em className="italic text-cherry">background<br />noise.</em>
                    </h1>
                    <p className="text-muted text-[15px] md:text-lg max-w-md leading-relaxed mb-8 md:mb-2">
                        Most agencies stream forgettable work. We press records — the kind worth flipping to Side B.
                    </p>
                    <p className="hidden md:block text-cherry italic text-sm mb-12 font-medium">Not talking about music, btw.</p>
                    <a className="inline-flex items-center justify-center gap-4 bg-cherry text-white px-8 md:px-10 py-4 md:py-5 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] transform transition-all hover:bg-ink hover:-translate-y-1 active:scale-95" href="#contact">
                        Drop the needle <span>→</span>
                    </a>
                </div>

                {/* Right Visual (Top on Mobile) */}
                <div className="relative w-full aspect-square md:aspect-auto md:h-[500px] flex justify-center items-center max-w-[320px] mx-auto md:max-w-none order-first lg:order-last">
                    {/* Main Vinyl */}
                    <div className="z-10 absolute md:static top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:transform-none">
                        <Vinyl size="100%" className="w-[260px] h-[260px] md:w-[380px] md:h-[380px]">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-serif text-white font-bold text-[4px] md:text-[8px] tracking-widest z-20">05RPM</span>
                            </div>
                        </Vinyl>
                    </div>

                    {/* Tonearm */}
                    <div className="absolute top-12 md:top-[60px] right-4 md:right-[40px] w-20 md:w-32 h-1 md:h-2 bg-gradient-to-r from-neutral-400/50 md:from-neutral-300 via-neutral-100 to-neutral-400 rounded-full rotate-[-25deg] origin-right shadow-lg z-20">
                        <div className="hidden md:block absolute -left-1 -top-1 w-6 h-4 bg-cherry rounded-sm"></div>
                    </div>

                    {/* Floaters */}
                    <FloatEl rot="-8deg" className="absolute top-4 left-4 md:top-10 md:left-10 z-20" delay="0.5s">
                        <Cassette className="scale-75 origin-top-left md:scale-100" />
                    </FloatEl>

                    <FloatEl rot="0deg" className="absolute top-2 right-8 md:bottom-10 md:left-5 md:top-auto md:right-auto z-20">
                        <Vinyl size="100%" speed={12} opacity={0.6} className="w-10 h-10 md:w-16 md:h-16 md:opacity-40" />
                    </FloatEl>

                    <FloatEl rot="12deg" className="absolute bottom-10 right-6 md:bottom-20 md:right-10 text-cherry/30 md:text-cherry/20 font-serif text-[24px] md:text-5xl z-20">
                        ♪
                    </FloatEl>

                    <FloatEl rot="-10deg" delay="1s" className="md:hidden absolute bottom-6 left-8 font-serif text-cherry text-[30px] opacity-20 z-20">
                        ♫
                    </FloatEl>
                </div>

            </div>
        </section>
    )
}
