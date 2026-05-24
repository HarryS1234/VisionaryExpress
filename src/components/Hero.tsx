"use client";

import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-brand-navy text-white overflow-hidden pt-20 pb-32 lg:pt-28 lg:pb-48">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.jpg" 
          alt="Moving company truck" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center rounded px-3 py-1 text-xs font-bold text-brand-yellow uppercase tracking-wider bg-white/10 ring-1 ring-inset ring-brand-yellow/30 mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mr-2"></span>
            In-Province Moving Services
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Moving Made<br/>
            <span className="text-brand-yellow">Simple & Stress-Free.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Visionary Express Movers delivers professional, affordable moving services — on time, every time. Local, long distance, and same-day available.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="tel:5199927703" className="inline-flex items-center justify-center px-8 py-4 rounded text-lg font-bold text-brand-navy bg-brand-yellow hover:bg-brand-yellow-hover transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              Call 519-992-7703
            </a>
            <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 rounded text-lg font-bold text-white border border-white/30 hover:bg-white/10 transition-colors">
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 md:gap-8 text-sm md:text-base font-medium text-gray-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-yellow" />
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-yellow" />
              Free Estimates
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-yellow" />
              On-Time Guarantee
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
