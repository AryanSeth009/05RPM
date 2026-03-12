import React from 'react'
import Vinyl from '@/components/ui/Vinyl'
import Cassette from '@/components/ui/Cassette'
import EQBars from '@/components/ui/EQBars'
import FloatEl from '@/components/ui/FloatEl'

export default function WhyUs() {
    return (
        <section className="py-20 md:py-32 px-4 md:px-16 border-t border-black/5 md:border-b">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">

                <div className="fi mb-0">
                    <div className="flex items-center gap-2 md:gap-4 text-cherry text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold mb-4 md:mb-6">
                        <span className="w-4 md:w-8 h-[1px] md:h-[1.5px] bg-cherry"></span>
                        Why 05RPM
                    </div>
                    <h2 className="font-serif font-bold leading-tight text-ink text-[44px] md:text-[clamp(48px,5vw,72px)] mb-8">
                        We don&apos;t make<br /><em className="italic text-cherry">playlist filler.</em>
                    </h2>

                    {/* Mobile Illustration (appears between heading and paragraph on mobile) */}
                    <div className="relative w-full aspect-video flex lg:hidden items-center justify-center mb-12">
                        <Vinyl size={150} className="relative z-10" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                            <span className="font-serif text-[200px]">♬</span>
                        </div>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                        <p className="text-muted text-[15px] md:text-lg leading-relaxed">
                            Fast agencies sound the same. <strong className="text-ink font-bold">We move at our own speed</strong> — deliberately, intentionally — and when the work plays, you notice.
                        </p>
                        <p className="text-muted text-[15px] md:text-lg leading-relaxed">
                            Five students. Zero templates. <strong className="text-ink font-bold">One standard we actually keep.</strong>
                        </p>
                    </div>
                </div>

                {/* Desktop Illustration */}
                <div className="hidden lg:flex fi relative justify-center items-center h-[400px]">
                    {/* Ghost Note */}
                    <div className="absolute font-serif text-cherry/5 text-[280px] pointer-events-none">♬</div>

                    {/* Cluster */}
                    <div className="z-10">
                        <Vinyl size={200} speed={10} />
                    </div>

                    <FloatEl rot="-8deg" delay="1s" className="absolute top-4 left-10 z-20">
                        <Cassette />
                    </FloatEl>

                    <FloatEl rot="12deg" className="absolute bottom-8 right-12 w-16 h-16 bg-cherry/10 border border-cherry/20 rounded-md rotate-12 flex items-center justify-center z-20">
                        <Vinyl size={40} opacity={0.6} />
                    </FloatEl>

                    <FloatEl rot="0deg" className="absolute bottom-12 left-16 z-20">
                        <EQBars />
                    </FloatEl>
                </div>

            </div>
        </section>
    )
}
