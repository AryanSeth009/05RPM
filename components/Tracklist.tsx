'use client'

import React, { useState } from 'react'
import Vinyl from '@/components/ui/Vinyl'

/* ─── Reusable turntable panel ───────────────────────────────────────────── */
function TurntablePanel({
    speed = 10,
    flip = false,
}: {
    speed?: number;
    flip?: boolean;
}) {
    const PLATTER = 280
    const VINYL = 240
    const ARM_W = 130
    const ARM_H = 6
    const PIVOT_X = PLATTER - 8
    const PIVOT_Y = 12

    return (
        <div className={`relative w-full h-full flex items-center justify-center ${flip ? 'lg:justify-start lg:pl-2' : 'lg:justify-end lg:pr-2'}`}>
            <div className="relative flex-shrink-0" style={{ width: PLATTER, height: PLATTER }}>

                {/* Platter rings */}
                <div className="absolute inset-0 rounded-full border border-black/10"
                    style={{ background: 'radial-gradient(circle at 40% 35%, #f2ede8, #e0d8d0)' }}
                />
                <div className="absolute rounded-full border border-black/5"
                    style={{ inset: '5%', background: 'rgba(0,0,0,0.02)' }}
                />
                <div className="absolute rounded-full border border-black/[0.04]"
                    style={{ inset: '12%', background: 'rgba(0,0,0,0.01)' }}
                />

                {/* Vinyl — desktop: CSS hover controls translateX; mobile: always seated */}
                <div className="turntable-vinyl absolute inset-0 flex items-center justify-center z-10">
                    <Vinyl size={VINYL} speed={speed} spinClass="turntable-spin" />
                </div>

                {/* Center spindle */}
                <div className="absolute z-20 rounded-full border border-black/20"
                    style={{ width: 10, height: 10, left: PLATTER / 2 - 5, top: PLATTER / 2 - 5, background: '#888480' }}
                />

                {/* Pivot cap */}
                <div className="absolute z-40 rounded-full border border-black/20 shadow-md"
                    style={{ width: 18, height: 18, left: PIVOT_X - 9, top: PIVOT_Y - 9, background: 'radial-gradient(circle at 35% 35%, #aaa8a4, #5a5856)' }}
                />

                {/* Tonearm — mobile: inline style via isActive prop */}
                <div
                    className="turntable-arm absolute z-30"
                    style={{
                        left: PIVOT_X - ARM_W,
                        top: PIVOT_Y - ARM_H / 2,
                        width: ARM_W,
                        height: ARM_H,
                        transformOrigin: 'right center',
                    }}
                >
                    <div className="absolute inset-0 rounded-full"
                        style={{ background: 'linear-gradient(to bottom, #d4d0cc 0%, #9a9692 50%, #d4d0cc 100%)' }}
                    />
                    <div className="absolute rounded-l-sm"
                        style={{ left: 0, top: -4, width: 24, height: 14, background: 'linear-gradient(to bottom, #c0bcb8, #96928e)' }}
                    />
                    <div className="absolute rounded-b-sm"
                        style={{ left: 8, top: ARM_H + 2, width: 4, height: 9, background: '#9A0002' }}
                    />
                </div>

                {/* Mobile-only spin + arm control via inline style on overlay elements */}
                {/* We use a transparent overlay to trigger animation via a sibling selector trick — 
                    instead, put the inline style directly on the elements using CSS vars */}
            </div>
        </div>
    )
}

/* ─── Mobile play/pause button ───────────────────────────────────────────── */
function MobilePlayButton({ isPlaying, onToggle }: { isPlaying: boolean; onToggle: () => void }) {
    return (
        <button
            type="button"
            onPointerDown={(e) => { e.preventDefault(); e.stopPropagation(); onToggle(); }}
            className="lg:hidden flex items-center justify-center w-9 h-9 border border-cherry/30 rounded-full text-cherry transition-all duration-300 active:bg-cherry active:text-white active:scale-95"
            aria-label={isPlaying ? 'Pause' : 'Play'}
        >
            {isPlaying ? (
                <span className="flex gap-[3px] items-center">
                    <span className="w-[3px] h-3 bg-current rounded-sm"></span>
                    <span className="w-[3px] h-3 bg-current rounded-sm"></span>
                </span>
            ) : (
                <span className="w-0 h-0 ml-0.5 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[9px] border-l-current"></span>
            )}
        </button>
    )
}

