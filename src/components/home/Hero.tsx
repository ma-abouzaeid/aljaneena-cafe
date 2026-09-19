'use client';

import React from 'react';
import Image from 'next/image';
import { Coffee, Users, Leaf, ChevronDown } from 'lucide-react';
import { cafeConfig } from '@/config/cafeConfig';
import { getImagePath } from '@/utils/imagePath';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden">
      {/* Hero Background Image with Dark Botanical Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getImagePath('/images/3.png')}
          alt="الجنينة كافيه - الأجواء"
          fill
          className="object-cover object-center scale-105 filter brightness-75 contrast-110"
          priority
        />
        {/* Layered Gradient Overlays for Cinematic Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darkGreen via-brand-darkGreen/65 to-brand-darkGreen/80" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70" />
      </div>

      {/* Decorative Floating Leaves Background Details */}
      <div className="absolute top-1/4 right-10 opacity-20 pointer-events-none animate-pulse">
        <span className="text-6xl">🌿</span>
      </div>
      <div className="absolute bottom-1/3 left-10 opacity-20 pointer-events-none">
        <span className="text-7xl">🍃</span>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center flex-grow pt-8">
        {/* Official Logo in Hero */}
        <div className="relative mb-6 group cursor-pointer">
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-brand-gold via-brand-goldLight to-brand-amber opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white p-2 border-2 border-brand-gold shadow-glow-gold flex items-center justify-center">
            <Image
              src={getImagePath('/images/Logo.png')}
              alt="الجنينة Café & Bistro"
              width={140}
              height={140}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Main Arabic Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-brand-cream tracking-wide leading-tight mb-4 drop-shadow-lg">
          أكثر من كافيه
          <span className="block mt-2 font-black text-brand-gold flex items-center justify-center gap-2">
            دي حالة ..
            <span className="inline-block text-brand-gold text-3xl sm:text-5xl">🌿</span>
          </span>
        </h1>

        {/* Supporting Tagline */}
        <p className="text-xl sm:text-2xl text-brand-cream/90 font-medium mb-10 tracking-wider drop-shadow">
          {cafeConfig.tagline}
        </p>

        {/* CTA Button to View Menu */}
        <div className="mb-14">
          <a
            href="#menu"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-brand-gold via-brand-goldLight to-brand-amber text-brand-darkGreen font-bold text-lg shadow-glow-gold hover:scale-105 active:scale-95 transition-all duration-300 border border-yellow-200"
          >
            <span>استكشف قائمتنا</span>
            <Coffee className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero Bottom Feature Badges matching Mockup */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 bg-brand-forest/70 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-brand-gold/30 shadow-card-shadow">
          {/* Badge 1 */}
          <div className="flex items-center gap-4 p-3 rounded-xl bg-brand-darkGreen/50 border border-brand-gold/20 hover:border-brand-gold/50 transition-colors">
            <div className="p-3 rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/30">
              <Coffee className="w-6 h-6" />
            </div>
            <div className="text-right">
              <h3 className="text-lg font-bold text-brand-cream">مشروبات مميزة</h3>
              <p className="text-xs text-brand-cream/70">بمذاق استثنائي</p>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="flex items-center gap-4 p-3 rounded-xl bg-brand-darkGreen/50 border border-brand-gold/20 hover:border-brand-gold/50 transition-colors">
            <div className="p-3 rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/30">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-right">
              <h3 className="text-lg font-bold text-brand-cream">جلسات مريحة</h3>
              <p className="text-xs text-brand-cream/70">في أجواء طبيعية</p>
            </div>
          </div>

          {/* Badge 3 */}
          <div className="flex items-center gap-4 p-3 rounded-xl bg-brand-darkGreen/50 border border-brand-gold/20 hover:border-brand-gold/50 transition-colors">
            <div className="p-3 rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/30">
              <Leaf className="w-6 h-6" />
            </div>
            <div className="text-right">
              <h3 className="text-lg font-bold text-brand-cream">لحظات لا تُنسى</h3>
              <p className="text-xs text-brand-cream/70">مع الأصدقاء</p>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="flex justify-center mt-6">
          <a
            href="#menu-categories"
            className="p-2 rounded-full bg-brand-gold/20 text-brand-gold hover:bg-brand-gold hover:text-brand-darkGreen transition-all duration-300 animate-bounce"
            aria-label="الانتقال للأقسام"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
