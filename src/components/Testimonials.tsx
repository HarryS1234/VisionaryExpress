"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const baseTestimonials = [
  {
    name: "Priya S.",
    text: "Visionary Express made our move completely stress-free. The crew was professional, fast, and careful with everything. Highly recommend!",
  },
  {
    name: "Marcus R.",
    text: "Best moving company I've used. Fair pricing, showed up on time, and nothing was damaged. Will definitely use again.",
  },
  {
    name: "Rahul M.",
    text: "Called them last minute and they came through. Friendly team and great service. Very impressed!",
  },
  {
    name: "David L.",
    text: "The movers were incredibly efficient and polite. They handled my antique furniture with the utmost care. 5 stars!",
  },
  {
    name: "Aman K.",
    text: "Moved from a 3rd-floor walkup and they didn't complain once. Fast, friendly, and fairly priced. What more could you ask for?",
  },
  {
    name: "Sarah W.",
    text: "From getting a quote to the final box being unloaded, the entire process was seamless. Truly a visionary team.",
  }
];

// Duplicate for infinite scroll effect
const testimonials = [...baseTestimonials, ...baseTestimonials];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 border-t border-gray-200 overflow-hidden">
      <div className="max-w-[100vw] mx-auto">
        <div className="text-center mb-16 px-4">
          <span className="text-sm font-bold text-brand-yellow tracking-widest uppercase mb-2 block">Customer Reviews</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">What Our Customers Say</h2>
        </div>
        
        <div className="relative w-full flex overflow-hidden group">
          <motion.div 
            className="flex gap-8 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col justify-between w-[350px] md:w-[400px] flex-shrink-0"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>
                <p className="font-bold text-gray-900 text-lg">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
