"use client";

import { motion } from "framer-motion";
import { Shield, Play, Video, LayoutGrid, Clock, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: <Video size={32} />,
      title: "Video Verified Rooms",
      description: "Watch real-time video walkthroughs of every room before you book. No surprises, just transparency."
    },
    {
      icon: <LayoutGrid size={32} />,
      title: "Exact Room Selection",
      description: "Choose your specific floor and room number. Get the exact view and layout you see on screen."
    },
    {
      icon: <Shield size={32} />,
      title: "Premium Furnished",
      description: "Our interiors are designed by luxury specialists to ensure maximum comfort and aesthetic appeal."
    },
    {
      icon: <Clock size={32} />,
      title: "Flexible Stay Plans",
      description: "Whether it's a day, a week, or a month, our plans adapt to your travel needs seamlessly."
    },
    {
      icon: <Shield size={32} />,
      title: "Safe & Secure",
      description: "High-end security and privacy for our guests, ensuring a peaceful stay in prime locations."
    },
    {
      icon: <Headphones size={32} />,
      title: "24/7 Support",
      description: "A dedicated concierge team available around the clock to assist with your every need."
    }
  ];

  return (
    <section className="py-12 md:py-14 bg-accent text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block"
          >
            The Shivraj Advantage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            Why Book With Us?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">{benefit.title}</h3>
              <p className="text-white/60 font-light leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
