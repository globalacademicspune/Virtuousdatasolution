"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Briefcase, Users, TrendingUp, Globe } from "lucide-react"

export default function Careers() {
  const jobs = [
    {
      title: "Senior Data Engineer",
      department: "Engineering",
      location: "Bengaluru",
      type: "Full-time",
    },
    {
      title: "ML Engineer",
      department: "AI/ML",
      location: "Chennai",
      type: "Full-time",
    },
    {
      title: "Cloud Architect",
      department: "Infrastructure",
      location: "Pune",
      type: "Full-time",
    },
    {
      title: "Security Consultant",
      department: "Security",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Solutions Architect",
      department: "Sales Engineering",
      location: "Hyderabad",
      type: "Full-time",
    },
    {
      title: "Project Manager",
      department: "Delivery",
      location: "Mumbai",
      type: "Full-time",
    },
  ]

  const benefits = [
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive, inclusive environment.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Continuous learning opportunities, certifications, and career advancement paths.",
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "Work on international projects and explore assignments across our 25 offices.",
    },
    {
      icon: Briefcase,
      title: "Competitive Benefits",
      description: "Comprehensive health coverage, flexible work arrangements, and competitive compensation.",
    },
  ]

  return (
    <main>
      <Header />

      <section className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Join Our Team</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Build your career with a global leader in data solutions and digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="bg-card border border-border rounded-xl p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                  <p className="text-foreground/70">{benefit.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Open Positions</h2>
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary transition"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                        <span>{job.department}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-lg transition">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 border border-border rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground text-center">Why VirtuousDataSolution?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-3 text-foreground">Innovation at Scale</h3>
                <p className="text-foreground/70">
                  Work on cutting-edge projects using the latest technologies and methodologies.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-foreground">Global Impact</h3>
                <p className="text-foreground/70">
                  Make a difference for Fortune 500 companies and transformative businesses worldwide.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-foreground">Mentorship & Learning</h3>
                <p className="text-foreground/70">
                  Learn from industry experts with decades of experience in your field.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-foreground">Work-Life Balance</h3>
                <p className="text-foreground/70">
                  Flexible arrangements and remote work options to support your lifestyle.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/#contact">
              <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:shadow-lg transition">
                Don't See Your Role? Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
