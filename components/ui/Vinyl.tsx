'use client'

import React from 'react'

export interface VinylProps {
    size?: number | string
    speed?: number
    opacity?: number
    className?: string
    children?: React.ReactNode
}

export default function Vinyl({ size = 80, speed = 8, opacity = 1, className = '', children }: VinylProps) {
    // Only apply inline size when it's a number (px). If it's a string like "100%"
    // or the className already carries size utilities, skip inline style so Tailwind wins.
    const sizeStyle = typeof size === 'number'
        ? { width: size, height: size }
        : {}

    return (
        <div
            className={`vinyl spin ${className}`}
            style={{
                ...sizeStyle,
                animationDuration: `${speed}s`,
                opacity
            }}
        >
            {children}
        </div>
    )
}
