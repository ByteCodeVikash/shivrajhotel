"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, Phone, Mail, MessageSquare, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Property, Room } from "@/data";

interface BookingFormProps {
  property: Property | null;
  room: Room | null;
  onClose: () => void;
}

export default function BookingForm({ property, room, onClose }: BookingFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    requests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate backend integration
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (!property || !room) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-8"
      >
        <div className="absolute inset-0 bg-accent/90 backdrop-blur-sm" onClick={onClose} />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl"
        >
          {isSubmitted ? (
            <div className="p-16 text-center">
              <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-green-500 mx-auto mb-8">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-3xl font-serif font-bold text-accent mb-4">Inquiry Received!</h3>
              <p className="text-accent/60 mb-10 leading-relaxed">
                Thank you for choosing Shivraj Stays. Our concierge will contact you within the next 30 minutes to confirm your luxury stay at <strong>{property.name}</strong>, room <strong>{room.name}</strong>.
              </p>
              <button 
                onClick={onClose}
                className="luxury-button w-full"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div className="flex flex-col">
              {/* Header */}
              <div className="p-8 md:p-10 bg-secondary/50 border-b border-black/5 flex items-center justify-between">
                <div>
                  <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] block mb-1">
                    Direct Booking Inquiry
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-accent">
                    Confirm Your Luxury Stay
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-black/5 rounded-full transition-colors text-accent/40"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="md:col-span-2 bg-primary/5 p-4 rounded-xl border border-primary/20 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden relative flex-shrink-0">
                      <img src={room.thumbnail} alt={room.name} className="object-cover w-full h-full" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-primary font-bold block">Selected Room</span>
                      <span className="text-sm font-bold text-accent">{property.name} • {room.name}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-accent/40 flex items-center gap-2">
                      <User size={12} /> Full Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-secondary border-none rounded-xl p-4 text-accent text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-accent/40 flex items-center gap-2">
                      <Phone size={12} /> Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      className="w-full bg-secondary border-none rounded-xl p-4 text-accent text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="+91 88000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-accent/40 flex items-center gap-2">
                      <Calendar size={12} /> Check-In
                    </label>
                    <input
                      required
                      type="date"
                      className="w-full bg-secondary border-none rounded-xl p-4 text-accent text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      value={formData.checkIn}
                      onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-accent/40 flex items-center gap-2">
                      <Calendar size={12} /> Check-Out
                    </label>
                    <input
                      required
                      type="date"
                      className="w-full bg-secondary border-none rounded-xl p-4 text-accent text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      value={formData.checkOut}
                      onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                    />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-accent/40 flex items-center gap-2">
                      <MessageSquare size={12} /> Special Requests
                    </label>
                    <textarea
                      className="w-full bg-secondary border-none rounded-xl p-4 text-accent text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all min-h-[100px]"
                      placeholder="Any specific requirements (e.g., extra bed, lake view priority...)"
                      value={formData.requests}
                      onChange={(e) => setFormData({...formData, requests: e.target.value})}
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="luxury-button w-full flex items-center justify-center gap-3"
                >
                  <Send size={18} />
                  Submit Booking Inquiry
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
