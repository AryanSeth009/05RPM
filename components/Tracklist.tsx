import React from 'react'
import Vinyl from '@/components/ui/Vinyl'

export default function Tracklist() {
    return (
        <section className="py-20 md:py-32 px-0 md:px-16 border-t border-black/5 relative" id="tracklist">
            {/* Ghost Note Background */}
            <div className="hidden md:block absolute top-40 left-1/2 -translate-x-1/2 font-serif text-cherry/[0.03] text-[400px] pointer-events-none select-none">♬</div>

            <div className="max-w-screen-xl mx-auto">
                <div className="fi flex flex-col md:flex-row justify-between md:items-end px-4 md:px-0 mb-12 md:mb-20">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 md:gap-4 text-cherry text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold mb-4 md:mb-6">
                            <span className="w-4 md:w-8 h-[1px] md:h-[1.5px] bg-cherry"></span>
                            Our Services
                        </div>
                        <h2 className="font-serif font-bold text-ink leading-tight md:leading-none text-[44px] md:text-[clamp(48px,6vw,84px)] mb-4 md:mb-0">
                            The <em className="italic text-cherry">Tracklist</em>
                        </h2>
                    </div>
                    <p className="text-muted max-w-xs md:text-right mt-2 md:mt-0 text-[15px] md:text-base">
                        Every service we offer, pressed with full intent. Pick your track.
                    </p>
                </div>

                <div className="border-t border-black/10 md:border-black/5">
                    {/* Track 01 */}
                    <div className="fi group flex flex-row md:grid md:grid-cols-[80px_1fr_120px] items-start md:items-center border-b border-black/5 md:border-black/10 transition-colors hover:bg-cherry/[0.02] px-4 md:px-0 py-8 md:py-0">
                        <div className="font-serif text-cherry/20 md:text-cherry/10 text-[44px] md:text-6xl font-light leading-none md:leading-normal md:py-12 md:pl-4 min-w-[50px] md:min-w-0">01</div>

                        <div className="flex-1 md:px-12 md:py-12 md:border-x md:border-black/5">
                            <div className="flex items-center gap-2 md:gap-3 text-cherry text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-widest mb-2 md:mb-4">
                                Side A
                                <div className="flex gap-0.5 items-end h-2 md:h-3">
                                    <span className="w-0.5 md:w-1 bg-cherry h-full opacity-50"></span>
                                    <span className="w-0.5 md:w-1 bg-cherry h-2/3 opacity-50"></span>
                                    <span className="w-0.5 md:w-1 bg-cherry h-full opacity-50"></span>
                                </div>
                            </div>
                            <h3 className="font-serif font-bold text-[28px] md:text-4xl text-ink group-hover:text-cherry transition-colors mb-2 md:mb-4 italic">The Launch</h3>
                            <p className="text-muted text-[14px] md:text-base max-w-xl mb-4 md:mb-6 leading-relaxed">
                                Your first pressing. Enter the market with a sound people actually remember.
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="px-2 md:px-3 py-1 border border-black/10 text-[9px] md:text-[10px] uppercase tracking-wider md:tracking-widest font-bold text-muted group-hover:border-cherry/30 group-hover:text-cherry transition-colors">Brand Identity</span>
                                <span className="px-2 md:px-3 py-1 border border-black/10 text-[9px] md:text-[10px] uppercase tracking-wider md:tracking-widest font-bold text-muted group-hover:border-cherry/30 group-hover:text-cherry transition-colors">Web Design</span>
                            </div>
                        </div>

                        <div className="hidden md:flex justify-center opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-700">
                            <Vinyl size="96px" className="w-24 h-24" />
                        </div>
                    </div>

                    {/* Track 02 */}
                    <div className="fi group flex flex-row md:grid md:grid-cols-[80px_1fr_120px] items-start md:items-center border-b border-black/5 md:border-black/10 transition-colors hover:bg-cherry/[0.02] px-4 md:px-0 py-8 md:py-0">
                        <div className="font-serif text-cherry/20 md:text-cherry/10 text-[44px] md:text-6xl font-light leading-none md:leading-normal md:py-12 md:pl-4 min-w-[50px] md:min-w-0">02</div>

                        <div className="flex-1 md:px-12 md:py-12 md:border-x md:border-black/5">
                            <div className="flex items-center gap-2 md:gap-3 text-cherry text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-widest mb-2 md:mb-4">
                                Side A
                                <div className="flex gap-0.5 items-end h-2 md:h-3">
                                    <span className="w-0.5 md:w-1 bg-cherry h-2/3 opacity-50"></span>
                                    <span className="w-0.5 md:w-1 bg-cherry h-full opacity-50"></span>
                                    <span className="w-0.5 md:w-1 bg-cherry h-1/2 opacity-50"></span>
                                </div>
                            </div>
                            <h3 className="font-serif font-bold text-[28px] md:text-4xl text-ink group-hover:text-cherry transition-colors mb-2 md:mb-4 italic">The Single</h3>
                            <p className="text-muted text-[14px] md:text-base max-w-xl mb-4 md:mb-6 leading-relaxed">
                                One problem. One sharp solution. No full-album commitment needed.
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="px-2 md:px-3 py-1 border border-black/10 text-[9px] md:text-[10px] uppercase tracking-wider md:tracking-widest font-bold text-muted group-hover:border-cherry/30 group-hover:text-cherry transition-colors">Landing Pages</span>
                                <span className="px-2 md:px-3 py-1 border border-black/10 text-[9px] md:text-[10px] uppercase tracking-wider md:tracking-widest font-bold text-muted group-hover:border-cherry/30 group-hover:text-cherry transition-colors">UI/UX</span>
                            </div>
                        </div>

                        <div className="hidden md:flex justify-center opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-700">
                            <Vinyl size="96px" speed={16} className="w-24 h-24" />
                        </div>
                    </div>

                    {/* Track 03 */}
                    <div className="fi group flex flex-row md:grid md:grid-cols-[80px_1fr_120px] items-start md:items-center border-b border-black/5 md:border-black/10 transition-colors hover:bg-cherry/[0.02] px-4 md:px-0 py-8 md:py-0">
                        <div className="font-serif text-cherry/20 md:text-cherry/10 text-[44px] md:text-6xl font-light leading-none md:leading-normal md:py-12 md:pl-4 min-w-[50px] md:min-w-0">03</div>

                        <div className="flex-1 md:px-12 md:py-12 md:border-x md:border-black/5">
                            <div className="flex items-center gap-2 md:gap-3 text-cherry text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-widest mb-2 md:mb-4">
                                Side B
                                <div className="flex gap-0.5 items-end h-2 md:h-3">
                                    <span className="w-0.5 md:w-1 bg-cherry h-full opacity-50"></span>
                                    <span className="w-0.5 md:w-1 bg-cherry h-1/3 opacity-50"></span>
                                    <span className="w-0.5 md:w-1 bg-cherry h-full opacity-50"></span>
                                </div>
                            </div>
                            <h3 className="font-serif font-bold text-[28px] md:text-4xl text-ink group-hover:text-cherry transition-colors mb-2 md:mb-4 italic">The Full Album</h3>
                            <p className="text-muted text-[14px] md:text-base max-w-xl mb-4 md:mb-6 leading-relaxed">
                                Design, development, strategy — end to end. We sit with you through every session.
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="px-2 md:px-3 py-1 border border-black/10 text-[9px] md:text-[10px] uppercase tracking-wider md:tracking-widest font-bold text-muted group-hover:border-cherry/30 group-hover:text-cherry transition-colors">Full-Stack Dev</span>
                                <span className="px-2 md:px-3 py-1 border border-black/10 text-[9px] md:text-[10px] uppercase tracking-wider md:tracking-widest font-bold text-muted group-hover:border-cherry/30 group-hover:text-cherry transition-colors">Product Design</span>
                            </div>
                        </div>

                        <div className="hidden md:flex justify-center opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-700">
                            <Vinyl size="96px" speed={10} className="w-24 h-24" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
