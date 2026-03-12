'use client'

import React, { useState } from 'react'
import Vinyl from '@/components/ui/Vinyl'

export default function Archives() {
  const [activeTrack, setActiveTrack] = useState(1);

  const tracks = [
    {
      id: 1,
      side: 'Side A',
      year: '2026',
      title: 'Project Arjuna',
      desc: 'Full-Stack Development & Architecture',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
      alt: 'Project Arjuna Mockup'
    },
    {
      id: 2,
      side: 'Side A',
      year: '2026',
      title: 'Ignite Forum',
      desc: 'Community Platform & Brand Identity',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
      alt: 'Ignite Forum Mockup'
    },
    {
      id: 3,
      side: 'Side B',
      year: '2025',
      title: 'FinAnalytics UI',
      desc: 'Business Data Dashboard',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      alt: 'FinAnalytics Mockup'
    },
    {
      id: 4,
      side: 'Side B',
      year: '2025',
      title: 'SafeRoute System',
      desc: 'Incident Response Interface',
      img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
      alt: 'SafeRoute Mockup'
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-16 flex items-center relative border-t border-black/5">
      <div className="max-w-screen-xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        <div className="col-span-1 lg:col-span-5 fi">
          <div className="flex items-center gap-4 text-cherry text-[11px] uppercase tracking-[0.3em] font-bold mb-6">
            <span className="w-8 h-[1.5px] bg-cherry"></span>
            Selected Works
          </div>
          
          <h2 className="font-serif font-bold text-ink leading-none mb-12" style={{ fontSize: 'clamp(52px, 6vw, 76px)' }}>
            From the <br/><em className="italic text-cherry">Archives.</em>
          </h2>

          <ul className="flex flex-col w-full border-t border-black/10">
            {tracks.map((track) => {
              const isActive = activeTrack === track.id;
              return (
                <li 
                  key={track.id}
                  className={`py-6 flex items-center gap-6 group cursor-pointer border-b border-black/10 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive 
                      ? 'pl-6 border-cherry bg-cherry/[0.02]' 
                      : 'hover:pl-6 hover:border-cherry hover:bg-cherry/[0.02]'
                  }`}
                  onMouseEnter={() => setActiveTrack(track.id)}
                >
                  <span className={`font-serif text-5xl font-light transition-colors duration-[400ms] ${
                    isActive ? 'text-cherry/15' : 'text-ink/10 group-hover:text-cherry/15'
                  }`}>
                    {track.id.toString().padStart(2, '0')}
                  </span>
                  <div>
                    <div className="flex items-center gap-3 mb-1 mt-1">
                      <span className={`text-[9px] uppercase tracking-widest font-bold transition-colors ${
                        isActive ? 'text-cherry' : 'text-muted group-hover:text-cherry'
                      }`}>
                        {track.side}
                      </span>
                      <span className={`w-4 h-[1px] transition-colors ${
                        isActive ? 'bg-cherry/30' : 'bg-black/10 group-hover:bg-cherry/30'
                      }`}></span>
                      <span className={`text-[9px] uppercase tracking-widest font-bold transition-colors ${
                        isActive ? 'text-cherry' : 'text-muted group-hover:text-cherry'
                      }`}>
                        {track.year}
                      </span>
                    </div>
                    <h3 className={`font-sans font-bold text-xl transition-colors duration-[400ms] ${
                      isActive ? 'text-cherry' : 'text-ink group-hover:text-cherry'
                    }`}>
                      {track.title}
                    </h3>
                    <p className="text-muted text-sm mt-1">{track.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          
          <div className="mt-12">
            <a className="inline-flex items-center gap-3 text-ink text-[11px] font-bold uppercase tracking-[0.2em] hover:text-cherry transition-colors nav-link" href="#">
              View Full Discography <span>→</span>
            </a>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-7 fi relative h-[500px] lg:h-[700px] w-full flex items-center justify-center">
          
          <div className="absolute -right-12 top-1/2 -translate-y-1/2 z-0 hidden lg:block opacity-40 mix-blend-multiply">
             <Vinyl size={400} className="w-[400px] h-[400px]" speed={12} />
          </div>

          <div className="relative w-full h-[100%] bg-ink/5 overflow-hidden z-10 border border-black/10 shadow-2xl">
            {tracks.map((track) => {
              const isActive = activeTrack === track.id;
              return (
                <img 
                  key={track.id}
                  src={track.img} 
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] select-none pointer-events-none custom-mockup-img ${
                    isActive 
                      ? 'opacity-100 visible scale-100' 
                      : 'opacity-0 invisible scale-[1.03]'
                  }`} 
                  alt={track.alt} 
                />
              );
            })}
            
            <div className="absolute inset-0 bg-ink/10 mix-blend-overlay pointer-events-none"></div>
          </div>
          
          <div className="absolute bottom-6 right-8 text-white text-[10px] uppercase font-bold tracking-[0.3em] z-20 mix-blend-difference hidden lg:block select-none pointer-events-none">
            Hover tracks to play
          </div>

        </div>

      </div>
    </section>
  )
}
