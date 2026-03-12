import React from 'react'
import Vinyl from '@/components/ui/Vinyl'

export default function Tracklist() {
    return (
        <section className="py-20 px-4 md:px-16 border-t border-black/5 relative bg-cream text-ink font-sans" id="tracklist">
             <style dangerouslySetInnerHTML={{__html: `
                .paper-texture {
                    background-image: url("https://www.transparenttextures.com/patterns/paper.png");
                }
                .gatefold-shadow {
                    box-shadow: inset -20px 0 40px -20px rgba(0,0,0,0.06);
                }
                .gatefold-shadow-reverse {
                    box-shadow: inset 20px 0 40px -20px rgba(0,0,0,0.06);
                }
                .liner-notes-grid {
                    background-image: radial-gradient(circle, #1A1210 0.5px, transparent 0.5px);
                    background-size: 24px 24px;
                    opacity: 0.03;
                }
                .vinyl-spin-hover {
                    animation: spin 10s linear infinite;
                    animation-play-state: paused;
                }
                .track-card:hover .vinyl-spin-hover {
                    animation-play-state: running;
                }
                .vinyl-reveal {
                    transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
                    transform: translateX(-40%);
                }
                .track-card:hover .vinyl-reveal {
                    transform: translateX(0%);
                }
                @media (max-width: 1024px) {
                   .vinyl-reveal {
                      transform: translateX(0%);
                   }
                   .vinyl-spin-hover {
                      animation-play-state: running;
                   }
                }
            `}} />

            <div className="max-w-[1200px] mx-auto">
                <div className="fi flex flex-col md:flex-row justify-between md:items-end mb-16 px-4 md:px-0">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 md:gap-4 text-cherry text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold mb-4 md:mb-6">
                            <span className="w-4 md:w-8 h-[1px] md:h-[1.5px] bg-cherry"></span>
                            Our Services
                        </div>
                        <h2 className="font-serif font-bold text-ink leading-tight text-[40px] md:text-6xl mb-4 md:mb-0">
                            The <em className="italic text-cherry">Tracklist</em>
                        </h2>
                    </div>
                    <p className="text-muted max-w-xs md:text-right mt-2 md:mt-0 text-[14px] md:text-sm">
                        Every service we offer, pressed with full intent. Pick your track. Our approach blends technical precision with creative soul.
                    </p>
                </div>

                <div className="space-y-16 lg:space-y-24">
                    {/* Track 01 */}
                    <article className="fi track-card group relative grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-visible mx-4 md:mx-0">
                        <div className="relative bg-ink/[0.02] p-8 md:p-10 flex flex-col justify-between min-h-[350px] z-20 gatefold-shadow paper-texture border border-black/5 lg:border-r-0">
                            <div className="liner-notes-grid absolute inset-0 pointer-events-none"></div>
                            <div className="relative">
                                <div className="flex justify-between items-start mb-8">
                                    <span className="text-4xl md:text-5xl font-serif text-ink/10 italic">01</span>
                                    <div className="text-right">
                                        <div className="flex items-center justify-end gap-2 text-cherry text-[9px] font-bold uppercase tracking-[0.2em] mb-1">
                                            Side A
                                            <div className="flex gap-[1px] items-end h-2">
                                                <span className="w-[1px] bg-cherry h-full opacity-50"></span>
                                                <span className="w-[1px] bg-cherry h-2/3 opacity-50"></span>
                                                <span className="w-[1px] bg-cherry h-full opacity-50"></span>
                                            </div>
                                        </div>
                                        <span className="text-[9px] uppercase tracking-widest text-muted italic">33 1/3 RPM</span>
                                    </div>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight italic group-hover:text-cherry transition-colors duration-500">The Launch</h3>
                                <p className="text-muted max-w-sm text-sm leading-relaxed mb-8">
                                    Your first pressing. Enter the market with a sound people actually remember. We handle the strategy and visual hook.
                                </p>
                            </div>
                            <div className="relative flex flex-wrap items-center gap-3 pt-6 border-t border-black/5">
                                <span className="text-[9px] font-bold uppercase tracking-widest py-1 border-b border-cherry/20 text-muted group-hover:text-cherry group-hover:border-cherry/40 transition-colors">Brand Identity</span>
                                <span className="text-[9px] font-bold uppercase tracking-widest py-1 border-b border-cherry/20 text-muted group-hover:text-cherry group-hover:border-cherry/40 transition-colors">Web Design</span>
                            </div>
                        </div>
                        <div className="relative bg-ink/[0.01] flex items-center justify-center overflow-hidden min-h-[300px] lg:min-h-full border border-black/5 lg:border-l-0 gatefold-shadow-reverse border-t-0 lg:border-t p-8">
                            <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none mix-blend-multiply"></div>
                            <div className="vinyl-reveal w-full flex justify-center lg:justify-end lg:pr-8">
                                {/* Wrapped existing Vinyl to use hover animation classes */}
                                <div className="vinyl-spin-hover relative flex items-center justify-center pointer-events-none group-hover:scale-105 transition-transform duration-700">
                                   <Vinyl size={280} className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] opacity-90 shadow-2xl drop-shadow-2xl" speed={10} />
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Track 02 */}
                    <article className="fi track-card group relative grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-visible mx-4 md:mx-0">
                        <div className="relative bg-ink/[0.02] p-8 md:p-10 flex flex-col justify-between min-h-[350px] z-20 gatefold-shadow paper-texture border border-black/5 lg:border-r-0 lg:order-2 gatefold-shadow-reverse">
                            <div className="liner-notes-grid absolute inset-0 pointer-events-none"></div>
                            <div className="relative">
                                <div className="flex justify-between items-start mb-8">
                                    <span className="text-4xl md:text-5xl font-serif text-ink/10 italic">02</span>
                                    <div className="text-right">
                                        <div className="flex items-center justify-end gap-2 text-cherry text-[9px] font-bold uppercase tracking-[0.2em] mb-1">
                                            Side A
                                            <div className="flex gap-[1px] items-end h-2">
                                                 <span className="w-[1px] bg-cherry h-2/3 opacity-50"></span>
                                                 <span className="w-[1px] bg-cherry h-full opacity-50"></span>
                                                 <span className="w-[1px] bg-cherry h-1/2 opacity-50"></span>
                                            </div>
                                        </div>
                                        <span className="text-[9px] uppercase tracking-widest text-muted italic">High Fidelity</span>
                                    </div>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight italic group-hover:text-cherry transition-colors duration-500">The Single</h3>
                                <p className="text-muted max-w-sm text-sm leading-relaxed mb-8">
                                    One problem. One sharp solution. No full-album commitment needed. High impact conversion tools for rapid scale.
                                </p>
                            </div>
                            <div className="relative flex flex-wrap items-center gap-3 pt-6 border-t border-black/5">
                                <span className="text-[9px] font-bold uppercase tracking-widest py-1 border-b border-cherry/20 text-muted group-hover:text-cherry group-hover:border-cherry/40 transition-colors">Landing Pages</span>
                                <span className="text-[9px] font-bold uppercase tracking-widest py-1 border-b border-cherry/20 text-muted group-hover:text-cherry group-hover:border-cherry/40 transition-colors">UI/UX</span>
                            </div>
                        </div>
                        <div className="relative bg-ink/[0.01] flex items-center justify-center overflow-hidden min-h-[300px] lg:min-h-full border border-black/5 lg:border-r-0 gatefold-shadow border-t-0 p-8 lg:order-1 lg:border-t">
                            <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none mix-blend-multiply"></div>
                            <div className="vinyl-reveal w-full flex justify-center lg:justify-start lg:pl-8" style={{ transform: 'translateX(40%)' }}>
                                 <style dangerouslySetInnerHTML={{__html: `
                                    .track-card:hover .vinyl-reveal[style*="translateX(40%)"] { transform: translateX(0%) !important; }
                                    @media (max-width: 1024px) {
                                       .vinyl-reveal[style*="translateX(40%)"] { transform: translateX(0%) !important; }
                                    }
                                 `}}/>
                                <div className="vinyl-spin-hover relative flex items-center justify-center pointer-events-none group-hover:scale-105 transition-transform duration-700">
                                   <Vinyl size={280} className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] opacity-90 shadow-2xl drop-shadow-2xl" speed={16} />
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Track 03 */}
                    <article className="fi track-card group relative grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-visible mx-4 md:mx-0">
                        <div className="relative bg-ink/[0.02] p-8 md:p-10 flex flex-col justify-between min-h-[350px] z-20 gatefold-shadow paper-texture border border-black/5 lg:border-r-0">
                            <div className="liner-notes-grid absolute inset-0 pointer-events-none"></div>
                            <div className="relative">
                                <div className="flex justify-between items-start mb-8">
                                    <span className="text-4xl md:text-5xl font-serif text-ink/10 italic">03</span>
                                    <div className="text-right">
                                        <div className="flex items-center justify-end gap-2 text-cherry text-[9px] font-bold uppercase tracking-[0.2em] mb-1">
                                            Side B
                                            <div className="flex gap-[1px] items-end h-2">
                                                <span className="w-[1px] bg-cherry h-full opacity-50"></span>
                                                <span className="w-[1px] bg-cherry h-1/3 opacity-50"></span>
                                                <span className="w-[1px] bg-cherry h-full opacity-50"></span>
                                            </div>
                                        </div>
                                        <span className="text-[9px] uppercase tracking-widest text-muted italic">Long Player</span>
                                    </div>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight italic group-hover:text-cherry transition-colors duration-500">The Full Album</h3>
                                <p className="text-muted max-w-sm text-sm leading-relaxed mb-8">
                                    Design, development, strategy — end to end. We sit with you through every session to produce a masterpiece.
                                </p>
                            </div>
                            <div className="relative flex flex-wrap items-center gap-3 pt-6 border-t border-black/5">
                                <span className="text-[9px] font-bold uppercase tracking-widest py-1 border-b border-cherry/20 text-muted group-hover:text-cherry group-hover:border-cherry/40 transition-colors">Full-Stack Dev</span>
                                <span className="text-[9px] font-bold uppercase tracking-widest py-1 border-b border-cherry/20 text-muted group-hover:text-cherry group-hover:border-cherry/40 transition-colors">Product Design</span>
                            </div>
                        </div>
                        <div className="relative bg-ink/[0.01] flex items-center justify-center overflow-hidden min-h-[300px] lg:min-h-full border border-black/5 lg:border-l-0 gatefold-shadow-reverse border-t-0 p-8 lg:border-t">
                            <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none mix-blend-multiply"></div>
                            <div className="vinyl-reveal w-full flex justify-center lg:justify-end lg:pr-8">
                                <div className="vinyl-spin-hover relative flex items-center justify-center pointer-events-none group-hover:scale-105 transition-transform duration-700">
                                   <Vinyl size={280} className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] opacity-90 shadow-2xl drop-shadow-2xl" speed={12} />
                                </div>
                            </div>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    )
}
