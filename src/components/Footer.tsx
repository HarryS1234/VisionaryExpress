"use client";

import { Mail, Truck, MessageCircle, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy py-16 lg:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Column 1: Logo & Info */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-yellow rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <Truck className="w-7 h-7 text-brand-navy" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-lg tracking-tight leading-tight">
                VISIONARY EXPRESS MOVERS
              </span>
              <span className="text-gray-400 text-xs font-bold tracking-widest uppercase mt-0.5">
                Ontario, Canada
              </span>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Premium moving solutions engineered for a stress-free transition. Your belongings, treated like our own.
          </p>
        </div>
        
        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#services" className="hover:text-brand-yellow transition-colors">Our Services</a></li>
            <li><a href="#why-us" className="hover:text-brand-yellow transition-colors">Why Choose Us</a></li>
            <li><a href="#testimonials" className="hover:text-brand-yellow transition-colors">Testimonials</a></li>
            <li><a href="#faq" className="hover:text-brand-yellow transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide">Contact Us</h4>
          <div className="flex flex-col gap-4 text-sm text-gray-400">
            <a href="https://wa.me/15199927703" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#25D366] transition-colors group">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </div>
              WhatsApp: 519-992-7703
            </a>
            <a href="mailto:visionaryexpressmovers@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors group">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              visionaryexpressmovers@gmail.com
            </a>
          </div>
        </div>

        {/* Column 4: Newsletter (Client Retention) */}
        <div>
          <h4 className="text-brand-yellow font-bold mb-6 tracking-wide flex items-center gap-2">
            Join Our VIP List
          </h4>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            Get exclusive discounts on your next move and packing tips delivered to your inbox.
          </p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white/5 border border-white/10 text-white text-sm rounded-l-lg px-4 py-3 w-full focus:outline-none focus:border-brand-yellow transition-colors"
              required
            />
            <button type="submit" className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy px-4 rounded-r-lg font-bold transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500">
        <div>
          &copy; {new Date().getFullYear()} Visionary Express Movers. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
