"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Brain, Zap, TrendingUp, Users, Lightbulb, Target } from "lucide-react"

export default function AIML() {
  const solutions = [
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "Forecast market trends, customer behavior, and demand patterns with machine learning models.",
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights with advanced visualization and reporting.",
    },
    {
      icon: Users,
      title: "Customer Intelligence",
      description: "Understand your customers better with segmentation, recommendation engines, and behavior analysis.",
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Automate complex business processes using AI to increase efficiency and reduce costs.",
    },
    {
      icon: Lightbulb,
      title: "Natural Language Processing",
      description: "Extract insights from text data, sentiment analysis, and automated document classification.",
    },
    {
      icon: Target,
      title: "Computer Vision",
      description: "Image recognition, object detection, and visual data analysis for quality control and security.",
    },
  ]

  return (
    <main>
      <Header />

      <section className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">AI & Machine Learning</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Unlock the power of artificial intelligence and machine learning to drive innovation, efficiency, and
              growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <div
                  key={index}
                  className="group bg-card hover:bg-card/80 border border-border rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:border-accent"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition">
                    <Icon className="text-accent w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{solution.title}</h3>
                  <p className="text-foreground/70">{solution.description}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-primary/5 border border-border rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our AI Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-3 text-foreground">Custom Model Development</h3>
                <p className="text-foreground/70">
                  Build proprietary AI models tailored to your specific business needs and data characteristics.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-foreground">Responsible AI</h3>
                <p className="text-foreground/70">
                  Ethical AI implementation with bias detection, explainability, and fairness optimization.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-foreground">Model Optimization</h3>
                <p className="text-foreground/70">
                  Deploy models faster with edge computing and real-time inference capabilities.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-foreground">Training & Support</h3>
                <p className="text-foreground/70">
                  Comprehensive training programs to build internal AI expertise within your organization.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/#contact">
              <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:shadow-lg transition">
                Start Your AI Journey
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
