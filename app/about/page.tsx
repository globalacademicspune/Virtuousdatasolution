"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function About() {
  const team = [
    { name: "Arjun Sharma", role: "Founder & CEO", bio: "20+ years in enterprise data solutions" },
    { name: "Priya Desai", role: "CTO", bio: "AI/ML expert with 15+ years experience" },
    { name: "Rajesh Kumar", role: "VP Sales", bio: "Strategic business development leader" },
    { name: "Neha Patel", role: "Head of Delivery", bio: "Project excellence and client success" },
  ]

  return (
    <main>
      <Header />

      <section className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">About VirtuousDataSolution</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Leading provider of advanced data solutions, AI/ML services, and digital transformation consulting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-foreground/70 mb-4">
                Founded in 2018, VirtuousDataSolution emerged from the vision of transforming how enterprises leverage
                data for competitive advantage. What started as a boutique consulting firm has grown into a global
                powerhouse serving Fortune 500 companies and innovative startups alike.
              </p>
              <p className="text-foreground/70 mb-4">
                Our journey has been marked by a commitment to excellence, innovation, and customer success. We've
                helped over 500 organizations unlock the power of their data, migrate to the cloud, and implement
                cutting-edge AI solutions.
              </p>
              <p className="text-foreground/70">
                Today, we employ over 300 experts across 25 countries, delivering measurable impact and lasting value to
                our clients.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-border">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <p className="text-foreground/70 text-sm">Enterprise Clients</p>
                </div>
                <div className="bg-card rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">300+</div>
                  <p className="text-foreground/70 text-sm">Expert Team</p>
                </div>
                <div className="bg-card rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">25</div>
                  <p className="text-foreground/70 text-sm">Countries</p>
                </div>
                <div className="bg-card rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$2B+</div>
                  <p className="text-foreground/70 text-sm">Client Value</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border border-border rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Our Values</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2 text-foreground">Excellence</h3>
                <p className="text-foreground/70">We deliver exceptional quality in every project and interaction.</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2 text-foreground">Innovation</h3>
                <p className="text-foreground/70">We stay ahead of technology trends and pioneer new solutions.</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2 text-foreground">Integrity</h3>
                <p className="text-foreground/70">We act with transparency, honesty, and ethical principles.</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2 text-foreground">Partnership</h3>
                <p className="text-foreground/70">We believe in long-term relationships and mutual success.</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-foreground text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4"></div>
                  <h3 className="font-bold text-lg text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-2">{member.role}</p>
                  <p className="text-foreground/70 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/#contact">
              <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:shadow-lg transition">
                Let's Work Together
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
