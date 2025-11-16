"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-foreground/60">Let's discuss how our solutions can drive your success</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-background rounded-2xl border border-border p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="px-6 py-3 rounded-lg bg-input border border-border focus:border-accent focus:outline-none transition text-foreground"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="px-6 py-3 rounded-lg bg-input border border-border focus:border-accent focus:outline-none transition text-foreground"
              required
            />
          </div>

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-6 py-3 rounded-lg bg-input border border-border focus:border-accent focus:outline-none transition text-foreground mb-6"
            required
          />

          <textarea
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-6 py-3 rounded-lg bg-input border border-border focus:border-accent focus:outline-none transition text-foreground mb-6"
            required
          />

          <button
            type="submit"
            className="w-full px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/40 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-foreground/60 mb-2">Email</p>
            <p className="text-xl font-semibold text-foreground">hello@VirtuousDataSolution.com</p>
          </div>
          <div>
            <p className="text-foreground/60 mb-2">Phone</p>
            <p className="text-xl font-semibold text-foreground">+91 98765 43210</p>
          </div>
          <div>
            <p className="text-foreground/60 mb-2">Location</p>
            <p className="text-xl font-semibold text-foreground">Pune</p>
          </div>
        </div>
      </div>
    </section>
  )
}
