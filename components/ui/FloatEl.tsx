import React from 'react'

export interface FloatElProps {
    rot?: string       // e.g. "-8deg"
    delay?: string     // e.g. "0.8s"
    className?: string
    children: React.ReactNode
}

export default function FloatEl({ rot = '0deg', delay = '0s', className = '', children }: FloatElProps) {
    return (
        <div
            className={`float-el ${className}`}
            style={{ '--rot': rot, animationDelay: delay } as React.CSSProperties}
        >
            {children}
        </div>
    )
}
