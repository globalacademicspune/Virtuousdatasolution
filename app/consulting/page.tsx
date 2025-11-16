"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Lightbulb, Users, TrendingUp, Briefcase, BarChart3, Rocket } from "lucide-react"

export default function Consulting() {
  const services = [
    {
      icon: Lightbulb,
      title: "Digital Transformation",
      description: "Strategic consulting to modernize your business processes and embrace digital innovation.",
    },
    {
      icon: Users,
      title: "Organizational Change",
      description:
        "Guide your team through digital transformation with training, change management, and adoption support.",
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Identify bottlenecks and optimize operations to increase efficiency and reduce costs.",
    },
    {
      icon: Briefcase,
      title: "Technology Strategy",
      description: "Develop comprehensive tech strategies aligned with your business goals and market trends.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decision Making",
      description: "Build a data culture in your organization with governance frameworks and analytics infrastructure.",
    },
    {
      icon: Rocket,
      title: "Innovation Acceleration",
      description: "Identify innovation opportunities and accelerate time-to-market for new solutions.",
    },
  ]

  return (
    <main>
      <Header />

      <section className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-background pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Consulting Services</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Strategic guidance and expert consultation to transform your business through technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group bg-card hover:bg-card/80 border border-border rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:border-secondary/50"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition">
                    <Icon className="text-secondary w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-foreground/70">{service.description}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-primary/5 border border-border rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Consulting Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-3 text-foreground">Industry Expertise</h3>
                <p className="text-foreground/70">
                  Deep knowledge across finance, healthcare, retail, manufacturing, and public sector industries.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-foreground">Proven Methodology</h3>
                <p className="text-foreground/70">
                  Structured approach with best practices, proven frameworks, and measurable outcomes.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-foreground">Team Collaboration</h3>
                <p className="text-foreground/70">
                  Work closely with your teams to build internal capabilities and knowledge transfer.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-foreground">ROI Focused</h3>
                <p className="text-foreground/70">
                  All initiatives are tied to measurable business outcomes and return on investment.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/#contact">
              <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:shadow-lg transition">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
