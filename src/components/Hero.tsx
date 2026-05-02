"use client";

import { motion } from "framer-motion";
import { ChevronDown, Play, Star } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2070",
    title: "Experience Premium Living",
    subtitle: "with Shivraj Stays"
  },
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070",
    title: "Luxury Meets Nature",
    subtitle: "at Naini Lake"
  },
  {
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2070",
    title: "Editorial Boutique Stays",
    subtitle: "Curated Excellence"
  }
];

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
      >
        {HERO_SLIDES.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full w-full">
            <div className="absolute inset-0 z-0">
              {index === 0 ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover scale-110"
                >
                  <source src="/videos/video1.mp4" type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  unoptimized
                  className="object-cover scale-110"
                />
              )}
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 h-full flex flex-col items-center justify-center container mx-auto px-6 md:px-12 text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="inline-block px-6 py-2 mb-8 border border-white/30 rounded-full text-[10px] uppercase font-bold tracking-[0.4em] backdrop-blur-md">
                  Uttarakhand&apos;s Premier Stay
                </span>
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif font-black mb-6 leading-tight tracking-tight text-editorial">
                  {slide.title} <br />
                  <span className="text-primary italic font-serif">{slide.subtitle}</span>
                </h1>
                <p className="max-w-2xl mx-auto text-sm md:text-xl text-white/80 font-light mb-8 md:mb-12 leading-relaxed">
                  Discover a world where luxury meets nature. From boutique hotels to panoramic resorts, we offer meticulously crafted stays for business and family.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
                  <button className="luxury-button w-full sm:min-w-[200px] md:min-w-[240px] text-sm md:text-lg py-3 shadow-2xl shadow-primary/20">
                    Explore Our Collection
                  </button>
                  <button className="luxury-button-outline w-full sm:min-w-[200px] md:min-w-[240px] text-sm md:text-lg py-3 flex items-center justify-center gap-3 backdrop-blur-sm !border-white !text-white hover:!bg-white hover:!text-accent">
                    <Play size={18} fill="currentColor" />
                    Watch Experience
                  </button>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Trust Badges - Static Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-16 left-0 right-0 z-20 hidden lg:flex items-center justify-center gap-16 text-[10px] uppercase tracking-[0.3em] font-bold text-white/60"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-[1px] bg-primary" />
          Verified Premium Stays
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-[1px] bg-primary" />
          Daily / Monthly Booking
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-[1px] bg-primary" />
          Fully Furnished
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-[1px] bg-primary" />
          Prime Locations
        </div>
      </motion.div>

      {/* Scroll Down */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50 cursor-pointer hidden md:block"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
}
