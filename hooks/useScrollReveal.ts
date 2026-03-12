'use client'

import { useEffect } from 'react'

export function useScrollReveal() {
    useEffect(() => {
        // Only run on client
        if (typeof IntersectionObserver === 'undefined') return

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('on')
                }
            })
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })

        document.querySelectorAll('.fi').forEach(el => observer.observe(el))

        // Optional: observe dynamically added elements as well using a MutationObserver
        const mutationObserver = new MutationObserver(() => {
            document.querySelectorAll('.fi:not(.on)').forEach(el => observer.observe(el))
        })

        mutationObserver.observe(document.body, { childList: true, subtree: true })

        return () => {
            observer.disconnect()
            mutationObserver.disconnect()
        }
    }, [])
}
