'use client';

import React from 'react';
import Image from 'next/image';
import { Coffee, GlassWater, Flame } from 'lucide-react';
import { menuCategories } from '@/data/menuData';

interface MenuCategoriesProps {
  onSelectCategory?: (categoryId: 'hot' | 'cold' | 'shisha') => void;
}

export const MenuCategories: React.FC<MenuCategoriesProps> = ({ onSelectCategory }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee':
        return <Coffee className="w-8 h-8 text-brand-gold" />;
      case 'GlassWater':
        return <GlassWater className="w-8 h-8 text-brand-gold" />;
      case 'Flame':
        return <Flame className="w-8 h-8 text-brand-gold" />;
      default:
        return <Coffee className="w-8 h-8 text-brand-gold" />;
    }
  };

  const handleCardClick = (catId: 'hot' | 'cold' | 'shisha') => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="menu-categories" className="py-16 bg-brand-darkGreen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-cream flex items-center justify-center gap-2">
            <span>أقسام القائمة</span>
            <span className="text-brand-gold">🌿</span>
          </h2>
          <p className="text-brand-cream/70 text-base sm:text-lg mt-2">
            اختر قسمك المفضل واستمتع بأطيب الأوقات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCardClick(cat.id)}
              className="group relative rounded-3xl overflow-hidden border-2 border-brand-gold/30 hover:border-brand-gold bg-brand-forest shadow-card-shadow cursor-pointer transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darkGreen via-brand-darkGreen/40 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-center z-10">
                <div className="mx-auto mb-4 p-4 rounded-full bg-brand-darkGreen/80 border border-brand-gold/50 backdrop-blur-md group-hover:scale-110 group-hover:border-brand-gold transition-all duration-300">
                  {getIcon(cat.iconName)}
                </div>
                <h3 className="text-2xl font-bold text-brand-cream group-hover:text-brand-gold transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-brand-cream/80 mt-1 font-medium">
                  {cat.subtitle}
                </p>
                <div className="mt-4 inline-block px-5 py-2 mx-auto rounded-full bg-brand-gold/20 text-brand-gold font-bold text-sm border border-brand-gold/30 group-hover:bg-brand-gold group-hover:text-brand-darkGreen transition-all duration-300">
                  عرض المنتجات
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
