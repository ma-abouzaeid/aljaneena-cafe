'use client';

import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { cafeConfig } from '@/config/cafeConfig';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-brand-darkGreen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-brand-cream flex items-center justify-center gap-3">
            <span>موقعنا على الخريطة</span>
            <span className="text-brand-gold text-3xl">🌿</span>
          </h2>
          <p className="text-brand-gold/90 text-base sm:text-lg mt-2 font-medium">
            زورونا في قلب الأجواء الجميلة
          </p>
        </div>

        {/* Map Container Frame matching Mockup Section 6 */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-brand-gold shadow-glow-green bg-brand-forest p-4 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Decorative Branding Card */}
            <div className="hidden lg:flex lg:col-span-3 flex-col justify-between p-6 rounded-2xl bg-brand-darkGreen/80 border border-brand-gold/30 h-full">
              <div>
                <span className="text-4xl font-serif text-brand-gold italic block mb-2">
                  Life
                </span>
                <span className="text-4xl font-serif text-brand-cream italic block mb-2">
                  Tastes
                </span>
                <span className="text-3xl font-serif text-brand-gold/80 italic block">
                  Better Here
                </span>
              </div>
              <div className="pt-6 border-t border-brand-gold/30">
                <div className="flex items-center gap-2 text-brand-gold text-sm font-bold mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>{cafeConfig.location.name}</span>
                </div>
                <p className="text-xs text-brand-cream/70">
                  انقر للحصول على الاتجاهات المباشرة عبر خرائط جوجل
                </p>
              </div>
            </div>

            {/* Main Interactive Map View */}
            <div className="lg:col-span-9 relative rounded-2xl overflow-hidden border border-brand-gold/30 shadow-inner h-[380px] sm:h-[450px]">
              {/* Map Iframe */}
              <iframe
                title="موقع الجنينة كافيه"
                src={cafeConfig.location.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Custom Location Marker Overlay matching Mockup Pin */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 flex flex-col items-center">
                <div className="bg-brand-cream text-brand-darkGreen font-extrabold text-sm px-4 py-1.5 rounded-full shadow-2xl border-2 border-brand-gold flex items-center gap-2 animate-bounce">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
                  <span>{cafeConfig.location.name}</span>
                </div>
                <div className="w-5 h-5 bg-red-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center -mt-1">
                  <MapPin className="w-3 h-3 text-white" />
                </div>
              </div>

              {/* Top Directions Overlay Button */}
              <div className="absolute bottom-4 right-4 z-20">
                <a
                  href={cafeConfig.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-gold via-brand-goldLight to-brand-amber text-brand-darkGreen font-bold text-sm shadow-glow-gold hover:scale-105 active:scale-95 transition-all duration-300 border border-yellow-200"
                >
                  <Navigation className="w-4 h-4 fill-current" />
                  <span>الاتجاهات</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
