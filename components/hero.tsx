"use client"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Animated background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-slide-in">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
              <span className="text-accent text-sm font-semibold">Enterprise IT Solutions</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
              Digital Transformation for Tomorrow's Enterprise
            </h1>

            <p className="text-xl text-foreground/70 mb-8 leading-relaxed max-w-xl">
              Empower your organization with cutting-edge IT solutions. From cloud migration to AI-driven insights, we
              help you scale faster and innovate smarter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-xl hover:shadow-primary/40 transition transform hover:-translate-y-1">
                Start Your Journey
              </button>
              <button className="px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition">
                Learn More
              </button>
            </div>

            {/* Stats preview */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-foreground/60 text-sm">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">98%</div>
                <div className="text-foreground/60 text-sm">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">24/7</div>
                <div className="text-foreground/60 text-sm">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right - visual element */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-96 h-96">
              {/* Animated circles */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-pulse"></div>
              <div
                className="absolute inset-8 border-2 border-accent/20 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute inset-16 border-2 border-secondary/20 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center shadow-2xl">
                  <svg className="w-16 h-16 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
