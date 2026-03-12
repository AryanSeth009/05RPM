import React from 'react'
import FloatEl from '@/components/ui/FloatEl'
import { HeadphoneIcon, MusicNoteIcon, FaderMixerIcon, VinylDiskIcon } from '@/components/ui/ProcessIcons'

export default function Process() {
    return (
        <section className="py-20 md:py-32 px-4 md:px-16 border-t border-black/5 bg-cream/30 md:bg-transparent relative" id="process">

            {/* Desktop Stacked Ghost Notes far right */}
            <div className="hidden md:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-12 opacity-10 pointer-events-none z-0">
                <FloatEl rot="5deg"><span className="font-serif text-7xl text-cherry leading-none">♪</span></FloatEl>
                <FloatEl rot="-8deg" delay="1s"><span className="font-serif text-7xl text-cherry leading-none">♫</span></FloatEl>
                <FloatEl rot="10deg" delay="2s"><span className="font-serif text-7xl text-cherry leading-none">♩</span></FloatEl>
            </div>

            <div className="max-w-screen-xl mx-auto relative z-10">
                <div className="fi grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16 items-end mb-12 md:mb-24">
                    <div>
                        <div className="flex items-center gap-2 md:gap-4 text-cherry text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold mb-4 md:mb-6">
                            <span className="w-4 md:w-8 h-[1px] md:h-[1.5px] bg-cherry"></span>
                            How it works
                        </div>
                        <h2 className="font-serif font-bold text-ink leading-tight text-[44px] md:text-[clamp(44px,5vw,70px)] md:mb-0 mb-4">
                            How we press<br /><em className="italic text-cherry">a record</em>
                        </h2>
                    </div>
                    <p className="text-muted text-[15px] md:text-lg mb-2">Four steps. No shortcuts. Every record we press goes through the same ritual.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-0 relative">

                    {/* Connecting Line Desktop */}
                    <div className="hidden lg:block absolute top-[40px] left-0 right-0 h-[1px] bg-gradient-to-r from-cherry/30 via-cherry/30 to-transparent z-0"></div>

                    {/* Step 1 */}
                    <div className="fi md:pr-8 relative z-10 flex flex-col md:block items-center text-center md:text-left" style={{ transitionDelay: '0.1s' }}>
                        {/* Desktop circle indicator */}
                        <div className="hidden md:block w-4 h-4 rounded-full border-2 border-cherry bg-cream mb-10 mx-auto lg:mx-0"></div>
                        {/* Mobile small connecting line */}
                        <div className="md:hidden w-[2px] h-6 bg-cherry mb-4"></div>

                        <div className="mb-4 md:mb-8 mx-auto lg:mx-0 flex justify-center lg:justify-start">
                            <HeadphoneIcon />
                        </div>
                        <div className="text-cherry text-[9px] md:text-[10px] font-bold uppercase tracking-widest md:tracking-[0.2em] mb-1 md:mb-3">Step 01</div>
                        <h4 className="font-serif font-bold text-[22px] md:text-2xl mb-2 md:mb-4 md:italic">Listening</h4>
                        <p className="text-muted text-[13px] md:text-sm leading-tight md:leading-relaxed px-2 md:px-0">We understand your sound before we make a single mark. No assumptions.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="fi md:pr-8 relative z-10 flex flex-col md:block items-center text-center md:text-left" style={{ transitionDelay: '0.2s' }}>
                        <div className="hidden md:block w-4 h-4 rounded-full border-2 border-cherry bg-cream mb-10 mx-auto lg:mx-0"></div>
                        <div className="md:hidden w-[2px] h-6 bg-cherry mb-4"></div>

                        <div className="mb-4 md:mb-8 mx-auto lg:mx-0 flex justify-center lg:justify-start">
                            <MusicNoteIcon />
                        </div>
                        <div className="text-cherry text-[9px] md:text-[10px] font-bold uppercase tracking-widest md:tracking-[0.2em] mb-1 md:mb-3">Step 02</div>
                        <h4 className="font-serif font-bold text-[22px] md:text-2xl mb-2 md:mb-4 md:italic">Session</h4>
                        <p className="text-muted text-[13px] md:text-sm leading-tight md:leading-relaxed px-2 md:px-0">Concepts from scratch. No loops, no templates. Every idea has to earn its place.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="fi md:pr-8 relative z-10 flex flex-col md:block items-center text-center md:text-left" style={{ transitionDelay: '0.3s' }}>
                        <div className="hidden md:block w-4 h-4 rounded-full border-2 border-cherry bg-cream mb-10 mx-auto lg:mx-0"></div>
                        <div className="md:hidden w-[2px] h-6 bg-cherry mb-4"></div>

                        <div className="mb-4 md:mb-8 mx-auto lg:mx-0 flex justify-center lg:justify-start">
                            <FaderMixerIcon />
                        </div>
                        <div className="text-cherry text-[9px] md:text-[10px] font-bold uppercase tracking-widest md:tracking-[0.2em] mb-1 md:mb-3">Step 03</div>
                        <h4 className="font-serif font-bold text-[22px] md:text-2xl mb-2 md:mb-4 md:italic">The Mix</h4>
                        <p className="text-muted text-[13px] md:text-sm leading-tight md:leading-relaxed px-2 md:px-0">We refine until every element is right — not just good enough. Taste matters here.</p>
                    </div>

                    {/* Step 4 */}
                    <div className="fi md:pr-8 relative z-10 flex flex-col md:block items-center text-center md:text-left" style={{ transitionDelay: '0.4s' }}>
                        <div className="hidden md:block w-4 h-4 rounded-full border-2 border-cherry bg-cream mb-10 mx-auto lg:mx-0"></div>
                        <div className="md:hidden w-[2px] h-6 bg-cherry mb-4"></div>

                        <div className="mb-4 md:mb-8 mx-auto lg:mx-0 flex justify-center lg:justify-start">
                            <VinylDiskIcon />
                        </div>
                        <div className="text-cherry text-[9px] md:text-[10px] font-bold uppercase tracking-widest md:tracking-[0.2em] mb-1 md:mb-3">Step 04</div>
                        <h4 className="font-serif font-bold text-[22px] md:text-2xl mb-2 md:mb-4 md:italic">The Press</h4>
                        <p className="text-muted text-[13px] md:text-sm leading-tight md:leading-relaxed px-2 md:px-0">We launch with you. We stay in the room when the needle drops — and after.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}
