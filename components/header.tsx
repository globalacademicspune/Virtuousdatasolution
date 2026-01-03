"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, Recycle } from "lucide-react"

interface DropdownItem {
  name: string;
  isDirect: boolean;
  path?: string;
}

interface NavItem {
  name: string;
  href: string;
  isSpecial?: boolean;
  dropdown?: DropdownItem[];
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')

  const navItems: NavItem[] = [
    { 
      name: "BPO Services", 
      href: "/bpo-services",
      dropdown: [
        { name: "Litigation Back Office Services", isDirect: false },
        { name: "Contact Center Services", isDirect: false },
        { name: "Accounting & Bookkeeping", isDirect: false },
        { name: "MSP Support Services", isDirect: false },
        { name: "Records Management", isDirect: false },
        { name: "Recruitment Support Services", isDirect: false }
      ]
    },
    { 
      name: "Solutions", 
      href: "/solutions",
      dropdown: [
        { name: "Cloud Solutions", isDirect: true, path: "/cloud-solutions" },
        { name: "AI & ML", isDirect: true, path: "/ai-ml" },
        { name: "Security", isDirect: true, path: "/security" },
        { name: "Invoice Processing Automation", isDirect: false },
        { name: "Business Continuity", isDirect: false },
        { name: "Business Improvement", isDirect: false },
        { name: "Process Automation", isDirect: false },
        { name: "Business Analytics", isDirect: false }
      ]
    },
    { 
      name: "E-Waste", 
      href: "/e-waste", // Direct redirect, no dropdown
      isSpecial: true 
    },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-white/70 backdrop-blur-lg border-b border-white/20 py-1 shadow-lg shadow-black/5" 
        : "bg-transparent py-3"
    }`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center group relative">
          <div className="relative w-16 h-16 md:w-32 md:h-32 -my-8 transition-transform duration-300 group-hover:scale-105">
            <Image 
              src="/logo.png" 
              alt="Virtuous Data Solution"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => (
            <div key={item.name} className="relative group/menu py-2">
              <Link 
                href={item.href} 
                className={`flex items-center gap-1 text-[11px] uppercase tracking-widest font-bold transition-colors ${
                    item.isSpecial 
                      ? "text-green-600 hover:text-green-700 bg-green-50/80 px-4 py-1.5 rounded-full" 
                      : "text-slate-600 hover:text-primary"
                }`}
              >
                {item.isSpecial && <Recycle size={12} className="mr-1" />}
                {item.name}
                {/* Only show Chevron if a dropdown exists */}
                {item.dropdown && <ChevronDown size={12} className="group-hover/menu:rotate-180 transition-transform duration-300" />}
              </Link>

              {/* Only render the dropdown div if item.dropdown exists */}
              {item.dropdown && (
                <div className="absolute top-full -left-4 w-72 bg-white/90 backdrop-blur-xl border border-slate-100 shadow-xl rounded-2xl py-3 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all translate-y-2 group-hover/menu:translate-y-0">
                  <div className={`px-5 py-2 mb-1 text-[9px] font-black uppercase tracking-[0.2em] border-b border-slate-50 text-primary`}>
                    EXPLORE {item.name}
                  </div>
                  {item.dropdown.map((sub) => (
                    <Link 
                      key={sub.name} 
                      href={sub.isDirect ? (sub.path ?? "#") : `${item.href}/${slugify(sub.name)}`} 
                      className={`block px-5 py-2.5 text-[13px] hover:text-primary hover:bg-primary/5 transition-colors ${
                        sub.isDirect ? "font-bold text-slate-900" : "text-slate-500"
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center">
          <Link href="/contact" className="hidden lg:block">
            <button className="px-6 py-2 rounded-full bg-slate-900/90 text-white text-[11px] font-black uppercase tracking-widest hover:bg-primary transition-all shadow-md backdrop-blur-md">
              Contact
            </button>
          </Link>
          <button className="xl:hidden p-2 text-slate-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="xl:hidden fixed inset-0 top-[60px] bg-white/95 backdrop-blur-2xl z-50 p-6 overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.name} className="mb-6 border-b border-slate-100 pb-4">
              <Link href={item.href} className={`text-lg font-black uppercase tracking-tight ${item.isSpecial ? "text-green-600" : "text-slate-900"}`} onClick={() => { if(!item.dropdown) setIsOpen(false) }}>
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="mt-3 ml-4 space-y-3 border-l-2 border-slate-100 pl-4">
                  {item.dropdown.map((sub) => (
                    <Link key={sub.name} href={sub.isDirect ? (sub.path ?? "#") : `${item.href}/${slugify(sub.name)}`} className="block text-slate-500 text-sm" onClick={() => setIsOpen(false)}>
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  )
}