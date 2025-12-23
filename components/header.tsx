"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-background/70 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent py-5"
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
              VDS
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">VirtuousDataSolution</span>
          </div>
        </Link>

        {/* Desktop Menu - Includes Careers and Blog */}
        <div className="hidden md:flex items-center gap-7">
          {[
            { name: "Cloud Solutions", href: "/cloud-solutions" },
            { name: "AI & ML", href: "/ai-ml" },
            { name: "Security", href: "/security" },
            { name: "Consulting", href: "/consulting" },
            { name: "About", href: "/about" },
            { name: "Careers", href: "/careers" },
            { name: "Blog", href: "/blog" },
          ].map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/#contact">
            <button className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-md hover:shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
              Contact Us
            </button>
          </Link>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-border md:hidden">
          <div className="flex flex-col gap-4 p-8">
            <Link href="/cloud-solutions" className="text-lg font-medium">Cloud Solutions</Link>
            <Link href="/careers" className="text-lg font-medium">Careers</Link>
            <Link href="/blog" className="text-lg font-medium">Blog</Link>
            <Link href="/#contact" className="w-full py-4 bg-primary text-center rounded-xl text-primary-foreground font-bold">Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  )
}