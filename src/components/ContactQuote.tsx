"use client";

import { Mail, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactQuote() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Reach out to us directly via WhatsApp or email. We&apos;ll get back to you quickly with a transparent, no-obligation estimate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          <motion.a 
            href="https://wa.me/15199927703" 
            target="_blank" 
            rel="noopener noreferrer" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-all group"
          >
            <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">WhatsApp</h4>
            <p className="text-xl font-bold text-brand-navy">519-992-7703</p>
          </motion.a>

          <motion.a 
            href="mailto:visionaryexpressmovers@gmail.com" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-all group"
          >
            <div className="w-16 h-16 bg-brand-yellow rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-brand-navy" />
            </div>
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Email</h4>
            <p className="text-base lg:text-lg font-bold text-brand-navy break-all sm:break-normal">visionaryexpress<br className="hidden lg:block"/>movers@gmail.com</p>
          </motion.a>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-all group"
          >
            <div className="w-16 h-16 bg-brand-yellow rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
              <MapPin className="w-8 h-8 text-brand-navy" />
            </div>
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Location</h4>
            <p className="text-xl font-bold text-brand-navy">Ontario, Canada</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
