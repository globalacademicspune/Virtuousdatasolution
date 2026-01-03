"use client"

import Link from "next/link"
import { 
  Recycle, 
  ShieldCheck, 
  Truck, 
  FileCheck, 
  BarChart, 
  Leaf, 
  Trash2, 
  ArrowRight,
  HardDrive
} from "lucide-react"

export default function EWastePage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-green-50/50 -z-10" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck size={14} /> MPCB Authorized & ISO Certified
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
              Responsible <span className="text-green-600">E-Waste</span> Management
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Partner with Virtuous Data Solution for certified electronic waste disposal. We provide end-to-end recycling, secure data destruction, and EPR compliance for corporate enterprises.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#pickup" className="px-8 py-4 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition shadow-lg shadow-green-200 flex items-center gap-2">
                Schedule a Pickup <Truck size={20} />
              </Link>
              <Link href="#services" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-full font-bold hover:bg-slate-50 transition">
                Our Process
              </Link>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-gradient-to-br from-green-200 to-emerald-100 rounded-[3rem] rotate-3 absolute inset-0 -z-10" />
             <div className="aspect-square bg-white rounded-[3rem] shadow-2xl flex items-center justify-center p-12">
                <Recycle size={200} className="text-green-500 animate-pulse" />
             </div>
          </div>
        </div>
      </section>

      {/* 3R Mantra Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our 3R Philosophy</h2>
            <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Reduce", desc: "Helping organizations minimize electronic footprint through better lifecycle management.", icon: Leaf },
              { title: "Reuse", desc: "Identifying salvageable components to prevent unnecessary raw material extraction.", icon: Recycle },
              { title: "Recycle", desc: "Scientific disposal of non-usable hardware in compliance with MPCB norms.", icon: Trash2 },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 hover:bg-green-50 transition duration-500">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <item.icon className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core E-Waste Services */}
      <section id="services" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Secure Data <br/><span className="text-green-400">Destruction Services</span></h2>
              <p className="text-slate-400 mb-8 text-lg">
                We understand that your hardware carries sensitive data. Our process includes physical destruction and degaussing, followed by a **Certificate of Destruction** for every batch.
              </p>
              <ul className="space-y-4">
                {[
                  "On-site & Off-site Data Wiping",
                  "Serial-numbered Destruction Reports",
                  "Physical Shredding of Hard Drives",
                  "Asset Recovery & Value Back"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <FileCheck size={14} className="text-green-400" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition cursor-default">
                  <HardDrive size={40} className="text-green-400 mb-4" />
                  <h4 className="font-bold">IT Asset Disposal</h4>
               </div>
               <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition cursor-default mt-8">
                  <BarChart size={40} className="text-green-400 mb-4" />
                  <h4 className="font-bold">EPR Support</h4>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Schedule Pickup */}
      <section id="pickup" className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-green-600 rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-green-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Greener Tomorrow?</h2>
          <p className="text-green-100 mb-10 text-lg">
            Connect with our logistics team for a doorstep pickup. We handle all documentation for MPCB and pollution control board compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-4 bg-white text-green-700 rounded-full font-black uppercase tracking-widest hover:scale-105 transition shadow-xl">
              Book Appointment
            </button>
            <button className="px-10 py-4 bg-green-700 text-white border border-green-500 rounded-full font-black uppercase tracking-widest hover:bg-green-800 transition">
              Call Support
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}