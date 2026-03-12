'use client'

import React from 'react'
import Vinyl from '@/components/ui/Vinyl'

/* ─── Reusable turntable panel ───────────────────────────────────────────── */
function TurntablePanel({ speed = 10, flip = false }: { speed?: number; flip?: boolean }) {
    const PLATTER = 280   // platter outer diameter (px)
    const VINYL = 240   // vinyl diameter — fills platter
    const ARM_W = 130   // arm length from pivot to stylus tip
    const ARM_H = 6     // arm thickness
    // Pivot sits at top-right of the platter circle
    const PIVOT_X = PLATTER - 8   // 272 from left of container
    const PIVOT_Y = 12            // 12px from top

    return (
        <div className={`relative w-full h-full flex items-center ${flip ? 'justify-start lg:pl-2' : 'justify-end lg:pr-2'}`}>
            {/* Fixed container — every child uses absolute px coords */}
            <div className="relative flex-shrink-0" style={{ width: PLATTER, height: PLATTER }}>

                {/* ── Platter rings ── */}
                <div className="absolute inset-0 rounded-full border border-black/10"
                    style={{ background: 'radial-gradient(circle at 40% 35%, #f2ede8, #e0d8d0)' }}
                />
                <div className="absolute rounded-full border border-black/5"
                    style={{ inset: '5%', background: 'rgba(0,0,0,0.02)' }}
                />
                <div className="absolute rounded-full border border-black/[0.04]"
                    style={{ inset: '12%', background: 'rgba(0,0,0,0.01)' }}
                />

                {/* ── Vinyl — size=240 so inline style wins at 240×240px ── */}
                <div className="turntable-vinyl absolute inset-0 flex items-center justify-center z-10">
                    <Vinyl
                        size={VINYL}
                        speed={speed}
                        spinClass="turntable-spin"
                    />
                </div>

                {/* ── Center spindle ── */}
                <div className="absolute z-20 rounded-full border border-black/20"
                    style={{
                        width: 10, height: 10,
                        left: PLATTER / 2 - 5,
                        top: PLATTER / 2 - 5,
                        background: '#888480',
                    }}
                />

                {/* ── Pivot cap ── */}
                <div className="absolute z-40 rounded-full border border-black/20 shadow-md"
                    style={{
                        width: 18, height: 18,
                        left: PIVOT_X - 9,
                        top: PIVOT_Y - 9,
                        background: 'radial-gradient(circle at 35% 35%, #aaa8a4, #5a5856)',
                    }}
                />

                {/* ── Tonearm
                     right edge aligns with PIVOT_X, vertically centred on PIVOT_Y.
                     -28° at rest  → arm angles up-right (stylus lifted, parked)
                      22° playing  → arm dips down toward outer groove             ── */}
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
                    {/* Shaft */}
                    <div className="absolute inset-0 rounded-full"
                        style={{ background: 'linear-gradient(to bottom, #d4d0cc 0%, #9a9692 50%, #d4d0cc 100%)' }}
                    />
                    {/* Headshell block at left tip */}
                    <div className="absolute rounded-l-sm"
                        style={{
                            left: 0, top: -4,
                            width: 24, height: 14,
                            background: 'linear-gradient(to bottom, #c0bcb8, #96928e)',
                        }}
                    />
                    {/* Stylus needle — hangs below headshell */}
                    <div className="absolute rounded-b-sm"
                        style={{
                            left: 8, top: ARM_H + 2,
                            width: 4, height: 9,
                            background: '#9A0002',
                        }}
                    />
                </div>

            </div>
        </div>
    )
}

