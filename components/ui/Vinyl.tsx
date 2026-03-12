'use client'

import React from 'react'

export interface VinylProps {
    size?: number | string
    speed?: number
    opacity?: number
    className?: string
    spinClass?: string
    children?: React.ReactNode
}

export default function Vinyl({ size = 80, speed = 8, opacity = 1, className = '', spinClass = 'spin', children }: VinylProps) {
    // Only apply inline size when it's a number (px). If it's a string like "100%"
    // or the className already carries size utilities, skip inline style so Tailwind wins.
    const sizeStyle = typeof size === 'number'
        ? { width: size, height: size }
        : {}

    return (
        <div
            className={`vinyl no-after ${spinClass} ${className}`}
            style={{
                ...sizeStyle,
                animationDuration: `${speed}s`,
                opacity
            }}
        >
            <style dangerouslySetInnerHTML={{__html: `
                .vinyl.no-after::after {
                    display: none !important;
                }
            `}} />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="w-[30%] h-[30%] rounded-full bg-cherry relative flex items-center justify-center shadow-inner">
                    <div className="absolute inset-[8%] border border-white/20 rounded-full"></div>
                    <div className="w-[12%] h-[12%] rounded-full bg-cream shadow-inner absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    <span className="absolute top-[18%] text-white/80 font-bold uppercase tracking-widest" style={{fontSize: 'clamp(8px, 18%, 16px)'}}>05RPM</span>
                </div>
            </div>
            {children}
        </div>
    )
}
