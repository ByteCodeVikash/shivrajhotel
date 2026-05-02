"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";

export default function Gallery() {
  const mediaItems = [
    {
      type: "video",
      url: "/videos/video2.mp4",
      span: "col-span-1 md:col-span-2 row-span-2"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070",
      span: "col-span-1 row-span-1"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=2070",
      span: "col-span-1 row-span-1"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=2070",
      span: "col-span-1 md:col-span-2 row-span-1"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=2070",
      span: "col-span-1 row-span-1"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1551882547-ff43c63faf7c?auto=format&fit=crop&q=80&w=2070",
      span: "col-span-1 row-span-2"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=2070",
      span: "col-span-1 md:col-span-2 row-span-1"
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center mb-16">
        <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Visual Journey</span>
        <h2 className="text-4xl md:text-6xl font-serif font-black text-accent mb-6">Immersive Luxury</h2>
        <p className="max-w-2xl mx-auto text-accent/60 font-light">
          Experience the elegance, comfort, and breathtaking views of Shivraj Stays before you even arrive.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${item.span}`}
            >
              {item.type === "video" ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
                  <source src={item.url} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={item.url}
                  alt="Gallery Media"
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/50 flex items-center justify-center text-white">
                    <Play size={16} fill="currentColor" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
