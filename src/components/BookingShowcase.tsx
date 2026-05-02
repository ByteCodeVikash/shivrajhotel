"use client";

import { motion } from "framer-motion";
import { Play, Pause, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function BookingShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log("Autoplay blocked");
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-12 md:py-14 bg-accent relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.1),transparent)] pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-8"
          >
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
                The Future of Booking
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight text-white">
                Don't Just Look at Photos. <br/>
                <span className="text-white/50">Experience the Video Tour.</span>
              </h2>
              <p className="text-white/60 font-light leading-relaxed text-lg">
                Unlike traditional booking sites like Booking.com or MakeMyTrip, we don't just rely on static images. We offer complete, cinematic video walkthroughs of the property and every individual room type. 
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/80">
                <CheckCircle2 size={20} className="text-primary" />
                <span>Watch full property walkthroughs before you arrive</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <CheckCircle2 size={20} className="text-primary" />
                <span>Explore floor-wise layouts and specific room features</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <CheckCircle2 size={20} className="text-primary" />
                <span>See exact 360° video views of the room you are booking</span>
              </div>
            </div>

            <Link href="/properties">
              <button className="luxury-button flex items-center gap-2 mt-4 group">
                Try The Video Booking Experience
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>

          {/* Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Video Mockup */}
            <div 
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] bg-black group cursor-pointer"
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/video1.mp4" type="video/mp4" />
              </video>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-20 h-20 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 ${isPlaying ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}>
                  <Play size={30} fill="currentColor" className="ml-2" />
                </div>
              </div>

              {/* Pause Hover Overlay */}
              {isPlaying && (
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Pause size={30} fill="currentColor" />
                   </div>
                </div>
              )}
              
              {/* Fake UI Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="px-2 py-1 bg-primary/20 text-primary border border-primary/30 text-[10px] uppercase font-bold tracking-widest rounded-full mb-2 inline-block">
                      Room Video Tour
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white">Premium Suite</h3>
                  </div>
                  <Link href="/properties">
                    <button className="px-6 py-2 bg-white text-accent text-xs font-bold uppercase tracking-widest rounded-full hover:bg-primary hover:text-white transition-colors">
                      Book Room
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Floating Element */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -bottom-6 -right-6 bg-white text-accent p-4 rounded-2xl shadow-2xl border border-black/5 max-w-[180px] z-20"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Play size={10} fill="currentColor" />
                </div>
                <span className="font-black text-[10px] uppercase tracking-wider">Real View</span>
              </div>
              <p className="text-[10px] text-accent/60 leading-tight">
                What you see in the video is exactly what you get. No filters, just reality.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
