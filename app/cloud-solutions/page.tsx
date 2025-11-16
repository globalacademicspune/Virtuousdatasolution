"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Cloud, Database, Shield, Zap, BarChart3, Lock } from "lucide-react"

export default function CloudSolutions() {
  const features = [
    {
      icon: Cloud,
      title: "Multi-Cloud Strategy",
      description: "Seamlessly integrate AWS, Azure, and Google Cloud for optimal performance and cost efficiency.",
    },
    {
      icon: Database,
      title: "Data Warehousing",
      description:
        "Enterprise-grade data warehousing solutions with real-time analytics and historical data management.",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Bank-level security with encryption, compliance management, and continuous monitoring.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Lightning-fast data processing with auto-scaling capabilities and 99.99% uptime SLA.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Instant insights with streaming data pipelines and dashboard visualization.",
    },
    {
      icon: Lock,
      title: "Data Privacy",
      description: "GDPR, HIPAA, and SOC 2 compliant infrastructure protecting sensitive data.",
    },
  ]

  return (
    <main>
      <Header />

      <section className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Cloud Solutions</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Build, scale, and manage your data infrastructure on enterprise-grade cloud platforms with complete
              flexibility and security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group bg-card hover:bg-card/80 border border-border rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:border-accent"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition">
                    <Icon className="text-accent w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-primary/5 border border-border rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Why Choose Our Cloud Solutions?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-3 text-foreground">Cost Optimization</h3>
                <p className="text-foreground/70">
                  Reduce cloud spending by up to 40% through intelligent resource management and cost optimization
                  strategies.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-foreground">Migration Support</h3>
                <p className="text-foreground/70">
                  Zero-downtime migration from legacy systems with dedicated support team and comprehensive testing.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-foreground">24/7 Monitoring</h3>
                <p className="text-foreground/70">
                  Round-the-clock infrastructure monitoring with proactive issue detection and instant resolution.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-foreground">Disaster Recovery</h3>
                <p className="text-foreground/70">
                  Automated backup and recovery solutions ensuring business continuity in any scenario.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/#contact">
              <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:shadow-lg transition">
                Get Started with Cloud Solutions
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
