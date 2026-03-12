'use client'

import React, { useState } from 'react'

interface ImageCarouselProps {
    images: string[]
    imageFit?: 'cover' | 'contain'
    className?: string
}

export default function ImageCarousel({ images, imageFit = 'cover', className = '' }: ImageCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0)

    if (!images || images.length === 0) return null

    return (
        <div className={`relative group overflow-hidden rounded-xl border border-ink/10 bg-cream/50 aspect-video ${className}`}>
            {/* Main Image */}
            <div className="w-full h-full relative transition-transform duration-700 ease-in-out">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-out ${idx === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img
                            src={img}
                            alt={`Project screenshot ${idx + 1}`}
                            className={`w-full h-full object-${imageFit}`}
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                idx === activeIndex 
                                ? 'bg-cherry w-6' 
                                : 'bg-ink/20 hover:bg-ink/40'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Arrows */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={() => setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/80 border border-ink/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white text-ink"
                    >
                        ←
                    </button>
                    <button
                        onClick={() => setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/80 border border-ink/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white text-ink"
                    >
                        →
                    </button>
                </>
            )}
            
            {/* Record Sleeve Overlay (Vinyl Theme Touch) */}
            <div className="absolute top-4 right-4 w-12 h-12 opacity-20 pointer-events-none grayscale brightness-150">
                <div className="w-full h-full border-4 border-ink/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-ink/30 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}
