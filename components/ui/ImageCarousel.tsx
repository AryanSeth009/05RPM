'use client'

import React, { useState, useEffect, useCallback } from 'react'

interface ImageCarouselProps {
  images: string[];
  imageFit?: 'cover' | 'contain';
  className?: string;
  autoPlayInterval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  imageFit = 'cover',
  className = '',
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    if (images.length <= 1 || isHovered) return

    const interval = setInterval(goToNext, autoPlayInterval)
    return () => clearInterval(interval)
  }, [images.length, autoPlayInterval, goToNext, isHovered])

  if (!images || images.length === 0) {
    return (
      <div className={`aspect-video bg-ink/5 flex items-center justify-center rounded-lg ${className}`}>
        <span className="text-muted text-sm font-mono tracking-widest uppercase opacity-50">No Images Available</span>
      </div>
    )
  }

  return (
    <div 
      className={`relative group overflow-hidden rounded-xl bg-ink/5 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images Container */}
      <div className="relative aspect-video md:aspect-[16/10] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
              index === currentIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={image}
              alt={`Project Slide ${index + 1}`}
              className={`w-full h-full ${imageFit === 'cover' ? 'object-cover' : 'object-contain'} select-none`}
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-ink/5 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Navigation Controls (Visible on Hover if multiple images) */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-cherry hover:border-cherry z-20"
            aria-label="Previous Slide"
          >
           <span className="text-lg leading-none mt-[-2px]">←</span>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-cherry hover:border-cherry z-20"
            aria-label="Next Slide"
          >
            <span className="text-lg leading-none mt-[-2px]">→</span>
          </button>
        </>
      )}

      {/* Pagination Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`group relative h-1.5 transition-all duration-500 rounded-full overflow-hidden ${
                index === currentIndex ? 'w-8 bg-cherry' : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
                {/* Progress indicator for active dot */}
                {index === currentIndex && !isHovered && (
                    <div 
                        className="absolute inset-0 bg-white/30 origin-left animate-carousel-progress"
                        style={{ animationDuration: `${autoPlayInterval}ms` }}
                    />
                )}
            </button>
          ))}
        </div>
      )}

      {/* Aesthetic Grain/Noise Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
      
      {/* CSS Animation for progress bar if needed - but tailwind might need config. 
          Actually I'll stick to a simpler active state for now or add a style tag.
      */}
      <style jsx>{`
        @keyframes progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-carousel-progress {
          animation: progress linear forwards;
        }
      `}</style>
    </div>
  )
}

export default ImageCarousel
