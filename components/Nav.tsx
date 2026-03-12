'use client'

import React, { useState } from 'react'

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    const handleLinkClick = () => {
        setIsOpen(false)
    }

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-[100] bg-cream/90 backdrop-blur-md border-b border-black/5 px-4 md:px-16 py-4 md:py-6 flex justify-between items-center transition-all duration-300">
                <a className="font-sans text-[20px] md:text-[22px] font-bold tracking-tight text-ink leading-none" href="#">
                    05<span className="text-cherry">RPM</span>
                </a>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-12">
                    <li><a onClick={handleLinkClick} className="nav-link text-[11px] uppercase tracking-[0.2em] font-bold text-muted hover:text-cherry transition-colors" href="#tracklist">Tracklist</a></li>
                    <li><a onClick={handleLinkClick} className="nav-link text-[11px] uppercase tracking-[0.2em] font-bold text-muted hover:text-cherry transition-colors" href="#process">Process</a></li>
                    <li><a onClick={handleLinkClick} className="nav-link text-[11px] uppercase tracking-[0.2em] font-bold text-muted hover:text-cherry transition-colors" href="#contact">Let&apos;s Play</a></li>
                </ul>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden p-2 flex flex-col justify-center items-end gap-1.5 focus:outline-none z-[101]"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-[1.5px] bg-ink transition-transform"></div>
                    <div className="w-4 h-[1.5px] bg-cherry transition-transform"></div>
                </button>
            </nav>

            {/* Mobile Dropdown */}
            <div
                className={`fixed inset-0 top-[61px] bg-cream z-[90] transition-all duration-500 flex flex-col items-center justify-center p-8 ${isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
                    }`}
            >
                <ul className="text-center space-y-8">
                    <li><a onClick={handleLinkClick} className="font-serif italic text-4xl text-ink" href="#tracklist">Tracklist</a></li>
                    <li><a onClick={handleLinkClick} className="font-serif italic text-4xl text-ink" href="#process">Process</a></li>
                    <li><a onClick={handleLinkClick} className="font-serif italic text-4xl text-ink" href="#contact">Let&apos;s Play</a></li>
                </ul>
                <div className="mt-20 text-center">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-muted mb-2">Nagpur, India</p>
                    <a onClick={handleLinkClick} className="text-cherry font-bold text-sm" href="mailto:05rpm.studio@gmail.com">05rpm.studio@gmail.com</a>
                </div>
            </div>
        </>
    )
}
