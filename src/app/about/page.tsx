"use client";

import Image from "next/image";
import { CheckCircle, Award, Target, Eye, Building2, Users, Briefcase } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero: Modern Gradient with soft overlay */}
      <section className="relative bg-primary py-18">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
            About <span className="text-accent">Radiatech</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Pioneering excellence in industrial piping solutions since 2021 with a steadfast commitment to quality and innovation.
          </p>
        </div>
      </section>

      {/* Story Section: Cleaner Typography & Layout */}
      <section className="py-20 -mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl shadow-primary/10 border border-gray-100 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">Our Legacy</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4 mb-6">Building the Future of Piping Infrastructure</h2>
              <div className="prose prose-gray leading-relaxed text-gray-600">
                {companyInfo.about.description.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            <div className="relative group">
              <Image src="/images/aboutus.png" alt="Company Story" width={600} height={400} className="rounded-3xl w-full h-[450px] object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]" />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                <div className="text-5xl font-extrabold text-accent mb-1">5+</div>
                <div className="text-sm font-bold text-gray-900 uppercase">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision Cards: Soft Shadows & Refined Icons */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Our Mission", desc: companyInfo.about.mission, color: "text-primary" },
            { icon: Eye, title: "Our Vision", desc: companyInfo.about.vision, color: "text-accent" },
            { icon: Award, title: "Core Values", desc: "Quality, Integrity, Innovation, and Customer Satisfaction form our foundation.", color: "text-green-600" }
          ].map((item, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <item.icon size={40} className={`${item.color} mb-6`} />
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Factsheet: Modern Table Styling */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Company Profile</h2>
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
            {[
              { label: "Founded", value: companyInfo.established },
              { label: "CEO", value: companyInfo.ceo },
              { label: "Employees", value: companyInfo.employees },
              { label: "Address", value: companyInfo.addresses[0].address },
            ].map((row, i) => (
              <div key={i} className="flex border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                <div className="w-1/3 p-6 font-bold text-gray-400 uppercase text-xs tracking-wider">{row.label}</div>
                <div className="w-2/3 p-6 text-gray-900 font-medium">{row.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