export default function Tracklist() {
    const [activeCard, setActiveCard] = useState<number | null>(null)

    const toggle = (id: number) => {
        setActiveCard(prev => prev === id ? null : id)
    }

    return (
        <section className="py-20 px-4 md:px-16 border-t border-black/5 relative bg-cream text-ink font-sans" id="tracklist">
            <style dangerouslySetInnerHTML={{
                __html: `
                .paper-texture {
                    background-image: url("https://www.transparenttextures.com/patterns/paper.png");
                }
                .gatefold-shadow { box-shadow: inset -20px 0 40px -20px rgba(0,0,0,0.06); }
                .gatefold-shadow-reverse { box-shadow: inset 20px 0 40px -20px rgba(0,0,0,0.06); }
                .liner-notes-grid {
                    background-image: radial-gradient(circle, #1A1210 0.5px, transparent 0.5px);
                    background-size: 24px 24px;
                    opacity: 0.03;
                }

                /* ── DESKTOP: hover drives the full animation ── */
                @media (hover: hover) {
                    .turntable-vinyl {
                        transform: translateX(80%);
                        transition: transform 0.55s cubic-bezier(0.34, 1.2, 0.64, 1);
                    }
                    .track-card:hover .turntable-vinyl {
                        transform: translateX(0%);
                    }
                    .turntable-spin {
                        animation: spin 10s linear infinite;
                        animation-play-state: paused;
                    }
                    .track-card:hover .turntable-spin {
                        animation-play-state: running;
                        animation-delay: 0.4s;
                    }
                    .turntable-arm {
                        transform: rotate(22deg);
                        transition: transform 0.5s cubic-bezier(0.34, 1.1, 0.64, 1);
                    }
                    .track-card:hover .turntable-arm {
                        transform: rotate(-28deg);
                        transition-delay: 0.5s;
                    }
                }

                /* ── MOBILE: vinyl always on platter, play button controls spin + needle ── */
                @media (hover: none) {
                    .turntable-vinyl {
                        transform: translateX(0%) !important;
                        transition: none !important;
                    }
                    .turntable-spin {
                        animation: spin 10s linear infinite;
                        animation-play-state: paused;
                    }
                    .turntable-arm {
                        transform: rotate(22deg);
                        transition: transform 0.5s cubic-bezier(0.34, 1.1, 0.64, 1);
                    }
                    .track-card.is-active .turntable-spin {
                        animation-play-state: running;
                        animation-delay: 0.4s;
                    }
                    .track-card.is-active .turntable-arm {
                        transform: rotate(-28deg);
                        transition-delay: 0.5s;
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
                    <article className={`track-card group relative grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-visible mx-0 md:mx-0${activeCard === 1 ? ' is-active' : ''}`}>
                        <div className="fi relative bg-ink/[0.02] p-8 md:p-10 flex flex-col justify-between min-h-[350px] z-20 gatefold-shadow paper-texture border border-black/5 lg:border-r-0">
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
                                <span className="px-3 py-1.5 rounded-full border border-cherry/20 bg-cherry/[0.03] text-[9px] font-bold uppercase tracking-widest text-cherry hover:bg-cherry hover:text-white cursor-pointer transition-colors duration-300">Brand Identity</span>
                                <span className="px-3 py-1.5 rounded-full border border-cherry/20 bg-cherry/[0.03] text-[9px] font-bold uppercase tracking-widest text-cherry hover:bg-cherry hover:text-white cursor-pointer transition-colors duration-300">Web Design</span>
                                <MobilePlayButton isPlaying={activeCard === 1} onToggle={() => toggle(1)} />
                            </div>
                        </div>
                        <div className="fi relative bg-ink/[0.01] overflow-hidden min-h-[300px] lg:min-h-full border border-black/5 lg:border-l-0 gatefold-shadow-reverse border-t-0 lg:border-t p-4 md:p-8">
                            <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none mix-blend-multiply"></div>
                            <TurntablePanel speed={10} flip={false} />
                        </div>
                    </article>

                    {/* Track 02 */}
                    <article className={`track-card group relative grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-visible mx-0 md:mx-0${activeCard === 2 ? ' is-active' : ''}`}>
                        <div className="fi relative bg-ink/[0.02] p-8 md:p-10 flex flex-col justify-between min-h-[350px] z-20 gatefold-shadow paper-texture border border-black/5 lg:border-r-0 lg:order-2 gatefold-shadow-reverse">
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
                                <span className="px-3 py-1.5 rounded-full border border-cherry/20 bg-cherry/[0.03] text-[9px] font-bold uppercase tracking-widest text-cherry hover:bg-cherry hover:text-white cursor-pointer transition-colors duration-300">Landing Pages</span>
                                <span className="px-3 py-1.5 rounded-full border border-cherry/20 bg-cherry/[0.03] text-[9px] font-bold uppercase tracking-widest text-cherry hover:bg-cherry hover:text-white cursor-pointer transition-colors duration-300">UI/UX</span>
                                <MobilePlayButton isPlaying={activeCard === 2} onToggle={() => toggle(2)} />
                            </div>
                        </div>
                        <div className="fi relative bg-ink/[0.01] overflow-hidden min-h-[300px] lg:min-h-full border border-black/5 lg:border-r-0 gatefold-shadow border-t-0 p-4 md:p-8 lg:order-1 lg:border-t">
                            <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none mix-blend-multiply"></div>
                            <TurntablePanel speed={16} flip={true} />
                        </div>
                    </article>

                    {/* Track 03 */}
                    <article className={`track-card group relative grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-visible mx-0 md:mx-0${activeCard === 3 ? ' is-active' : ''}`}>
                        <div className="fi relative bg-ink/[0.02] p-8 md:p-10 flex flex-col justify-between min-h-[350px] z-20 gatefold-shadow paper-texture border border-black/5 lg:border-r-0">
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
                                <span className="px-3 py-1.5 rounded-full border border-cherry/20 bg-cherry/[0.03] text-[9px] font-bold uppercase tracking-widest text-cherry hover:bg-cherry hover:text-white cursor-pointer transition-colors duration-300">Full-Stack Dev</span>
                                <span className="px-3 py-1.5 rounded-full border border-cherry/20 bg-cherry/[0.03] text-[9px] font-bold uppercase tracking-widest text-cherry hover:bg-cherry hover:text-white cursor-pointer transition-colors duration-300">Product Design</span>
                                <MobilePlayButton isPlaying={activeCard === 3} onToggle={() => toggle(3)} />
                            </div>
                        </div>
                        <div className="fi relative bg-ink/[0.01] overflow-hidden min-h-[300px] lg:min-h-full border border-black/5 lg:border-l-0 gatefold-shadow-reverse border-t-0 p-4 md:p-8 lg:border-t">
                            <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none mix-blend-multiply"></div>
                            <TurntablePanel speed={12} flip={false} />
                        </div>
                    </article>

                </div>
            </div>
        </section>
    )
}
