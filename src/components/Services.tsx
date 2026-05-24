"use client";

import { Truck, Package, Map, Clock } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Local Moving",
    description: "Reliable, on-time moves within your city or region. No hidden fees.",
    icon: Truck,
  },
  {
    title: "Packing & Unpacking",
    description: "Full packing service with quality materials to keep your items safe.",
    icon: Package,
  },
  {
    title: "In-Province Moving",
    description: "Seamless moves anywhere within the province — big or small.",
    icon: Map,
  },
  {
    title: "Same-Day Moving",
    description: "Need to move fast? We offer flexible same-day scheduling.",
    icon: Clock,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-brand-navy border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-white/5">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 lg:p-10 border-r border-b border-white/5 hover:bg-white/5 transition-colors group cursor-default"
            >
              <div className="w-12 h-12 bg-brand-yellow rounded mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-brand-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
