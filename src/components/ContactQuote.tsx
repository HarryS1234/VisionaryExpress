"use client";

import { Phone, Mail, MapPin } from "lucide-react";
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Contact Information</h3>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              Fill out the form or give us a call. We'll get back to you quickly with a transparent, no-obligation estimate.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 bg-brand-yellow rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6 text-brand-navy" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Phone</h4>
                  <p className="text-lg font-bold text-brand-navy">519-992-7703</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 bg-brand-yellow rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6 text-brand-navy" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Email</h4>
                  <p className="text-lg font-bold text-brand-navy">visionaryexpressmovers@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 bg-brand-yellow rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <MapPin className="w-6 h-6 text-brand-navy" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-lg font-bold text-brand-navy">Ontario, Canada</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-50/80 border border-gray-100 rounded-2xl p-8 lg:p-10 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-brand-navy mb-8">Request a Free Quote</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow outline-none transition-all shadow-sm"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow outline-none transition-all shadow-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow outline-none transition-all shadow-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="date" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Preferred Move Date</label>
                <input
                  type="date"
                  id="date"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow outline-none transition-all shadow-sm text-gray-600"
                />
              </div>

              <div>
                <label htmlFor="details" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Tell us about your move *</label>
                <textarea
                  id="details"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow outline-none transition-all shadow-sm"
                  required
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-lg bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-bold text-lg transition-colors shadow-sm"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
