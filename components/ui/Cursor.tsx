'use client'

import React, { useEffect, useRef } from 'react'

export default function Cursor() {
    const curRef = useRef<HTMLDivElement>(null)
    const cur2Ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
            return
        }

        const c = curRef.current
        const c2 = cur2Ref.current
        if (!c || !c2) return

        let mx = -100, my = -100, rx = -100, ry = -100
        let rafId: number

        const onMouseMove = (e: MouseEvent) => {
            mx = e.clientX
            my = e.clientY
            c.style.left = `${mx}px`
            c.style.top = `${my}px`
        }

        const loop = () => {
            rx += (mx - rx) * 0.15
            ry += (my - ry) * 0.15
            c2.style.left = `${rx}px`
            c2.style.top = `${ry}px`
            rafId = requestAnimationFrame(loop)
        }

        const handleMouseEnter = () => {
            c.style.transform = 'translate(-50%, -50%) scale(2.5)'
            c2.style.opacity = '0'
        }

        const handleMouseLeave = () => {
            c.style.transform = 'translate(-50%, -50%) scale(1)'
            c2.style.opacity = '1'
        }

        const addHoverStates = () => {
            document.querySelectorAll('a, button').forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter)
                el.removeEventListener('mouseleave', handleMouseLeave)
                el.addEventListener('mouseenter', handleMouseEnter)
                el.addEventListener('mouseleave', handleMouseLeave)
            })
        }

        window.addEventListener('mousemove', onMouseMove)
        rafId = requestAnimationFrame(loop)

        addHoverStates()
        const observer = new MutationObserver(addHoverStates)
        observer.observe(document.body, { childList: true, subtree: true })

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            cancelAnimationFrame(rafId)
            observer.disconnect()
            document.querySelectorAll('a, button').forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter)
                el.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [])

    return (
        <>
            <div
                ref={curRef}
                className="fixed w-[10px] h-[10px] bg-cherry rounded-full pointer-events-none z-[9999] transition-transform duration-200 hidden md:block"
                style={{ transform: 'translate(-50%, -50%)' }}
            ></div>
            <div
                ref={cur2Ref}
                className="fixed w-[32px] h-[32px] rounded-full border-[1.5px] border-cherry/30 pointer-events-none z-[9998] transition-opacity duration-200 hidden md:block"
                style={{ transform: 'translate(-50%, -50%)' }}
            ></div>
        </>
    )
}
