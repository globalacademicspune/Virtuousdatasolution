"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Shield, Lock, Eye, AlertTriangle, Key, Zap } from "lucide-react"

export default function Security() {
  const services = [
    {
      icon: Shield,
      title: "Infrastructure Security",
      description: "Hardened infrastructure with firewalls, DDoS protection, and intrusion detection systems.",
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description: "Military-grade encryption for data at rest and in transit with key management systems.",
    },
    {
      icon: Eye,
      title: "Threat Monitoring",
      description: "24/7 security monitoring with AI-powered anomaly detection and threat intelligence.",
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Rapid incident detection and response with forensics and remediation support.",
    },
    {
      icon: Key,
      title: "Access Control",
      description: "Multi-factor authentication and role-based access control with audit logging.",
    },
    {
      icon: Zap,
      title: "Compliance Management",
      description: "Full compliance with GDPR, HIPAA, PCI-DSS, SOC 2, and industry-specific regulations.",
    },
  ]

  return (
    <main>
      <Header />

      <section className="min-h-screen bg-gradient-to-br from-background via-destructive/5 to-background pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Security Solutions</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Protect your data and systems with enterprise-grade security solutions and threat prevention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group bg-card hover:bg-card/80 border border-border rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:border-destructive/50"
                >
                  <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition">
                    <Icon className="text-destructive w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-foreground/70">{service.description}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-primary/5 border border-border rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Security Commitment</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-3 text-foreground">Proactive Protection</h3>
                <p className="text-foreground/70">
                  Identify and eliminate vulnerabilities before they become threats with continuous security
                  assessments.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-foreground">Disaster Recovery</h3>
                <p className="text-foreground/70">
                  Comprehensive backup and recovery plans with regular testing to ensure business continuity.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-foreground">Expert Support</h3>
                <p className="text-foreground/70">
                  Certified security experts available 24/7 for incident response and security consulting.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-foreground">Compliance Assurance</h3>
                <p className="text-foreground/70">
                  Regular audits and compliance reports to meet regulatory requirements and industry standards.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/#contact">
              <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:shadow-lg transition">
                Secure Your Infrastructure
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
