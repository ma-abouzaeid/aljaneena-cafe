'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/home/Hero';
import { MenuCategories } from '@/components/menu/MenuCategories';
import { MenuSection } from '@/components/menu/MenuSection';
import { AboutSection } from '@/components/about/AboutSection';
import { GallerySection } from '@/components/gallery/GallerySection';
import { LocationSection } from '@/components/location/LocationSection';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<'hot' | 'cold' | 'shisha'>('hot');

  return (
    <main className="min-h-screen bg-brand-darkGreen text-brand-cream overflow-x-hidden selection:bg-brand-gold selection:text-brand-darkGreen">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Menu Categories Overview Section */}
      <MenuCategories onSelectCategory={(catId) => setActiveCategory(catId)} />

      {/* 3. Detailed Tabbed Menu Section */}
      <MenuSection selectedCategoryId={activeCategory} />

      {/* 4. About Section */}
      <AboutSection />

      {/* 5. Gallery Section */}
      <GallerySection />

      {/* 6. Location & Map Section */}
      <LocationSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
