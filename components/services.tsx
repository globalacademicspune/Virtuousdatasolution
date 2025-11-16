"use client"

import { Cloud, Cpu, Shield, Database, BarChart3, Zap } from "lucide-react"

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Migrate seamlessly to the cloud with our enterprise-grade infrastructure and expert guidance.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Harness the power of AI to automate processes and gain valuable business insights.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Protect your business with advanced security protocols and regulatory compliance solutions.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Optimize your data infrastructure for performance, accessibility, and actionable intelligence.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Transform raw data into strategic insights with our advanced analytics platforms.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Modernize legacy systems and accelerate your digital transformation journey.",
    color: "from-yellow-500 to-orange-500",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Comprehensive IT Services
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Solutions tailored to your unique business needs and growth objectives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-background border border-border hover:border-accent/50 transition hover:shadow-lg hover:shadow-accent/10 cursor-pointer"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-6 group-hover:scale-110 transition`}
                >
                  <Icon className="w-full h-full text-white" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>

                <p className="text-foreground/60 leading-relaxed">{service.description}</p>

                <div className="mt-6 flex items-center gap-2 text-accent font-semibold group-hover:translate-x-2 transition">
                  Learn More →
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
