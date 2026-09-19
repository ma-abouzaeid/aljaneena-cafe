'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowUp } from 'lucide-react';
import { cafeConfig } from '@/config/cafeConfig';
import { getImagePath } from '@/utils/imagePath';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-darkGreen border-t-2 border-brand-gold/30 pt-16 pb-8 relative overflow-hidden text-brand-cream">
      {/* Decorative Botanical Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          {/* Official Logo */}
          <Link href="#hero" className="mb-4 group">
            <div className="relative w-20 h-20 rounded-full bg-white p-1 border-2 border-brand-gold shadow-glow-gold group-hover:scale-105 transition-transform">
              <Image
                src={getImagePath('/images/Logo.png')}
                alt="الجنينة Café & Bistro"
                fill
                className="object-contain p-1"
              />
            </div>
          </Link>

          {/* Café Name & Subtitle */}
          <h2 className="text-3xl font-black text-brand-cream tracking-wide">
            {cafeConfig.name}
          </h2>
          <span className="text-xs font-serif text-brand-gold tracking-widest mt-1">
            {cafeConfig.subBrand}
          </span>

          {/* Footer Tagline */}
          <p className="text-sm font-serif italic text-brand-gold/80 mt-3">
            {cafeConfig.footerTagline}
          </p>
        </div>

        {/* Quick Links Navigation */}
        <div className="flex justify-center gap-6 sm:gap-10 mb-10 flex-wrap text-base font-semibold">
          <a href="#hero" className="text-brand-cream/80 hover:text-brand-gold transition-colors">
            الرئيسية
          </a>
          <a href="#menu" className="text-brand-cream/80 hover:text-brand-gold transition-colors">
            القائمة
          </a>
          <a href="#about" className="text-brand-cream/80 hover:text-brand-gold transition-colors">
            من نحن
          </a>
          <a href="#gallery" className="text-brand-cream/80 hover:text-brand-gold transition-colors">
            معرض الصور
          </a>
          <a href="#location" className="text-brand-cream/80 hover:text-brand-gold transition-colors">
            موقعنا
          </a>
        </div>

        {/* Location & Directions Button */}
        <div className="flex justify-center mb-12">
          <a
            href={cafeConfig.location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-forest/90 border border-brand-gold/40 text-brand-gold hover:border-brand-gold hover:bg-brand-emerald transition-all text-sm font-bold shadow-md"
          >
            <MapPin size={16} />
            <span>عرض موقعنا على الخريطة</span>
          </a>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-brand-gold/20 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-cream/60 gap-4">
          <p>
            © {currentYear} {cafeConfig.name} Café & Bistro. جميع الحقوق محفوظة.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 p-2 rounded-full bg-brand-forest hover:bg-brand-gold hover:text-brand-darkGreen text-brand-gold transition-all duration-300 border border-brand-gold/30"
            aria-label="العودة للأعلى"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Developer Credit */}
        <div className="mt-8 pt-6 border-t border-brand-gold/15 text-center text-xs dir-ltr">
          <p className="font-semibold text-brand-gold/90 text-sm tracking-wide">
            Built By Eng. Mahmoud Abou-Zaeid
          </p>
          <p className="text-brand-cream/70 mt-1">
            Phone:{' '}
            <a
              href="tel:+201017119544"
              className="text-brand-gold hover:underline transition-all"
            >
              +201017119544
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
