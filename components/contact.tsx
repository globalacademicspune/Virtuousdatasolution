"use client"

import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-5 gap-16">
          
          <div className="md:col-span-2">
            <h2 className="text-5xl font-bold mb-8 tracking-tight">Let's build together.</h2>
            <p className="text-lg text-muted-foreground mb-12">Discuss your project with our senior consultants today.</p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Mail size={20}/></div>
                <div><p className="text-sm text-muted-foreground uppercase font-bold tracking-widest">Email</p><p className="font-bold">hello@vds.com</p></div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Phone size={20}/></div>
                <div><p className="text-sm text-muted-foreground uppercase font-bold tracking-widest">Phone</p><p className="font-bold">+91 9763616999</p></div>
              </div>
            </div>
          </div>

          <form className="md:col-span-3 space-y-6 bg-background p-10 rounded-[2.5rem] shadow-xl border border-border/50">
            <div className="grid grid-cols-2 gap-6">
              <input type="text" placeholder="Name" className="w-full bg-muted/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              <input type="email" placeholder="Work Email" className="w-full bg-muted/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
            </div>
            <input type="text" placeholder="Company" className="w-full bg-muted/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
            <textarea rows={4} placeholder="Your Project Details" className="w-full bg-muted/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
            <button className="w-full py-5 bg-primary text-primary-foreground font-bold rounded-2xl shadow-lg hover:shadow-primary/40 flex items-center justify-center gap-3 transition-all hover:scale-[1.02]">
              Start Consultation <Send size={18} />
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}