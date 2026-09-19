'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, Users, Leaf } from 'lucide-react';
import { cafeConfig } from '@/config/cafeConfig';
import { getImagePath } from '@/utils/imagePath';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-darkGreen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border-2 border-brand-gold/40 shadow-glow-green bg-brand-forest">
          {/* Background Image Container with Gradient Overlays */}
          <div className="absolute inset-0 z-0">
            <Image
              src={getImagePath('/images/3.png')}
              alt="الجنينة - عن الكافيه"
              fill
              className="object-cover filter brightness-50 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-darkGreen/95 via-brand-darkGreen/80 to-transparent" />
          </div>

          {/* Grid Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-12 lg:p-16 items-center">
            {/* Left Decorative Image Quote Card */}
            <div className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center text-center p-8 rounded-2xl bg-brand-darkGreen/60 border border-brand-gold/30 backdrop-blur-md">
              <span className="text-5xl font-serif text-brand-gold italic mb-2">
                Good Coffee
              </span>
              <span className="text-4xl font-serif text-brand-cream italic mb-2">
                Good People
              </span>
              <span className="text-2xl font-serif text-brand-gold/80 italic">
                Better Days
              </span>
              <div className="w-16 h-1 bg-brand-gold rounded-full my-4" />
              <p className="text-xs text-brand-cream/70">الجنينة | Café & Bistro</p>
            </div>

            {/* Right Text Content matching Mockup Section 4 */}
            <div className="lg:col-span-7 text-right">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/20 text-brand-gold text-sm font-bold border border-brand-gold/30 mb-4">
                <Leaf className="w-4 h-4" />
                <span>عن الجنينة</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-brand-cream mb-6 flex items-center gap-3">
                <span>من نحن</span>
                <span className="text-brand-gold text-3xl">🌿</span>
              </h2>

              <p className="text-lg sm:text-2xl text-brand-cream/90 leading-relaxed font-medium mb-10 whitespace-pre-line">
                {cafeConfig.aboutText}
              </p>

              {/* 3 Circular Features Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-gold/30">
                {/* Feature 1 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand-darkGreen/80 border-2 border-brand-gold/40 group-hover:border-brand-gold flex items-center justify-center text-brand-gold shadow-md group-hover:scale-110 transition-all duration-300">
                    <Heart className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-brand-cream mt-3">
                    مذاق مميز
                  </span>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand-darkGreen/80 border-2 border-brand-gold/40 group-hover:border-brand-gold flex items-center justify-center text-brand-gold shadow-md group-hover:scale-110 transition-all duration-300">
                    <Users className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-brand-cream mt-3">
                    جلسات مريحة
                  </span>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand-darkGreen/80 border-2 border-brand-gold/40 group-hover:border-brand-gold flex items-center justify-center text-brand-gold shadow-md group-hover:scale-110 transition-all duration-300">
                    <Leaf className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-brand-cream mt-3">
                    أجواء طبيعية
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
