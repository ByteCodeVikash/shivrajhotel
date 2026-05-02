"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, Maximize2, Users, Bed, Wind, Wifi, Tv, Coffee, ChevronLeft, ChevronRight, Video } from "lucide-react";
import Image from "next/image";
import { Room } from "@/data";
import { useState, useRef, useEffect } from "react";
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
  const [activeTab, setActiveTab] = useState<"video" | "gallery">("video");
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (activeTab === "video" && videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, [activeTab, room]);

  if (!room) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-10"
      >
        <div className="absolute inset-0 bg-accent/98 backdrop-blur-xl" onClick={onClose} />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 30 }}
          className="relative w-full max-w-7xl h-full max-h-[95vh] bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 z-[160] w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all border border-white/20"
          >
            <X size={24} />
          </button>

          {/* Left: Media Master Section */}
          <div className="w-full lg:w-[65%] relative bg-black flex flex-col">
            <div className="absolute top-8 left-8 z-[160] flex gap-3">
              <button
                onClick={() => setActiveTab("video")}
                className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-2 border ${
                  activeTab === "video" ? "bg-primary text-white border-primary" : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                }`}
              >
                <Video size={12} fill={activeTab === "video" ? "currentColor" : "none"} />
                Video Walkthrough
              </button>
              <button
                onClick={() => setActiveTab("gallery")}
                className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${
                  activeTab === "gallery" ? "bg-primary text-white border-primary" : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                }`}
              >
                Photo Gallery
              </button>
            </div>

            <div className="flex-1 relative">
              {activeTab === "video" ? (
                <div className="relative w-full h-full group" onClick={togglePlay}>
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    key={room.video}
                  >
                    <source src={room.video} type="video/mp4" />
                  </video>
                  
                  {/* Play/Pause Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className={`w-24 h-24 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-2xl transition-all duration-500 ${isPlaying ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}>
                      <Play size={36} fill="currentColor" className="ml-1.5" />
                    </div>
                  </div>

                  {/* Editorial Overlay */}
                  <div className="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl max-w-xs">
                     <span className="text-primary font-black text-[8px] uppercase tracking-widest mb-2 block">Room Perspective</span>
                     <h4 className="text-white font-serif font-bold text-lg leading-tight">Every detail captured in high-definition video.</h4>
                  </div>
                </div>
              ) : (
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
              )}
            </div>
          </div>

          {/* Right: Curated Details */}
          <div className="w-full lg:w-[35%] flex flex-col h-full overflow-y-auto bg-white p-10 md:p-14">
            <div className="mb-12">
               <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-secondary text-accent text-[8px] font-black uppercase tracking-widest rounded-full">{room.type}</span>
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  <span className="text-accent/40 text-[8px] font-bold uppercase tracking-widest">{room.size}</span>
               </div>
              <h3 className="text-4xl md:text-5xl font-serif font-black text-accent mb-6 leading-tight">
                {room.name}
              </h3>
              <p className="text-accent/60 font-light leading-relaxed text-lg">
                {room.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col gap-2">
                <span className="text-[8px] font-black uppercase tracking-widest text-accent/30">Occupancy</span>
                <div className="flex items-center gap-2 text-accent">
                   <Users size={16} className="text-primary" />
                   <span className="text-sm font-bold">{room.occupancy}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[8px] font-black uppercase tracking-widest text-accent/30">Configuration</span>
                <div className="flex items-center gap-2 text-accent">
                   <Bed size={16} className="text-primary" />
                   <span className="text-sm font-bold">{room.bedType}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-black/5 pt-10 mb-12">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-accent mb-8">Premium Amenities</h4>
              <div className="grid grid-cols-4 gap-6">
                {[
                  { icon: <Wifi size={20} />, label: "WiFi" },
                  { icon: <Tv size={20} />, label: "Smart TV" },
                  { icon: <Coffee size={20} />, label: "Coffee" },
                  { icon: <Wind size={20} />, label: "AC" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 group">
                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-accent/40 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                      {item.icon}
                    </div>
                    <span className="text-[9px] font-bold text-accent/40">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-10 border-t border-black/5 flex items-center justify-between">
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] text-accent/30 font-black block mb-2">Exclusive Offer</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-primary">{room.price}</span>
                  <span className="text-[10px] text-accent/20 uppercase font-bold tracking-tighter">/ NIGHT</span>
                </div>
              </div>
              <button 
                onClick={() => onBook(room)}
                className="luxury-button !py-5 !px-10 shadow-2xl shadow-primary/20"
              >
                Book This Room
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
