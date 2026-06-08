"use client";

import Link from "next/link";
import { MessageCircle, Truck } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["services", "why-us", "testimonials", "faq", "contact"];
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = section;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center">
              <Truck className="w-6 h-6 text-brand-navy" />
            </div>
            <Link href="/" className="flex flex-col justify-center">
              <span className="text-xl font-extrabold tracking-tight text-brand-navy leading-none">
                VISIONARY EXPRESS
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mt-1 leading-none">
                Movers
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { id: "services", label: "Services" },
              { id: "why-us", label: "Why Us" },
              { id: "testimonials", label: "Testimonials" },
              { id: "faq", label: "Faq" },
              { id: "contact", label: "Contact" },
            ].map((link) => (
              <Link 
                key={link.id} 
                href={`#${link.id}`} 
                className={`font-black text-[15px] transition-colors px-3 py-1.5 ${active === link.id ? "text-brand-navy border-2 border-brand-yellow rounded-md" : "text-gray-900 hover:text-brand-yellow"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a 
              href="https://wa.me/15199927703" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-md hover:shadow-lg group"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              WhatsApp Us
            </a>
          </div>
          
        </div>
      </div>
    </header>
  );
}
