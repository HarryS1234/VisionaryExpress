"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How long does it take to move a 1, 2 or 3 bedroom apartment?",
    answer: "Typically, a 1-bedroom apartment takes 2-4 hours, a 2-bedroom takes 3-5 hours, and a 3-bedroom takes 5-7 hours. Times vary based on distance, stairs, and how prepared you are."
  },
  {
    question: "When does moving time start?",
    answer: "Moving time starts when our crew arrives at your starting location and begins working."
  },
  {
    question: "What is travel time?",
    answer: "Travel time covers the drive from our dispatch to your origin, and from your destination back to dispatch. It's a standard industry flat fee."
  },
  {
    question: "What time do your movers start?",
    answer: "Our morning jobs typically start between 8:00 AM and 9:00 AM. Afternoon jobs depend on the completion of morning jobs, usually starting between 1:00 PM and 3:00 PM."
  },
  {
    question: "Do I need to be present during the pickup?",
    answer: "Yes, you or an authorized representative over 18 must be present to sign the contract and perform a walk-through."
  },
  {
    question: "Do you sell packing materials?",
    answer: "Yes! We offer a full range of packing supplies including boxes, tape, bubble wrap, and shrink wrap. Just let us know what you need in advance."
  },
  {
    question: "How do you protect furniture?",
    answer: "We use thick, professional-grade moving blankets and shrink wrap on all large furniture pieces to prevent scratches and damage during transport."
  },
  {
    question: "Are you insured?",
    answer: "Yes, Visionary Express Movers is fully licensed and insured, so your belongings are covered every step of the way."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">Frequently Asked Questions</h2>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`border rounded-lg overflow-hidden transition-colors ${isOpen ? 'border-brand-yellow ring-1 ring-brand-yellow/50' : 'border-gray-200'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-5 md:p-6 text-left bg-white hover:bg-gray-50 focus:outline-none transition-colors"
                >
                  <span className="text-base md:text-lg font-bold text-brand-navy">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
                  )}
                </button>
                {isOpen && (
                  <div className="p-5 md:p-6 pt-0 bg-white border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
