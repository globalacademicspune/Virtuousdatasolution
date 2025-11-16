"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg"></div>
              <span className="font-bold text-lg">VirtuousData</span>
            </div>
            <p className="text-primary-foreground/70">
              Advanced data solutions, AI/ML services, and digital transformation consulting for enterprise success.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <Link href="/cloud-solutions" className="hover:text-primary-foreground transition">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/ai-ml" className="hover:text-primary-foreground transition">
                  AI & ML
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-primary-foreground transition">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="hover:text-primary-foreground transition">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <Link href="/about" className="hover:text-primary-foreground transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary-foreground transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary-foreground transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-primary-foreground transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <Link href="/privacy-policy" className="hover:text-primary-foreground transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-primary-foreground transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-primary-foreground transition">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-primary-foreground/60">© 2025 VirtuousDataSolution. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition">
              Twitter
            </Link>
            <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition">
              LinkedIn
            </Link>
            <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
