import React from 'react'

export interface EQBarsProps {
    className?: string
}

export default function EQBars({ className = '' }: EQBarsProps) {
    return (
        <div className={`flex items-end gap-[4px] ${className}`}>
            <span className="eq-bar h-[24px]" style={{ animationDelay: '0s' }}></span>
            <span className="eq-bar h-[48px]" style={{ animationDelay: '0.15s' }}></span>
            <span className="eq-bar h-[32px]" style={{ animationDelay: '0.3s' }}></span>
            <span className="eq-bar h-[40px]" style={{ animationDelay: '0.1s' }}></span>
            <span className="eq-bar h-[28px]" style={{ animationDelay: '0.25s' }}></span>
        </div>
    )
}
