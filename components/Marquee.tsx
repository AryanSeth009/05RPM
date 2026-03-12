'use client'

import React, { useState } from 'react'

export default function Marquee() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="bg-cherry py-3 md:py-4 overflow-hidden whitespace-nowrap border-y border-cherry"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`marquee-go inline-flex md:flex md:items-center ${isHovered ? 'marquee-paused' : ''}`}>
                <div className="inline-flex items-center gap-6 md:gap-12 px-4 md:px-6">
                    <span className="font-sans text-white/90 md:text-white text-[10px] md:text-[11px] uppercase font-bold tracking-widest md:tracking-[0.3em]">Side A — Launch</span><span className="text-white/30">•</span>
                    <span className="font-sans text-white/90 md:text-white text-[10px] md:text-[11px] uppercase font-bold tracking-widest md:tracking-[0.3em]">Side B — Grow</span><span className="text-white/30">•</span>
                    <span className="font-sans text-white/90 md:text-white text-[10px] md:text-[11px] uppercase font-bold tracking-widest md:tracking-[0.3em]">Repress — Transform</span><span className="text-white/30">•</span>
                    <span className="hidden md:inline font-sans text-white text-[11px] uppercase font-bold tracking-[0.3em]">Five Voices. One Frequency.</span><span className="hidden md:inline text-white/30">•</span>
                </div>
                <div className="inline-flex items-center gap-6 md:gap-12 px-4 md:px-6">
                    <span className="font-sans text-white/90 md:text-white text-[10px] md:text-[11px] uppercase font-bold tracking-widest md:tracking-[0.3em]">Side A — Launch</span><span className="text-white/30">•</span>
                    <span className="font-sans text-white/90 md:text-white text-[10px] md:text-[11px] uppercase font-bold tracking-widest md:tracking-[0.3em]">Side B — Grow</span><span className="text-white/30">•</span>
                    <span className="font-sans text-white/90 md:text-white text-[10px] md:text-[11px] uppercase font-bold tracking-widest md:tracking-[0.3em]">Repress — Transform</span><span className="text-white/30">•</span>
                    <span className="hidden md:inline font-sans text-white text-[11px] uppercase font-bold tracking-[0.3em]">Five Voices. One Frequency.</span><span className="hidden md:inline text-white/30">•</span>
                </div>
            </div>
        </div>
    )
}
