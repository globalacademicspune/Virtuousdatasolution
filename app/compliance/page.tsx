"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { CheckCircle, Shield, Zap, Award } from "lucide-react"

export default function Compliance() {
  const certifications = [
    {
      name: "SOC 2 Type II",
      description: "Annual audit confirming security, availability, and confidentiality controls",
      icon: CheckCircle,
    },
    {
      name: "ISO 27001",
      description: "Information security management system certification",
      icon: Shield,
    },
    {
      name: "HIPAA Compliant",
      description: "Protected health information handling and security requirements",
      icon: Zap,
    },
    {
      name: "GDPR Certified",
      description: "Data protection and privacy regulation compliance",
      icon: Award,
    },
  ]

  const standards = [
    { name: "PCI-DSS", description: "Payment Card Industry Data Security Standard" },
    { name: "NIST Cybersecurity Framework", description: "National standards for cybersecurity" },
    { name: "ISO 9001", description: "Quality management systems certification" },
    { name: "FedRAMP", description: "Federal Risk and Authorization Management Program" },
    { name: "SOX Compliant", description: "Sarbanes-Oxley Act compliance" },
    { name: "Data Residency", description: "Regional data storage and sovereignty" },
  ]

  return (
    <main>
      <Header />

      <section className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Compliance & Certifications</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              VirtuousDataSolution maintains the highest standards of security, privacy, and operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <div key={index} className="bg-card border border-border rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <Icon className="text-primary w-8 h-8 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{cert.name}</h3>
                      <p className="text-foreground/70">{cert.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="bg-primary/5 border border-border rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Industry Standards & Compliance</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {standards.map((standard, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border border-border/50">
                  <h3 className="font-bold text-lg text-foreground mb-2">{standard.name}</h3>
                  <p className="text-foreground/70 text-sm">{standard.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Security Measures</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-foreground/70">End-to-end encryption for all data transmission</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-foreground/70">Multi-factor authentication and role-based access control</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-foreground/70">Regular security audits and penetration testing</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-foreground/70">24/7 threat monitoring and incident response</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Privacy Practices</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-foreground/70">Strict data access controls and audit logs</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-foreground/70">No third-party data sharing without consent</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-foreground/70">Regular privacy impact assessments</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-foreground/70">Customer data deletion on request</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
