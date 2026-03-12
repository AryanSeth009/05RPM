'use client'

import React, { useState } from 'react'
import Vinyl from '@/components/ui/Vinyl'

export default function CTA() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [validationError, setValidationError] = useState('')

    const handleValidation = () => {
        if (!name.trim()) {
            setValidationError('Name is required.')
            return false
        }
        if (!email.trim() || !email.includes('@') || !email.includes('.')) {
            setValidationError('Please enter a valid email address.')
            return false
        }
        setValidationError('')
        return true
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!handleValidation()) return

        setStatus('loading')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message })
            })

            if (res.ok) {
                setStatus('success')
                setName('')
                setEmail('')
                setMessage('')
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <section className="bg-cherry py-20 md:py-32 px-6 md:px-16 relative overflow-hidden" id="contact">
            {/* CTA Background elements */}
            <div className="absolute -bottom-20 -right-20 md:-bottom-32 md:-right-32 opacity-10 md:opacity-[0.08] pointer-events-none z-0">
                <Vinyl size="100%" speed={20} className="w-[280px] h-[280px] md:w-[420px] md:h-[420px]" />
            </div>
            <div className="hidden md:block absolute top-12 left-20 font-serif text-white/10 text-[130px] pointer-events-none select-none z-0">♪</div>

            <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start md:items-center relative z-10">

                <div className="fi text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 md:gap-4 text-white/50 text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold mb-6">
                        <span className="w-4 md:w-8 h-[1px] md:h-[1.5px] bg-white/30"></span>
                        Let&apos;s work
                    </div>
                    <h2 className="font-serif font-bold text-white leading-tight md:leading-none mb-6 text-[44px] md:text-[clamp(48px,6vw,84px)]">
                        Ready to press<br />something <em className="italic text-white/50">real?</em>
                    </h2>
                    <p className="text-white/60 text-[15px] md:text-lg mb-10 md:mb-0">
                        We take limited projects to ensure every record sounds perfect.
                    </p>
                </div>

                <div className="fi flex flex-col items-center lg:items-end gap-6" style={{ transitionDelay: '0.2s' }}>

                    <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
                                disabled={status === 'loading' || status === 'success'}
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
                                disabled={status === 'loading' || status === 'success'}
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Message (optional)"
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors resize-none h-20"
                                disabled={status === 'loading' || status === 'success'}
                            />
                        </div>

                        {validationError && (
                            <p className="text-ink text-[11px] font-bold uppercase tracking-widest mt-2">{validationError}</p>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="mt-6 bg-white text-cherry px-10 md:px-12 py-5 md:py-6 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] shadow-2xl hover:bg-ink hover:text-white transition-all transform active:scale-95 disabled:opacity-50 w-full"
                        >
                            {status === 'loading' ? 'Pressing...' : 'Drop the needle →'}
                        </button>

                        {status === 'success' && (
                            <p className="text-white text-center text-[12px] font-bold mt-2">Needle dropped. We&apos;ll be in touch.</p>
                        )}
                        {status === 'error' && (
                            <p className="text-ink text-center text-[12px] font-bold mt-2">Something skipped. Try again.</p>
                        )}

                    </form>

                    <p className="text-white/40 text-[10px] md:text-xs font-bold tracking-widest uppercase mt-4 md:mt-0">05rpm.studio@gmail.com</p>
                </div>

            </div>
        </section>
    )
}
