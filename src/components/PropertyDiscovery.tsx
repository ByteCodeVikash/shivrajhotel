"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Property, Room, Floor } from "@/data";
import { X, MapPin, Check, Play, Pause, Maximize2, Users, Star, Navigation2, ArrowRight, Video } from "lucide-react";
import RoomDetailModal from "./RoomDetailModal";

interface PropertyDiscoveryProps {
  property: Property;
  onClose: () => void;
  onBookRoom: (property: Property, room: Room) => void;
}

export default function PropertyDiscovery({ property, onClose, onBookRoom }: PropertyDiscoveryProps) {
  const [selectedFloor, setSelectedFloor] = useState<Floor>(property.floors[0]);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-white flex flex-col"
    >
      {/* Fixed Header */}
      <div className="flex-none bg-white/95 backdrop-blur-2xl border-b border-black/5 py-4 px-8 md:px-12 flex items-center justify-between z-[120]">
        <div className="flex items-center gap-6">
          <div className="flex flex-col">
            <span className="text-sm font-serif font-black tracking-tight text-accent uppercase leading-none">{property.name}</span>
            <span className="text-[8px] uppercase tracking-[0.4em] font-bold text-primary mt-1">Boutique Discovery</span>
          </div>
        </div>
        <div className="flex items-center gap-8">
           <nav className="hidden md:flex items-center gap-8">
             {["Overview", "Sanctuary", "Location"].map((item) => (
               <a key={item} href={`#${item.toLowerCase()}`} className="text-[9px] uppercase font-bold tracking-[0.2em] text-accent/40 hover:text-primary transition-colors">{item}</a>
             ))}
           </nav>
           <button onClick={onClose} className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center hover:bg-primary transition-colors">
             <X size={14} />
           </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div ref={containerRef} className="flex-1 overflow-y-auto scroll-smooth">
        
        {/* Boutique Hero - Framed Layout */}
        <section className="relative pt-12 pb-12 px-6 md:px-12 bg-white">
          <div className="container mx-auto">
            <div className="relative h-[60vh] md:h-[70vh] w-full rounded-[3rem] overflow-hidden shadow-2xl bg-black">
              <motion.div style={{ scale: heroScale }} className="absolute inset-0" onClick={togglePlay}>
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  key={property.mainVideo}
                  className="h-full w-full object-cover"
                >
                  <source src={property.mainVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40" />
              </motion.div>
              
              {/* Cinematic Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 pointer-events-none">
                 <motion.div
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.4 }}
                   className="max-w-3xl"
                 >
                   <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] uppercase font-bold tracking-[0.5em] mb-8">
                     Property Walkthrough
                   </span>
                   <h1 className="text-5xl md:text-8xl font-serif font-black text-white mb-10 leading-[0.9] text-editorial">
                     Explore <br/> the <span className="text-primary italic font-serif">Vista</span>
                   </h1>
                   <div className="flex items-center justify-center gap-6">
                      <div className="w-16 h-[1px] bg-white/30" />
                      <div className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center text-white">
                        {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
                      </div>
                      <div className="w-16 h-[1px] bg-white/30" />
                   </div>
                 </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Magazine Overview Spread */}
        <section id="overview" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl z-10">
                   <Image src={property.floors[0].rooms[0].thumbnail} alt="Overview" fill unoptimized className="object-cover" />
                </div>
                <div className="absolute -top-12 -left-12 w-48 h-48 border-2 border-primary/20 rounded-full -z-10 animate-pulse" />
                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-secondary/50 rounded-[3rem] -z-10" />
              </div>

              <div className="space-y-10">
                <div className="inline-flex items-center gap-4">
                  <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">The Perspective</span>
                  <div className="w-12 h-[1px] bg-black/10" />
                </div>
                <h2 className="text-4xl md:text-6xl font-serif font-black text-accent leading-[1.1] text-editorial">
                  Where nature <br/> meets <span className="text-primary italic font-serif">sophistication.</span>
                </h2>
                <p className="text-lg text-accent/60 font-light leading-relaxed max-w-xl">
                  {property.description}
                </p>
                
                <div className="grid grid-cols-2 gap-8 pt-6">
                  {property.amenities.slice(0, 4).map((item) => (
                    <div key={item} className="flex flex-col gap-3">
                      <div className="w-8 h-[1px] bg-primary" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Sanctuary Grid */}
        <section id="sanctuary" className="py-24 bg-secondary/30 rounded-[5rem] mx-6 md:mx-12 mb-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Room Selection</span>
                <h2 className="text-4xl md:text-7xl font-serif font-black text-accent text-editorial">Curated Sanctuaries</h2>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-white rounded-full border border-black/5 shadow-xl overflow-x-auto scrollbar-hide max-w-full">
                {property.floors.map((floor) => (
                  <button
                    key={floor.id}
                    onClick={() => setSelectedFloor(floor)}
                    className={`px-8 py-3 rounded-full text-[9px] font-black uppercase tracking-widest transition-all duration-500 whitespace-nowrap ${
                      selectedFloor.id === floor.id
                        ? "bg-accent text-white shadow-lg"
                        : "text-accent/30 hover:text-primary"
                    }`}
                  >
                    {floor.name}
                  </button>
                ))}
              </div>
            </div>

            <motion.div
              key={selectedFloor.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {selectedFloor.rooms.map((room) => (
                <div key={room.id} className="group" onClick={() => setSelectedRoom(room)}>
                  <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-8 shadow-xl transition-all duration-700 group-hover:shadow-primary/10">
                    <Image src={room.thumbnail} alt={room.name} fill unoptimized className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 transition-opacity" />
                    
                    {/* Video Indicator */}
                    <div className="absolute top-6 left-6 px-4 py-2 bg-primary text-white text-[8px] font-black uppercase tracking-widest rounded-full flex items-center gap-2 shadow-xl">
                      <Play size={10} fill="currentColor" />
                      Video Walkthrough
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-500">
                           <Video size={24} />
                        </div>
                    </div>
                  </div>
                  <div className="px-2">
                    <h3 className="text-2xl font-serif font-bold text-accent mb-2 group-hover:text-primary transition-colors">{room.name}</h3>
                    <div className="flex items-center gap-4 text-accent/40 text-[9px] uppercase font-black tracking-widest mb-6">
                      <span className="flex items-center gap-1.5"><Users size={12} /> {room.occupancy} Guest</span>
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-primary">{room.price}</span>
                        <span className="text-[9px] text-accent/20 uppercase font-bold">/ Night</span>
                      </div>
                      <button
                        className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300"
                      >
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Location / Landmarks */}
        <section id="location" className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              <div className="lg:col-span-4 space-y-12">
                <div>
                  <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">The Neighborhood</span>
                  <h2 className="text-3xl font-serif font-black text-accent mb-8">Iconic Proximity</h2>
                  <div className="space-y-8">
                     {property.landmarks.map((mark) => (
                       <div key={mark.name} className="flex flex-col gap-3 group cursor-default">
                         <div className="flex items-center justify-between">
                           <span className="text-accent font-bold text-xs uppercase tracking-widest group-hover:text-primary transition-colors">{mark.name}</span>
                           <span className="text-[10px] font-black text-accent/20">{mark.distance}</span>
                         </div>
                         <div className="w-full h-[1px] bg-black/5 relative">
                            <div className="absolute inset-y-0 left-0 w-0 group-hover:w-1/3 bg-primary transition-all duration-700" />
                         </div>
                       </div>
                     ))}
                   </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="relative h-[500px] rounded-[4rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.568474251261!2d79.4589!3d29.3944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIzJzQwLjAiTiA3OcKwMjcnMzIuMCJF!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Minimal Sticky Actions */}
        <div className="sticky bottom-0 bg-white border-t border-black/5 py-4 px-8 md:px-12 flex items-center justify-between shadow-[0_-20px_50px_rgba(0,0,0,0.05)] z-[110]">
          <div className="hidden md:flex items-center gap-6">
             <div className="flex flex-col">
                <span className="text-[8px] uppercase tracking-widest font-black text-accent/30">Inquiry Manager</span>
                <span className="text-xs font-bold text-accent">Available for Support</span>
             </div>
             <div className="w-[1px] h-8 bg-black/5" />
             <div className="flex items-center gap-1.5">
                {[1,2,3,4,5].map(i => <Star key={i} size={10} className="text-primary fill-primary" />)}
                <span className="text-[10px] font-black ml-1">TOP CHOICE 2026</span>
             </div>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
             <button className="flex-1 md:flex-none px-10 py-4 bg-accent text-white font-black uppercase tracking-widest text-[9px] rounded-full hover:bg-primary transition-all duration-300">
               Contact Concierge
             </button>
             <button onClick={() => onBookRoom(property, selectedFloor.rooms[0])} className="flex-1 md:flex-none luxury-button rounded-full py-4 text-[9px]">
               Request Booking
             </button>
          </div>
        </div>
      </div>

      <RoomDetailModal
        room={selectedRoom}
        onClose={() => setSelectedRoom(null)}
        onBook={(room) => onBookRoom(property, room)}
      />
    </motion.div>
  );
}
