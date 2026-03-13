'use client'

import React, { useRef, useEffect, useState } from 'react'
import { HeadphoneIcon, MusicNoteIcon, FaderMixerIcon, VinylDiskIcon } from '@/components/ui/ProcessIcons'

const steps = [
    {
        Icon: HeadphoneIcon,
        step: 'Step 01',
        title: 'Listening',
        desc: 'We understand your sound before we make a single mark. No assumptions.',
        delay: '0.1s',
        animDelay: '0ms',
    },
    {
        Icon: MusicNoteIcon,
        step: 'Step 02',
        title: 'Session',
        desc: 'Concepts from scratch. No loops, no templates. Every idea has to earn its place.',
        delay: '0.2s',
        animDelay: '120ms',
    },
    {
        Icon: FaderMixerIcon,
        step: 'Step 03',
        title: 'The Mix',
        desc: 'We refine until every element is right — not just good enough. Taste matters here.',
        delay: '0.3s',
        animDelay: '240ms',
    },
    {
        Icon: VinylDiskIcon,
        step: 'Step 04',
        title: 'The Press',
        desc: 'We launch with you. We stay in the room when the needle drops — and after.',
        delay: '0.4s',
        animDelay: '360ms',
    },
]

function StepCard({ Icon, step, title, desc, animDelay }: typeof steps[0]) {
    const [hovered, setHovered] = useState(false)
    const [tilt, setTilt] = useState({ x: 0, y: 0 })
    const cardRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = cardRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = (e.clientX - cx) / (rect.width / 2)
        const dy = (e.clientY - cy) / (rect.height / 2)
        setTilt({ x: dy * -10, y: dx * 10 })
    }

    const handleMouseLeave = () => {
        setHovered(false)
        setTilt({ x: 0, y: 0 })
    }

    return (
        <div
            ref={cardRef}
            onMouseEnter={() => setHovered(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="step-card relative z-10 flex flex-col items-center text-center group h-full"
            style={{
                animationDelay: animDelay,
                transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${hovered ? '10px' : '0px'})`,
                transition: hovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
        >
            {/* Glow Halo removed */}

            {/* Card inner glass panel */}
            <div
                className="relative w-full h-full rounded-2xl px-5 py-7 md:px-6 md:py-8 transition-all duration-500"
                style={{
                    background: '#EFE6DE',
                    border: hovered ? '1px solid rgba(154,0,2,0.25)' : '1px solid rgba(0,0,0,0.07)',
                    boxShadow: hovered
                        ? '0 8px 32px rgba(154,0,2,0.10)'
                        : '0 2px 12px rgba(0,0,0,0.04)',
                }}
            >
                {/* Step number — floats up on hover */}
                <div
                    className="text-cherry text-[9px] md:text-[10px] font-bold uppercase tracking-widest md:tracking-[0.2em] mb-3 md:mb-4 transition-transform duration-500"
                    style={{ transform: hovered ? 'translateY(-2px)' : 'translateY(0)' }}
                >
                    {step}
                </div>

                {/* Icon wrapper — 3D lift + spin on hover */}
                <div
                    className="mb-5 md:mb-7 flex justify-center transition-all duration-500"
                    style={{
                        transform: hovered
                            ? 'perspective(400px) translateZ(20px) rotateY(-8deg) scale(1.1)'
                            : 'perspective(400px) translateZ(0px) rotateY(0deg) scale(1)',
                        filter: hovered ? 'drop-shadow(0 8px 16px rgba(190,30,45,0.3))' : 'none',
                    }}
                >
                    <Icon />
                </div>

                {/* Title */}
                <h4
                    className="font-serif font-bold text-[22px] md:text-2xl mb-2 md:mb-4 md:italic text-ink transition-all duration-500"
                    style={{
                        transform: hovered ? 'translateX(4px)' : 'translateX(0)',
                        textShadow: hovered ? '0 2px 20px rgba(190,30,45,0.2)' : 'none',
                    }}
                >
                    {title}
                </h4>

                {/* Divider line — expands from center on hover */}
                <div
                    className="h-[1px] bg-cherry/30 mb-3 md:mb-4 transition-all duration-500 w-[80%] mx-auto"
                    style={{
                        transform: hovered ? 'scaleX(1)' : 'scaleX(0.3)',
                        transformOrigin: 'center',
                        opacity: hovered ? 1 : 0.5
                    }}
                />

                {/* Description */}
                <p
                    className="text-muted text-[13px] md:text-sm leading-tight md:leading-relaxed px-1 md:px-0 transition-all duration-500"
                    style={{ opacity: hovered ? 1 : 0.7 }}
                >
                    {desc}
                </p>


            </div>
        </div>
    )
}

export default function Process() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [scrollY, setScrollY] = useState(0)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.15 }
        )
        if (sectionRef.current) obs.observe(sectionRef.current)
        return () => obs.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="py-20 md:py-32 px-4 md:px-16 border-t border-black/5 bg-cream/30 md:bg-transparent relative overflow-hidden"
            id="process"
        >
            <style>{`
                @keyframes floatNote {
                    0%, 100% { transform: translateY(0px) rotate(var(--rot)); }
                    50% { transform: translateY(-18px) rotate(calc(var(--rot) + 3deg)); }
                }
                @keyframes pulseGlow {
                    0%, 100% { opacity: 0.06; transform: scale(1); }
                    50% { opacity: 0.13; transform: scale(1.08); }
                }
                @keyframes slideInUp {
                    from { opacity: 0; transform: perspective(600px) rotateX(15deg) translateY(40px); }
                    to   { opacity: 1; transform: perspective(600px) rotateX(0deg) translateY(0); }
                }
                @keyframes orbDrift {
                    0%   { transform: translate(0, 0); }
                    33%  { transform: translate(30px, -20px); }
                    66%  { transform: translate(-20px, 15px); }
                    100% { transform: translate(0, 0); }
                }
                .step-card {
                    opacity: 0;
                    animation: slideInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
                }
                .step-card.visible {
                    opacity: 1;
                }
            `}</style>



            {/* ── Desktop Ghost Notes — far right (parallax) ── */}
            <div
                className="hidden md:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-12 pointer-events-none z-0"
                style={{ transform: `translateY(calc(-50% + ${scrollY * 0.04}px))` }}
            >
                {['♪', '♫', '♩'].map((note, i) => (
                    <span
                        key={note}
                        className="font-serif text-7xl text-cherry leading-none"
                        style={{
                            opacity: 0.08,
                            display: 'block',
                            animation: `floatNote ${5 + i}s ease-in-out infinite`,
                            animationDelay: `${i * 1.2}s`,
                            '--rot': `${[5, -8, 10][i]}deg`,
                        } as React.CSSProperties}
                    >
                        {note}
                    </span>
                ))}
            </div>

            {/* ── Spinning vinyl behind content ── */}
            <div
                className="hidden lg:block absolute right-[22%] top-1/2 -translate-y-1/2 pointer-events-none z-0"
                style={{ animation: 'pulseGlow 6s ease-in-out infinite' }}
            >
                <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
                    <circle cx="160" cy="160" r="155" stroke="rgba(190,30,45,0.15)" strokeWidth="1.5" />
                    <circle cx="160" cy="160" r="120" stroke="rgba(190,30,45,0.10)" strokeWidth="1" />
                    <circle cx="160" cy="160" r="85" stroke="rgba(190,30,45,0.08)" strokeWidth="1" />
                    <circle cx="160" cy="160" r="50" stroke="rgba(190,30,45,0.12)" strokeWidth="1.5" />
                    <circle cx="160" cy="160" r="12" fill="rgba(190,30,45,0.2)" />
                    <circle cx="160" cy="160" r="6" fill="rgba(190,30,45,0.4)" />
                </svg>
            </div>

            {/* ── Main Content ── */}
            <div className="max-w-screen-xl mx-auto relative z-10">

                {/* Header */}
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16 items-end mb-12 md:mb-24"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(24px)',
                        transition: 'opacity 0.8s ease, transform 0.8s ease',
                    }}
                >
                    <div>
                        <div className="flex items-center gap-2 md:gap-4 text-cherry text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold mb-4 md:mb-6">
                            {/* Animated tick line */}
                            <span
                                className="h-[1px] md:h-[1.5px] bg-cherry block"
                                style={{
                                    width: visible ? '32px' : '0px',
                                    transition: 'width 1s ease 0.3s',
                                }}
                            />
                            2026s
                        </div>
                        <h2 className="font-serif font-bold text-ink leading-tight text-[44px] md:text-[clamp(44px,5vw,70px)] md:mb-0 mb-4">
                            How we press<br />
                            <em
                                className="italic text-cherry inline-block"
                                style={{
                                    textShadow: '0 4px 40px rgba(190,30,45,0.25)',
                                }}
                            >
                                a record
                            </em>
                        </h2>
                    </div>
                    <p className="text-muted text-[15px] md:text-lg mb-2">
                        Four steps. No shortcuts. Every record we press goes through the same ritual.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 md:gap-y-6 md:gap-x-5 relative items-stretch">


                    {steps.map((s) => (
                        <div
                            key={s.step}
                            className="h-full"
                            style={{
                                opacity: visible ? undefined : 0,
                                animationPlayState: visible ? 'running' : 'paused',
                                animationDelay: s.delay,
                            }}
                        >
                            <StepCard {...s} />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes pulseRing {
                    0%   { box-shadow: 0 0 0 0 rgba(190,30,45,0.5); }
                    70%  { box-shadow: 0 0 0 10px rgba(190,30,45,0); }
                    100% { box-shadow: 0 0 0 0 rgba(190,30,45,0); }
                }
            `}</style>
        </section>
    )
}