"use client";

import { MessageCircle, ArrowRight, CheckCircle2, Gift } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-brand-navy text-white overflow-hidden pt-20 pb-32 lg:pt-28 lg:pb-48">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.jpg" 
          alt="Moving company truck" 
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-brand-navy-dark/90 mix-blend-multiply" />
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
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="https://wa.me/15199927703" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-lg font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              <MessageCircle className="w-6 h-6 mr-3" />
              Chat on WhatsApp
            </a>
            <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-lg font-bold text-white glass hover:bg-white/10 transition-all shadow-lg hover:-translate-y-1">
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3 mb-10 w-fit backdrop-blur-sm"
          >
            <Gift className="w-5 h-5 text-brand-yellow animate-bounce" />
            <span className="text-sm md:text-base font-semibold text-white">
              Returning Customer? <span className="text-brand-yellow">Ask about our loyalty discount!</span>
            </span>
          </motion.div>
          
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
