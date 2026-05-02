"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Reach Out</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-accent">Contact & Location</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-10"
          >
            <div>
              <h3 className="text-2xl font-serif font-bold text-accent mb-6">Get in Touch</h3>
              <p className="text-accent/60 font-light leading-relaxed mb-8">
                Our concierge team is available round the clock to assist you with your booking, special requests, and inquiries.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-accent uppercase tracking-widest mb-1">Corporate Office</h4>
                  <p className="text-accent/60 text-sm">Mall Road, Nainital, Uttarakhand, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-accent uppercase tracking-widest mb-1">Reservations</h4>
                  <p className="text-accent/60 text-sm">+91 98765 43210</p>
                  <p className="text-accent/60 text-sm">+91 87654 32109</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-accent uppercase tracking-widest mb-1">Email</h4>
                  <p className="text-accent/60 text-sm">bookings@shivrajstays.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-black/5"
          >
            <h3 className="text-2xl font-serif font-bold text-accent mb-6">Quick Inquiry</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-accent/50">First Name</label>
                  <input type="text" className="w-full bg-secondary/50 border border-black/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-accent/50">Last Name</label>
                  <input type="text" className="w-full bg-secondary/50 border border-black/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-accent/50">Email Address</label>
                <input type="email" className="w-full bg-secondary/50 border border-black/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-accent/50">Message</label>
                <textarea rows={4} className="w-full bg-secondary/50 border border-black/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="luxury-button w-full mt-4">Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