export default function Tracklist() {
    return (
        <section className="py-20 px-4 md:px-16 border-t border-black/5 relative bg-cream text-ink font-sans" id="tracklist">
            <style dangerouslySetInnerHTML={{
                __html: `
                /* ── Shared reset ── */
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

                /* ── Vinyl: starts parked to the right, off the platter ── */
                .turntable-vinyl {
                    transform: translateX(80%);
                    transition: transform 0.55s cubic-bezier(0.34, 1.2, 0.64, 1);
                }
                .track-card:hover .turntable-vinyl {
                    transform: translateX(0%);
                }

                /* ── Spin only once seated ── */
                .turntable-spin {
                    animation: spin 10s linear infinite;
                    animation-play-state: paused;
                }
                .track-card:hover .turntable-spin {
                    animation-play-state: running;
                    animation-delay: 0.4s;
                }

                /* ── Tonearm: 22deg = parked outside, -28deg = on vinyl ── */
                .turntable-arm {
                    transform: rotate(22deg);   /* parked outside by default */
                    transition: transform 0.5s cubic-bezier(0.34, 1.1, 0.64, 1);
                }
                .track-card:hover .turntable-arm {
                    transform: rotate(-28deg);  /* drops onto vinyl on hover */
                    transition-delay: 0.5s;
                }

                /* ── Mobile: always show, always spinning ── */
                @media (max-width: 1024px) {
                    .turntable-vinyl {
                        transform: translateX(0%) !important;
                        transition: none !important;
                    }
                    .turntable-spin {
                        animation-play-state: running !important;
                    }
                    .turntable-arm {
                        transform: rotate(14deg) !important;
                        transition: none !important;
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
                                <span className="px-3 py-1.5 rounded-full border border-cherry/20 bg-cherry/[0.03] text-[9px] font-bold uppercase tracking-widest text-cherry hover:bg-cherry hover:text-white cursor-pointer transition-colors duration-300">Brand Identity</span>
                                <span className="px-3 py-1.5 rounded-full border border-cherry/20 bg-cherry/[0.03] text-[9px] font-bold uppercase tracking-widest text-cherry hover:bg-cherry hover:text-white cursor-pointer transition-colors duration-300">Web Design</span>
                            </div>
                        </div>
                        <div className="relative bg-ink/[0.01] overflow-hidden min-h-[300px] lg:min-h-full border border-black/5 lg:border-l-0 gatefold-shadow-reverse border-t-0 lg:border-t p-8">
                            <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none mix-blend-multiply"></div>
                            <TurntablePanel speed={10} flip={false} />
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
                                <span className="px-3 py-1.5 rounded-full border border-cherry/20 bg-cherry/[0.03] text-[9px] font-bold uppercase tracking-widest text-cherry hover:bg-cherry hover:text-white cursor-pointer transition-colors duration-300">Landing Pages</span>
                                <span className="px-3 py-1.5 rounded-full border border-cherry/20 bg-cherry/[0.03] text-[9px] font-bold uppercase tracking-widest text-cherry hover:bg-cherry hover:text-white cursor-pointer transition-colors duration-300">UI/UX</span>
                            </div>
                        </div>
                        <div className="relative bg-ink/[0.01] overflow-hidden min-h-[300px] lg:min-h-full border border-black/5 lg:border-r-0 gatefold-shadow border-t-0 p-8 lg:order-1 lg:border-t">
                            <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none mix-blend-multiply"></div>
                            <TurntablePanel speed={16} flip={true} />
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
                                <span className="px-3 py-1.5 rounded-full border border-cherry/20 bg-cherry/[0.03] text-[9px] font-bold uppercase tracking-widest text-cherry hover:bg-cherry hover:text-white cursor-pointer transition-colors duration-300">Full-Stack Dev</span>
                                <span className="px-3 py-1.5 rounded-full border border-cherry/20 bg-cherry/[0.03] text-[9px] font-bold uppercase tracking-widest text-cherry hover:bg-cherry hover:text-white cursor-pointer transition-colors duration-300">Product Design</span>
                            </div>
                        </div>
                        <div className="relative bg-ink/[0.01] overflow-hidden min-h-[300px] lg:min-h-full border border-black/5 lg:border-l-0 gatefold-shadow-reverse border-t-0 p-8 lg:border-t">
                            <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none mix-blend-multiply"></div>
                            <TurntablePanel speed={12} flip={false} />
                        </div>
                    </article>

                </div>
            </div>
        </section>
    )
}
