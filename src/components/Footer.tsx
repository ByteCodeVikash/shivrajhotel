"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Share2 } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-accent text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Identity */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12 bg-white/5 rounded-xl p-2 group-hover:bg-primary transition-colors duration-500">
                <Image src="/logo.png" alt="Shivraj Stays Logo" fill className="object-contain p-1" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-black tracking-tight leading-none">
                  SHIVRAJ <span className="text-primary">STAYS</span>
                </span>
                <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-white/40">
                  Luxury Hospitality
                </span>
              </div>
            </Link>
            <p className="text-white/40 font-light leading-relaxed mb-6 text-xs max-w-xs">
              Uttarakhand&apos;s leading boutique stay experience. Meticulously crafted for luxury, comfort, and nature.
            </p>
            <div className="flex items-center gap-3">
              <Link href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-300">
                <Globe size={14} />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-300">
                <Share2 size={14} />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-300">
                <Mail size={14} />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-primary mb-6">Quick Nav</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/50 hover:text-white transition-colors text-xs font-medium uppercase tracking-widest">Home</Link></li>
              <li><Link href="/properties" className="text-white/50 hover:text-white transition-colors text-xs font-medium uppercase tracking-widest">Properties</Link></li>
              <li><Link href="/experience" className="text-white/50 hover:text-white transition-colors text-xs font-medium uppercase tracking-widest">Experience</Link></li>
              <li><Link href="/contact" className="text-white/50 hover:text-white transition-colors text-xs font-medium uppercase tracking-widest">Contact</Link></li>
            </ul>
          </div>

          {/* Top Destinations */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-primary mb-6">Our Hotels</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-white/50 hover:text-white transition-colors text-xs">Hotel Shivraj, Nainital</Link></li>
              <li><Link href="#" className="text-white/50 hover:text-white transition-colors text-xs">Swiss Hotel, Nainital</Link></li>
              <li><Link href="#" className="text-white/50 hover:text-white transition-colors text-xs">Peaks & Pines, Lansdowne</Link></li>
              <li><Link href="#" className="text-white/50 hover:text-white transition-colors text-xs">The Acorn Resort</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-primary mb-6">Connect</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary shrink-0" />
                <span className="text-white/40 text-[10px] leading-relaxed uppercase tracking-wider font-medium">
                  Mall Road, Mallital, Nainital, Uttarakhand - 263002
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <span className="text-white/40 text-[10px] uppercase tracking-wider font-bold">+91 88001 14881</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <span className="text-white/40 text-[10px] uppercase tracking-wider font-bold">gm.sales@shivrajstays.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[8px] uppercase tracking-[0.4em] font-black text-white/20">
          <p>© 2026 Shivraj Group. Editorial Stays.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cancellation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
