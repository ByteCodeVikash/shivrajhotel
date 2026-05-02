"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Magazine Image Spread */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl z-10 border-[12px] border-white">
              <Image
                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=2070"
                alt="Luxury Stay"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            
            {/* Overlapping Element */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -bottom-12 -right-12 w-72 h-72 rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-white hidden md:block z-20"
            >
               <Image
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=2070"
                alt="Luxury Amenity"
                fill
                unoptimized
                className="object-cover"
              />
            </motion.div>
            
            {/* Decorative Gold Frame */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-primary/40 rounded-tl-[3rem] -z-10" />
          </motion.div>

          {/* Editorial Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-10"
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-primary" />
              <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px]">
                The Shivraj Heritage
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif font-black mb-10 leading-[1.1] text-accent text-editorial">
              Where Elegance <br />
              <span className="text-primary italic font-serif">Meets the Horizon.</span>
            </h2>
            
            <div className="space-y-8 mb-12">
              <p className="text-base text-accent/70 font-light leading-relaxed">
                Nestled in the mesmerizing landscapes of Nainital and Lansdowne, Shivraj Group Of Hotels represents the pinnacle of boutique hospitality. We believe that true luxury lies in the details.
              </p>
              <p className="text-base text-accent/70 font-light leading-relaxed">
                Our properties are more than just stays; they are sanctuaries meticulously crafted to blend modern comfort with the untamed beauty of the mountains.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-12 mb-12 border-y border-black/5 py-8">
              <div>
                <h4 className="text-3xl font-serif font-black text-accent mb-1 tracking-tighter">15<span className="text-primary">+</span></h4>
                <p className="text-[9px] uppercase tracking-[0.2em] text-accent/40 font-bold">Iconic Properties</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif font-black text-accent mb-1 tracking-tighter">25<span className="text-primary">Y</span></h4>
                <p className="text-[9px] uppercase tracking-[0.2em] text-accent/40 font-bold">Years of Trust</p>
              </div>
            </div>

            <button className="luxury-button rounded-full px-12">Experience Our Story</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
