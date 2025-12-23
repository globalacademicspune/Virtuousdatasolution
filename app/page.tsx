"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Stats from "@/components/stats"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <Hero />
      <div className="relative z-20 bg-background">
        <Services />
        <Stats />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}