'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import WhyUs from '@/components/WhyUs'
import Tracklist from '@/components/Tracklist'
import Archives from '@/components/Archives'
import Process from '@/components/Process'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  useScrollReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <WhyUs />
        <Tracklist />
        <Archives />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
