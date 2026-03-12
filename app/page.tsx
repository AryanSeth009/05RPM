'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import WhyUs from '@/components/WhyUs'
import Tracklist from '@/components/Tracklist'
import Process from '@/components/Process'
import CaseStudies from '@/components/CaseStudies'
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
        <CaseStudies />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
