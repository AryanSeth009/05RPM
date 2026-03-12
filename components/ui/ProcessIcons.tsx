import React from 'react'
import Vinyl from './Vinyl'

export function HeadphoneIcon() {
    return (
        <div className="icon-card">
            <div className="ic-headphone"></div>
        </div>
    )
}

export function MusicNoteIcon() {
    return (
        <div className="icon-card">
            <span className="font-serif text-cherry text-4xl leading-none">♪</span>
        </div>
    )
}

export function FaderMixerIcon() {
    return (
        <div className="icon-card">
            <div className="ic-fader">
                <div className="fader-track"><div className="fader-knob" style={{ top: '20%' }}></div></div>
                <div className="fader-track"><div className="fader-knob" style={{ top: '60%' }}></div></div>
                <div className="fader-track"><div className="fader-knob" style={{ top: '40%' }}></div></div>
                <div className="fader-track"><div className="fader-knob" style={{ top: '10%' }}></div></div>
            </div>
        </div>
    )
}

export function VinylDiskIcon() {
    return (
        <div className="icon-card overflow-hidden">
            <Vinyl size={56} className="w-14 h-14" />
        </div>
    )
}
