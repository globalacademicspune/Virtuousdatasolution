"use client"

import Link from "next/link"
import { Cloud, Cpu, Shield, Database, BarChart3, Zap, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Enterprise-grade infrastructure migration with expert guidance and zero downtime.",
    href: "/cloud-solutions",
    color: "text-blue-500",
    bg: "bg-blue-50/50"
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Harness predictive analytics and process automation to drive business intelligence.",
    href: "/ai-ml",
    color: "text-purple-500",
    bg: "bg-purple-50/50"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Advanced protection for modern digital threats and strict regulatory requirements.",
    href: "/security",
    color: "text-emerald-500",
    bg: "bg-emerald-50/50"
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Optimize data infrastructure for performance, accessibility, and actionable intelligence.",
    href: "/consulting",
    color: "text-orange-500",
    bg: "bg-orange-50/50"
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Transform raw data into strategic growth insights through advanced analytics platforms.",
    href: "/consulting",
    color: "text-indigo-500",
    bg: "bg-indigo-50/50"
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Modernize legacy systems and accelerate your journey toward digital excellence.",
    href: "/cloud-solutions",
    color: "text-yellow-600",
    bg: "bg-yellow-50/50"
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
            Comprehensive IT Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Precisely engineered solutions tailored to your unique business objectives.
          </p>
        </div>

        {/* 3-Column Grid ensures all 6 cards stay in perfect proportion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link 
                key={index} 
                href={service.href}
                className="group relative p-8 rounded-[2rem] border border-border/50 bg-card transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${service.bg}`} />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-background shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${service.color}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>

                <div className="relative z-10 mt-8 flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-300">
                  Learn More <ArrowRight size={16} />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}