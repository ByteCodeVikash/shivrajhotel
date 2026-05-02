"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      text: "The lake view from our room at Hotel Shivraj was absolutely breathtaking. The service was impeccable and the food was delicious. Truly a premium experience.",
      name: "Rishabh Malhotra",
      type: "Business Traveler",
      initial: "RM"
    },
    {
      text: "We booked the Executive Suite using their exact room selection feature. What we saw in the video tour was exactly what we got. Brilliant concept and highly trustworthy.",
      name: "Sneha Sharma",
      type: "Family Vacation",
      initial: "SS"
    },
    {
      text: "The colonial charm of Swiss Hotel combined with modern luxury made our stay unforgettable. The staff went above and beyond.",
      name: "Vikram Singh",
      type: "Couples Retreat",
      initial: "VS"
    }
  ];

  return (
    <section className="py-12 md:py-14 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center mb-20">
        <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Guest Experiences</span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-accent">What Our Guests Say</h2>
      </div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-10 rounded-3xl bg-secondary border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 relative group"
            >
              <div className="absolute top-0 right-10 -translate-y-1/2 text-primary opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.411 14.283H12V3H21V11.458L17.701 21H14.017ZM3.017 21L5.411 14.283H1V3H10V11.458L6.701 21H3.017Z" />
                </svg>
              </div>
              
              <div className="flex gap-1 text-primary mb-6">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="text-accent/70 font-light italic mb-10 leading-relaxed text-sm md:text-base">
                &quot;{review.text}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-serif">
                  {review.initial}
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-accent">{review.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-accent/40">{review.type}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
