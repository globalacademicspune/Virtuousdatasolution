"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg">
              VDS
            </div>
            <span className="font-bold text-xl text-foreground">VirtuousDataSolution</span>
          </div>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/cloud-solutions" className="text-foreground/70 hover:text-foreground transition">
            Cloud Solutions
          </Link>
          <Link href="/ai-ml" className="text-foreground/70 hover:text-foreground transition">
            AI & ML
          </Link>
          <Link href="/security" className="text-foreground/70 hover:text-foreground transition">
            Security
          </Link>
          <Link href="/consulting" className="text-foreground/70 hover:text-foreground transition">
            Consulting
          </Link>
          <Link href="/about" className="text-foreground/70 hover:text-foreground transition">
            About
          </Link>
          <Link href="/careers" className="text-foreground/70 hover:text-foreground transition">
            Careers
          </Link>
          <Link href="/blog" className="text-foreground/70 hover:text-foreground transition">
            Blog
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/#contact">
            <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-lg transition">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-6">
              <Link href="/cloud-solutions" className="text-foreground/70">
                Cloud Solutions
              </Link>
              <Link href="/ai-ml" className="text-foreground/70">
                AI & ML
              </Link>
              <Link href="/security" className="text-foreground/70">
                Security
              </Link>
              <Link href="/consulting" className="text-foreground/70">
                Consulting
              </Link>
              <Link href="/about" className="text-foreground/70">
                About
              </Link>
              <Link href="/careers" className="text-foreground/70">
                Careers
              </Link>
              <Link href="/blog" className="text-foreground/70">
                Blog
              </Link>
              <Link href="/#contact">
                <button className="w-full px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
