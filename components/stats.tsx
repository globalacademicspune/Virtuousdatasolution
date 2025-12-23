"use client"

export default function Stats() {
  const stats = [
    { value: "500+", label: "Enterprise Clients" },
    { value: "98%", label: "Satisfaction" },
    { value: "$2.5B", label: "Managed Assets" },
    { value: "15+", label: "Year Legacy" },
  ]

  return (
    <section className="py-24 px-4 bg-primary text-white overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[150px] -z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center md:items-start">
              <div className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">{stat.value}</div>
              <p className="text-primary-foreground/60 font-medium uppercase tracking-widest text-xs">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-[3rem] p-12 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
             <div className="w-16 h-1 w-primary bg-accent mb-6" />
             <h3 className="text-3xl font-bold leading-tight">Beyond Technology.</h3>
          </div>
          <p className="md:w-2/3 text-xl text-primary-foreground/80 leading-relaxed">
            We work as an extension of your organization, ensuring seamless integration 
            and measurable results. Our dedicated teams combine deep industry expertise with 
            customer-centric solutions to drive real value.
          </p>
        </div>
      </div>
    </section>
  )
}