"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "VirtuousDataSolution helped us streamline our entire workflow. Their expertise and support were outstanding.",
    author: "Rahul Mehta",
    title: "Director, Mehta Industries",
    rating: 5,
  },
  {
    quote:
      "Amazing service! The team delivered exactly what we needed and ahead of schedule.",
    author: "Priya Sharma",
    title: "Founder, Sharma Retail",
    rating: 5,
  },
  {
    quote:
      "Professional, reliable, and highly skilled. I strongly recommend them for any IT project.",
    author: "Arjun Patel",
    title: "Manager, Patel Technologies",
    rating: 5,
  },
  {
    quote: "Our digital transformation journey was seamless thanks to VirtuousDataSolution's expert guidance and 24/7 support.",
    author: "Mukhtar Khan",
    title: "CEO, Manufacturing Leader",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Trusted by Leading Organizations
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            See what our clients say about their experience with VirtuousDataSolutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition hover:shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-lg text-foreground/70 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent"></div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
