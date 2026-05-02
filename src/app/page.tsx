"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BookingShowcase from "@/components/BookingShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <Hero />
      <About />
      <BookingShowcase />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
