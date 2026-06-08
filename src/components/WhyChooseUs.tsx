"use client";

import { CheckCircle2 } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "Fully licensed & insured",
  "Trained, professional movers",
  "Transparent, flat-rate pricing",
  "On-time guarantee",
  "Careful handling of all items",
  "Free estimates — no obligation",
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-brand-navy text-white overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold text-brand-yellow tracking-widest uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              We treat your <br className="hidden lg:block"/> belongings like our own.
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
              At Visionary Express Movers, we believe moving should be the exciting part — not the stressful part. Our team brings care, efficiency, and honesty to every single job.
            </p>
            <a href="https://wa.me/15199927703" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-lg font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-lg hover:-translate-y-1">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us Now
            </a>
          </motion.div>

          <div className="flex flex-col gap-4">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-brand-yellow flex-shrink-0" />
                <span className="text-base font-bold text-gray-100">{feature}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
