"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function ExperiencePage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551882547-ff43c63faf7c?auto=format&fit=crop&q=80&w=2070')] opacity-20 bg-fixed bg-center bg-cover" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Visual Journey</span>
            <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight">
              Immersive <br/> <span className="text-primary italic">Luxury</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl">
              Step into a world of elegance and tranquility. Browse through our visual collection of premium properties and breathtaking experiences.
            </p>
          </motion.div>
        </div>
      </section>

      <Gallery />
      <Footer />
    </main>
  );
}
