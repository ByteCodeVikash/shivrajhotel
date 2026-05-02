"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { properties } from "@/data";
import { Filter, Play, Star, ArrowRight, MapPin } from "lucide-react";

interface PropertiesProps {
  onSelectProperty: (id: string) => void;
}

const CATEGORIES = ["All", "Lake View", "Heritage", "Luxury"];

export default function Properties({ onSelectProperty }: PropertiesProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProperties = activeCategory === "All" 
    ? properties 
    : properties.filter(p => p.amenities.join(',').toLowerCase().includes(activeCategory.toLowerCase()) || p.description.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="properties" className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 bg-primary/10 rounded-full text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-4 inline-block"
          >
            Exclusive Collection
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-black text-accent mb-8 text-editorial"
          >
            Find Your <span className="text-primary italic font-serif">Perfect</span> Sanctuary
          </motion.h2>
          
          {/* Filters */}
          <div className="flex items-center gap-2 md:gap-4 overflow-x-auto pb-4 max-w-full scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border shrink-0 ${
                  activeCategory === cat 
                    ? "bg-accent text-white border-accent shadow-lg scale-105" 
                    : "bg-white text-accent/40 border-black/5 hover:border-primary/30 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Professional 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((property, index) => (
              <motion.div
                layout
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => onSelectProperty(property.id)}
              >
                {/* Image Container - Aspect 4:3 for better density */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={property.thumbnail}
                    alt={property.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Glass Badges */}
                  <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-white">
                      <Star size={10} className="text-primary fill-primary" />
                      <span className="text-[8px] font-bold tracking-widest uppercase">4.9 Rated</span>
                    </div>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-4 right-4 z-20 px-4 py-2 bg-accent/90 backdrop-blur-xl text-white rounded-2xl shadow-xl">
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-bold text-primary">₹{property.id === 'hotel-shivraj' ? '3,500' : '4,200'}</span>
                      <span className="text-[8px] uppercase tracking-tighter opacity-60">/ night</span>
                    </div>
                  </div>
                </div>

                <div className="px-2">
                  <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-[9px] mb-2">
                    <MapPin size={10} /> {property.location}
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-accent mb-2 group-hover:text-primary transition-colors duration-300">
                    {property.name}
                  </h3>
                  <p className="text-accent/40 text-xs leading-relaxed line-clamp-2">
                    {property.shortDescription}
                  </p>
                  
                  <div className="mt-4 flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-[9px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Discovery <ArrowRight size={14} className="text-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Support Section - More Compact */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-secondary rounded-[2rem] border border-black/5 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <h4 className="text-xl font-serif font-bold text-accent mb-1">Need a custom booking?</h4>
            <p className="text-accent/60 text-xs font-light">Our concierge team is available 24/7 for special arrangements.</p>
          </div>
          <button className="luxury-button-outline px-8 py-3 text-[9px]">Contact Concierge</button>
        </motion.div>
      </div>
    </section>
  );
}
