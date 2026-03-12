import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-ink py-16 px-6 md:px-16 border-t border-white/5 text-center md:text-left">
            <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">

                <div className="font-sans font-bold text-[22px] tracking-tight leading-none text-cream mb-2 md:mb-0">
                    05<span className="text-cherry">RPM</span>
                </div>

                <div className="text-cream/30 text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-widest text-center font-medium leading-loose mb-4 md:mb-0">
                    © 2024 05RPM Studio • Nagpur, India<br />
                    Built at our own frequency.
                </div>

                <ul className="flex justify-center md:justify-end gap-6 md:gap-10">
                    <li><a className="text-cream/40 hover:text-white text-[10px] uppercase font-bold tracking-widest transition-colors" href="#">Instagram</a></li>
                    <li><a className="text-cream/40 hover:text-white text-[10px] uppercase font-bold tracking-widest transition-colors" href="#">Behance</a></li>
                    <li><a className="text-cream/40 hover:text-white text-[10px] uppercase font-bold tracking-widest transition-colors" href="#">LinkedIn</a></li>
                </ul>

            </div>
        </footer>
    )
}
