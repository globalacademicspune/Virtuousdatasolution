"use client"

export default function Stats() {
  const stats = [
    { value: "500+", label: "Enterprise Clients Worldwide" },
    { value: "98%", label: "Client Satisfaction Rate" },
    { value: "$2.5B+", label: "Total IT Investment Managed" },
    { value: "15+", label: "Years of Industry Excellence" },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-secondary to-accent">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary-foreground mb-3">{stat.value}</div>
              <p className="text-primary-foreground/80 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-background/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary-foreground/20">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 text-balance">
            Why Choose VirtuousDataSolution?
          </h3>
          <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-3xl">
            We combine deep industry expertise, cutting-edge technology, and customer-centric solutions to drive real
            business value. Our dedicated teams work as an extension of your organization, ensuring seamless integration
            and measurable results.
          </p>
        </div>
      </div>
    </section>
  )
}
