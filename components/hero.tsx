"use client"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col">
            <div className="animate-slide-up [animation-delay:100ms] opacity-0">
              <div className="inline-block mb-6 px-4 py-1.5 bg-primary/5 rounded-full border border-primary/20">
                <span className="text-primary text-sm font-bold tracking-wider uppercase">Enterprise IT Solutions</span>
              </div>
            </div>

            <h1 className="animate-slide-up [animation-delay:300ms] opacity-0 text-5xl md:text-7xl font-extrabold text-foreground mb-6 leading-[1.1]">
              Digital Transformation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                for Tomorrow
              </span>
            </h1>

            <p className="animate-slide-up [animation-delay:500ms] opacity-0 text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Empower your organization with cutting-edge IT solutions. We help you scale faster and innovate smarter with AI-driven insights.
            </p>

            <div className="animate-slide-up [animation-delay:700ms] opacity-0 flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold shadow-lg hover:shadow-primary/40 transition-all hover:scale-105 active:scale-95">
                Start Your Journey
              </button>
              <button className="px-8 py-4 rounded-full border-2 border-primary/20 bg-transparent text-primary font-bold hover:bg-primary/5 transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* Right side: 6-Ring Ripple Wave & Smaller Bolt */}
          <div className="relative flex items-center justify-center">
            {/* The Ripple Wave (Staggered 0.5s apart for a tight sequence) */}
            <div className="absolute w-56 h-56 border border-primary/40 rounded-full animate-pulse-wave" />
            <div className="absolute w-56 h-56 border border-primary/30 rounded-full animate-pulse-wave [animation-delay:0.5s]" />
            <div className="absolute w-56 h-56 border border-accent/25 rounded-full animate-pulse-wave [animation-delay:1s]" />
            <div className="absolute w-56 h-56 border border-secondary/20 rounded-full animate-pulse-wave [animation-delay:1.5s]" />
            <div className="absolute w-56 h-56 border border-primary/15 rounded-full animate-pulse-wave [animation-delay:2s]" />
            <div className="absolute w-56 h-56 border border-primary/10 rounded-full animate-pulse-wave [animation-delay:2.5s]" />

            {/* Floating Container - Smaller size */}
            <div className="relative z-10 animate-float">
              <div className="relative w-40 h-40 bg-gradient-to-br from-primary via-primary to-accent rounded-[2.5rem] flex items-center justify-center shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden">
                {/* Shine Sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer -skew-x-12" />
                
                <svg className="w-20 h-20 text-white drop-shadow-xl" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              {/* Shadow underneath */}
              <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/10 blur-2xl rounded-full scale-x-125 animate-pulse" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}