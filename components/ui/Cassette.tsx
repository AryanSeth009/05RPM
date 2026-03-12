import React from 'react'

export interface CassetteProps {
    className?: string
    style?: React.CSSProperties
}

export default function Cassette({ className = '', style }: CassetteProps) {
    return (
        <div className={`cass ${className}`} style={{ width: 80, height: 52, ...style }}>
            <div className="cass-label uppercase">05RPM</div>
        </div>
    )
}
