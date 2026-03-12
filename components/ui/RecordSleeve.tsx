import React from 'react'

export interface RecordSleeveProps {
    className?: string
    style?: React.CSSProperties
}

export default function RecordSleeve({ className = '', style }: RecordSleeveProps) {
    return (
        <div className={`record-sleeve ${className}`} style={{ width: 58, height: 58, ...style }}>
            <div className="vinyl spin absolute w-[54%] h-[54%] opacity-60"></div>
        </div>
    )
}
