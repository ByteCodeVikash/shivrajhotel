"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Properties from "@/components/Properties";
import PropertyDiscovery from "@/components/PropertyDiscovery";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { properties, Property, Room } from "@/data";

export default function PropertiesPage() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [bookingData, setBookingData] = useState<{ property: Property; room: Room } | null>(null);

  const handleSelectProperty = (propertyId: string) => {
    const property = properties.find((p) => p.id === propertyId);
    if (property) setSelectedProperty(property);
  };

  const handleBookRoom = (property: Property, room: Room) => {
    setBookingData({ property, room });
  };

  return (
    <main className="relative min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-14 bg-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2070')] opacity-20 bg-fixed bg-center bg-cover" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Portfolio</span>
            <h1 className="text-4xl md:text-6xl font-serif font-black mb-6 leading-tight text-editorial">
              Curated <span className="text-primary italic font-serif">Excellence</span>
            </h1>
            <p className="text-white/60 text-sm font-light leading-relaxed max-w-lg">
              Explore our handpicked collection of luxury sanctuaries, from tranquil lakeside retreats to historic heritage estates.
            </p>
          </motion.div>
        </div>
      </section>

      <Properties onSelectProperty={handleSelectProperty} />
      <Footer />

      <AnimatePresence>
        {selectedProperty && (
          <PropertyDiscovery
            property={selectedProperty}
            onClose={() => setSelectedProperty(null)}
            onBookRoom={handleBookRoom}
          />
        )}
      </AnimatePresence>

      <BookingForm
        property={bookingData?.property || null}
        room={bookingData?.room || null}
        onClose={() => setBookingData(null)}
      />
    </main>
  );
}
