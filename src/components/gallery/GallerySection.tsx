'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ZoomIn, X } from 'lucide-react';
import { getImagePath } from '@/utils/imagePath';

const galleryImages = [
  { id: 1, src: getImagePath('/images/1.png'), title: 'عصائر وطازجة', span: 'col-span-1 md:col-span-2 row-span-2' },
  { id: 2, src: getImagePath('/images/2.png'), title: 'جلسات خارجية هادئة', span: 'col-span-1 row-span-1' },
  { id: 3, src: getImagePath('/images/3.png'), title: 'شاشة عرض المباريات والأجواء الحماسية', span: 'col-span-1 row-span-1' },
  { id: 4, src: getImagePath('/images/4.png'), title: 'جلسات البلايستيشن والإضاءة الدافئة', span: 'col-span-1 md:col-span-2 row-span-1' },
  { id: 5, src: getImagePath('/images/5.png'), title: 'الأجواء الطبيعية المفتوحة', span: 'col-span-1 row-span-1' },
];

export const GallerySection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-brand-darkGreen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-brand-cream flex items-center justify-center gap-3">
            <span>معرض الصور</span>
            <span className="text-brand-gold text-3xl">🌿</span>
          </h2>
          <p className="text-brand-cream/70 text-base sm:text-lg mt-2">
            لقطات من أجواء الجنينة
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[250px]">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setActiveImage(img.src)}
              className={`group relative rounded-2xl overflow-hidden border-2 border-brand-gold/30 hover:border-brand-gold bg-brand-forest shadow-card-shadow cursor-pointer transition-all duration-300 ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darkGreen/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex items-center justify-between text-brand-cream">
                  <span className="text-sm font-bold">{img.title}</span>
                  <div className="p-2 rounded-full bg-brand-gold text-brand-darkGreen">
                    <ZoomIn size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-brand-gold text-brand-darkGreen hover:scale-110 transition-transform"
            aria-label="إغلاق"
          >
            <X size={28} />
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full rounded-2xl overflow-hidden border-2 border-brand-gold shadow-2xl">
            <Image
              src={activeImage}
              alt="صورة مكبرة"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
