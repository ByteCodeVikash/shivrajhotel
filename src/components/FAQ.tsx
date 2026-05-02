"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "How do I book a specific room?", a: "You can use our unique floor-wise room booking feature. Simply explore a property, select your preferred floor, watch the video walkthrough, and choose the exact room you like." },
    { q: "Is there a cancellation policy?", a: "Yes, we offer a flexible cancellation policy for direct bookings. Cancellations made 48 hours prior to check-in are eligible for a full refund." },
    { q: "Do all rooms have lake views?", a: "Most of our premium rooms at Hotel Shivraj and Shivraj Lake View offer stunning water views. You can verify this in the room's image gallery and video walkthrough before booking." },
    { q: "Are the properties family-friendly?", a: "Absolutely. We offer spacious Family Suites with multiple bedrooms and living areas, perfect for a comfortable stay." },
  ];

  return (
    <section className="py-12 md:py-14 bg-secondary/50 border-t border-black/5">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Information</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl overflow-hidden shadow-sm border transition-colors duration-300 ${openIndex === index ? 'border-primary/50' : 'border-black/5'}`}
            >
              <button
                className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h4 className="text-lg md:text-xl font-serif font-bold text-accent pr-8">
                  {item.q}
                </h4>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-secondary text-primary'}`}>
                  <ChevronDown size={18} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-8 pb-8 text-accent/70 font-light leading-relaxed">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
