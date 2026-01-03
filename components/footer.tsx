"use client"

import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            {/* Logo Section with Enlarged Image in Solid White Container */}
            <div className="flex items-center gap-3 mb-6">
              {/* - Increased size to w-14 h-14
                  - Reduced padding to p-0.5 so the image is larger
              */}
              <div className="relative w-14 h-14 bg-white rounded-lg flex items-center justify-center p-0.5 shadow-md transition-transform duration-300 hover:scale-110">
                <div className="relative w-full h-full">
                  <Image 
                    src="/logo.png" 
                    alt="VDS Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <span className="font-bold text-xl tracking-tight">VirtuousDataSolution</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Advanced data solutions, AI/ML services, and digital transformation consulting for enterprise success.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><Link href="/cloud-solutions" className="hover:text-primary-foreground transition">Cloud Solutions</Link></li>
              <li><Link href="/ai-ml" className="hover:text-primary-foreground transition">AI & ML</Link></li>
              <li><Link href="/security" className="hover:text-primary-foreground transition">Security</Link></li>
              <li><Link href="/consulting" className="hover:text-primary-foreground transition">Consulting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><Link href="/about" className="hover:text-primary-foreground transition">About</Link></li>
              <li><Link href="/careers" className="hover:text-primary-foreground transition">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-primary-foreground transition">Blog</Link></li>
              <li><Link href="/#contact" className="hover:text-primary-foreground transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><Link href="/privacy-policy" className="hover:text-primary-foreground transition">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-primary-foreground transition">Terms of Service</Link></li>
              <li><Link href="/compliance" className="hover:text-primary-foreground transition">Compliance</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 VirtuousDataSolution. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition text-sm">Twitter</Link>
            <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition text-sm">LinkedIn</Link>
            <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition text-sm">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}