"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar } from "lucide-react";
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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isHeaderSolid
          ? "bg-white/70 backdrop-blur-xl border-b border-black/5 py-2 shadow-sm"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <Image src="/logo.png" alt="Shivraj Stays Logo" fill className="object-contain" priority />
          </div>
          <div className="flex flex-col">
            <span className={`text-lg md:text-xl font-serif font-black tracking-tight leading-tight ${isHeaderSolid ? "text-accent" : "text-white"}`}>
              SHIVRAJ <span className="text-primary">STAYS</span>
            </span>
            <span className={`text-[7px] md:text-[9px] uppercase font-bold tracking-[0.2em] ${isHeaderSolid ? "text-accent/40" : "text-white/50"}`}>
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
              className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-primary ${
                isHeaderSolid ? "text-accent" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="luxury-button flex items-center gap-2">
            <Calendar size={16} />
            Book Now
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 ${isHeaderSolid ? "text-accent" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-black/5 p-8 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-serif font-semibold text-accent hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="luxury-button w-full flex items-center justify-center gap-2">
                <Calendar size={18} />
                Reserve Your Stay
              </button>
              <div className="flex items-center justify-center gap-4 pt-6 border-t border-black/5 text-accent/60">
                <Phone size={18} />
                <span className="text-sm font-medium">+91 88001 14881</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
