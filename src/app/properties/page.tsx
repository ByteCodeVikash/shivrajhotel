"use client";

import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Properties from "@/components/Properties";
import PropertyDiscovery from "@/components/PropertyDiscovery";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { properties, Property, Room } from "@/data";

function PropertiesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [bookingData, setBookingData] = useState<{ property: Property; room: Room } | null>(null);

  // Sync state with URL params for back button support
  useEffect(() => {
    const propertyId = searchParams.get("id");
    if (propertyId) {
      const property = properties.find((p) => p.id === propertyId);
      if (property) setSelectedProperty(property);
    } else {
      setSelectedProperty(null);
    }
  }, [searchParams]);

  const handleSelectProperty = (propertyId: string) => {
    // Push new state to history so back button works
    router.push(`/properties?id=${propertyId}`, { scroll: false });
  };

  const handleCloseDiscovery = () => {
    router.back();
  };

  const handleBookRoom = (property: Property, room: Room) => {
    setBookingData({ property, room });
  };

  return (
    <>
      <Properties onSelectProperty={handleSelectProperty} />
      
      <AnimatePresence>
        {selectedProperty && (
          <PropertyDiscovery
            property={selectedProperty}
            onClose={handleCloseDiscovery}
            onBookRoom={handleBookRoom}
          />
        )}
      </AnimatePresence>

      <BookingForm
        property={bookingData?.property || null}
        room={bookingData?.room || null}
        onClose={() => setBookingData(null)}
      />
    </>
  );
}

export default function PropertiesPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="pt-24 md:pt-32 pb-10 md:pb-14 bg-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2070')] opacity-20 bg-fixed bg-center bg-cover" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-4 block">Our Portfolio</span>
            <h1 className="text-3xl md:text-6xl font-serif font-black mb-6 leading-tight text-editorial">
              Curated <span className="text-primary italic font-serif">Excellence</span>
            </h1>
            <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed max-w-lg">
              Explore our handpicked collection of luxury sanctuaries, from tranquil lakeside retreats to historic heritage estates.
            </p>
          </motion.div>
        </div>
      </section>

      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading Sanctuary...</div>}>
        <PropertiesContent />
      </Suspense>

      <Footer />
    </main>
  );
}
