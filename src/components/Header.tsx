"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isSubPage = pathname !== "/";
  const isHeaderSolid = isScrolled || isSubPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isHeaderSolid
            ? "bg-white/80 backdrop-blur-xl border-b border-black/5 py-2 shadow-sm"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 md:w-16 md:h-16">
              <Image src="/logo.png" alt="Shivraj Stays Logo" fill className="object-contain" priority />
            </div>
            <div className="flex flex-col">
              <span className={`text-sm md:text-xl font-serif font-black tracking-tight leading-tight transition-colors ${isHeaderSolid ? "text-accent" : "text-white"}`}>
                SHIVRAJ <span className="text-primary">STAYS</span>
              </span>
              <span className={`text-[6px] md:text-[9px] uppercase font-bold tracking-[0.2em] transition-colors ${isHeaderSolid ? "text-accent/40" : "text-white/50"}`}>
                Luxury Hospitality
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[10px] font-black tracking-[0.2em] uppercase transition-all hover:text-primary ${
                  isHeaderSolid ? "text-accent" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/properties">
              <button className="luxury-button flex items-center gap-2 !py-2.5 !px-6 !text-[9px]">
                <Calendar size={14} />
                Book Now
              </button>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 transition-colors ${isHeaderSolid ? "text-accent" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-accent/95 backdrop-blur-2xl md:hidden"
          >
            <div className="h-full flex flex-col p-8">
              <div className="flex items-center justify-between mb-20">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                  </div>
                  <span className="text-white font-serif font-black">SHIVRAJ STAYS</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                  <X size={32} />
                </button>
              </div>

              <nav className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-4xl font-serif font-black text-white hover:text-primary transition-colors flex items-center justify-between group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                      <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto space-y-8">
                <Link href="/properties" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="luxury-button w-full !py-5 flex items-center justify-center gap-3 !text-xs">
                    <Calendar size={20} />
                    Reserve Your Sanctuary
                  </button>
                </Link>
                
                <div className="flex flex-col gap-2 pt-8 border-t border-white/10">
                   <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30">Support Line</span>
                   <a href="tel:+918800114881" className="text-xl font-bold text-white flex items-center gap-3">
                     <Phone size={20} className="text-primary" />
                     +91 88001 14881
                   </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
