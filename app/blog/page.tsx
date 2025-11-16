"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, ArrowRight } from "lucide-react"

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise Data Management",
      excerpt:
        "Exploring how artificial intelligence is revolutionizing how enterprises manage, analyze, and derive insights from their data.",
      author: "Priya Desai",
      date: "Dec 15, 2024",
      category: "AI/ML",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Cloud Migration: Best Practices and Common Pitfalls",
      excerpt:
        "A comprehensive guide to successfully migrating your infrastructure to the cloud while minimizing downtime and costs.",
      author: "Rajesh Kumar",
      date: "Dec 10, 2024",
      category: "Cloud",
      readTime: "12 min read",
    },
    {
      id: 3,
      title: "Data Security in 2025: What Every CTO Should Know",
      excerpt:
        "Understanding the latest security threats, compliance requirements, and best practices for protecting enterprise data.",
      author: "Arjun Sharma",
      date: "Dec 5, 2024",
      category: "Security",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "Real-Time Analytics: Turning Data into Instant Insights",
      excerpt:
        "Learn how to implement real-time analytics platforms that enable faster decision-making and competitive advantage.",
      author: "Neha Patel",
      date: "Nov 28, 2024",
      category: "Analytics",
      readTime: "9 min read",
    },
    {
      id: 5,
      title: "Building a Data-Driven Culture in Your Organization",
      excerpt:
        "Strategies for fostering a culture of data literacy, decision-making, and continuous improvement across your teams.",
      author: "Priya Desai",
      date: "Nov 20, 2024",
      category: "Strategy",
      readTime: "11 min read",
    },
    {
      id: 6,
      title: "Machine Learning Operations: MLOps Best Practices",
      excerpt: "Streamline your ML workflows with containerization, monitoring, and automated deployment pipelines.",
      author: "Rajesh Kumar",
      date: "Nov 15, 2024",
      category: "DevOps",
      readTime: "13 min read",
    },
  ]

  return (
    <main>
      <Header />

      <section className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Blog & Insights</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Stay updated with the latest trends, best practices, and insights from our team of experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary/40">{post.category}</div>
                </div>
                <div className="p-6">
                  <div className="flex gap-4 mb-4 text-sm text-foreground/70">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-foreground/70">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground line-clamp-2">{post.title}</h3>
                  <p className="text-foreground/70 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-foreground/60">
                      <p className="font-medium">{post.author}</p>
                      <div className="flex items-center gap-1 text-xs">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                    </div>
                    <button className="text-primary hover:text-primary/70 transition">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-foreground/70 mb-6">Subscribe to our newsletter for weekly insights and updates</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-card border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-lg transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
