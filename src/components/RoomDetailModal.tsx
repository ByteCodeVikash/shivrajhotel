"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Maximize2, Users, Bed, Wind, Wifi, Tv, Coffee, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Room } from "@/data";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
  onBook: (room: Room) => void;
}

export default function RoomDetailModal({ room, onClose, onBook }: RoomDetailModalProps) {
  const [activeTab, setActiveTab] = useState<"gallery" | "video">("gallery");

  if (!room) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
      >
        <div className="absolute inset-0 bg-accent/95 backdrop-blur-md" onClick={onClose} />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-6xl h-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
          >
            <X size={24} />
          </button>

          {/* Left: Media Section */}
          <div className="w-full md:w-[60%] relative bg-black">
            <div className="absolute top-6 left-6 z-20 flex gap-2">
              <button
                onClick={() => setActiveTab("gallery")}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeTab === "gallery" ? "bg-primary text-white" : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                Photos
              </button>
              <button
                onClick={() => setActiveTab("video")}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${
                  activeTab === "video" ? "bg-primary text-white" : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <Play size={12} fill="currentColor" />
                Video Tour
              </button>
            </div>

            <div className="h-full">
              {activeTab === "gallery" ? (
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  className="h-full"
                >
                  {[room.thumbnail, ...room.images].map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className="relative w-full h-full">
                        <Image src={img} alt={room.name} fill unoptimized className="object-cover" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  <video
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                  >
                    <source src={room.video} type="video/mp4" />
                  </video>
                </div>
              )}
            </div>
          </div>

          {/* Right: Info Section */}
          <div className="w-full md:w-[40%] flex flex-col h-full overflow-y-auto p-8 md:p-12">
            <div className="mb-8">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] block mb-2">
                {room.type} • {room.size}
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-accent mb-4">
                {room.name}
              </h3>
              <p className="text-accent/60 font-light leading-relaxed mb-6">
                {room.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3 text-accent/80">
                <Users size={18} className="text-primary" />
                <span className="text-sm">{room.occupancy}</span>
              </div>
              <div className="flex items-center gap-3 text-accent/80">
                <Bed size={18} className="text-primary" />
                <span className="text-sm">{room.bedType}</span>
              </div>
              <div className="flex items-center gap-3 text-accent/80">
                <Maximize2 size={18} className="text-primary" />
                <span className="text-sm">{room.size}</span>
              </div>
              <div className="flex items-center gap-3 text-accent/80">
                <Wind size={18} className="text-primary" />
                <span className="text-sm">Air Conditioned</span>
              </div>
            </div>

            <div className="border-t border-black/5 pt-8 mb-8">
              <h4 className="text-sm uppercase tracking-widest font-bold text-accent mb-6">Amenities</h4>
              <div className="grid grid-cols-4 gap-6">
                <div className="flex flex-col items-center gap-2 group">
                   <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-accent/40 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                     <Wifi size={20} />
                   </div>
                   <span className="text-[10px] font-medium text-accent/40">WiFi</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                   <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-accent/40 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                     <Tv size={20} />
                   </div>
                   <span className="text-[10px] font-medium text-accent/40">Smart TV</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                   <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-accent/40 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                     <Coffee size={20} />
                   </div>
                   <span className="text-[10px] font-medium text-accent/40">Coffee</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                   <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-accent/40 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                     <Maximize2 size={20} />
                   </div>
                   <span className="text-[10px] font-medium text-accent/40">Balcony</span>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-8 border-t border-black/5 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-accent/40 font-bold block mb-1">Price per night</span>
                <span className="text-3xl font-bold text-primary">{room.price}</span>
              </div>
              <button 
                onClick={() => onBook(room)}
                className="luxury-button"
              >
                Book Now
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
