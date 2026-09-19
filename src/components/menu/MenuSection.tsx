'use client';

import React, { useState } from 'react';
import { Coffee, GlassWater, Flame, Coins } from 'lucide-react';
import { menuCategories, MenuCategory, MenuItem } from '@/data/menuData';

interface MenuSectionProps {
  selectedCategoryId?: 'hot' | 'cold' | 'shisha';
}

export const MenuSection: React.FC<MenuSectionProps> = ({ selectedCategoryId = 'hot' }) => {
  const [activeTab, setActiveTab] = useState<'hot' | 'cold' | 'shisha'>(selectedCategoryId);

  const currentCategory = menuCategories.find((cat) => cat.id === activeTab) || menuCategories[0];

  // Split items into 2 balanced columns for desktop display
  const splitItems = (items: MenuItem[]) => {
    const half = Math.ceil(items.length / 2);
    const rightCol = items.slice(0, half);
    const leftCol = items.slice(half);
    return { rightCol, leftCol };
  };

  const { rightCol, leftCol } = splitItems(currentCategory.items);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'hot':
        return <Coffee className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'cold':
        return <GlassWater className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'shisha':
        return <Flame className="w-5 h-5 sm:w-6 sm:h-6" />;
      default:
        return <Coffee className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  return (
    <section id="menu" className="py-20 bg-brand-darkGreen relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-black text-brand-cream flex items-center justify-center gap-3">
            <span>قائمتنا</span>
            <span className="text-brand-gold text-3xl">🌿</span>
          </h2>
          <p className="text-brand-gold/90 text-lg sm:text-xl font-medium mt-2">
            مذاقات تناسب كل الأوقات
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex justify-center gap-3 sm:gap-6 mb-10 flex-wrap">
          {menuCategories.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 shadow-md ${
                  isActive
                    ? 'bg-brand-cream text-brand-darkGreen shadow-glow-gold border-2 border-brand-gold'
                    : 'bg-brand-forest/80 text-brand-cream border border-brand-gold/40 hover:border-brand-gold hover:bg-brand-emerald'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Centered Cream Menu Card matching reference image */}
        <div className="max-w-4xl mx-auto bg-brand-cream text-brand-darkGreen rounded-3xl p-6 sm:p-10 border-2 border-brand-gold/60 shadow-glow-gold relative overflow-hidden">
          {/* Corner Decorative Leaf Accent */}
          <div className="absolute top-3 right-3 text-brand-leaf/15 text-4xl pointer-events-none">🌿</div>
          <div className="absolute bottom-3 left-3 text-brand-leaf/15 text-4xl pointer-events-none rotate-180">🌿</div>

          {/* Menu Card Inner Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-b-2 border-brand-gold/30 pb-5 mb-8 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-brand-darkGreen text-brand-gold shadow-sm">
                {getCategoryIcon(currentCategory.id)}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-brand-darkGreen tracking-wide">
                {currentCategory.name}
              </h3>
            </div>
            
            <div className="flex items-center gap-2 bg-[#EFE8DA] text-brand-darkGreen px-4 py-2 rounded-full border border-brand-gold/40 text-xs sm:text-sm font-bold shadow-sm">
              <Coins className="w-4 h-4 text-brand-amber" />
              <span>الأسعار بالجنيه المصري</span>
            </div>
          </div>

          {/* 2-Column Menu Items Grid with Center Divider */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 my-4">
            {/* Right Column (RTL Column 1) */}
            <div className="space-y-3.5 md:pl-6">
              {rightCol.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-2 rounded-xl hover:bg-brand-gold/10 transition-colors border-b border-brand-gold/20"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-brand-darkGreen">
                      {item.name}
                    </span>
                    {item.popular && (
                      <span className="text-[10px] bg-brand-gold text-brand-darkGreen px-2 py-0.5 rounded-full font-extrabold shadow-sm">
                        مميز
                      </span>
                    )}
                  </div>
                  <span className="text-base sm:text-lg font-extrabold text-brand-darkGreen bg-[#EFE8DA] px-4 py-1 rounded-xl border border-brand-gold/40 shadow-sm min-w-[48px] text-center">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

            {/* Left Column (RTL Column 2) with right border divider on desktop */}
            <div className="space-y-3.5 md:pr-6 md:border-r border-brand-gold/20">
              {leftCol.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-2 rounded-xl hover:bg-brand-gold/10 transition-colors border-b border-brand-gold/20"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-brand-darkGreen">
                      {item.name}
                    </span>
                    {item.popular && (
                      <span className="text-[10px] bg-brand-gold text-brand-darkGreen px-2 py-0.5 rounded-full font-extrabold shadow-sm">
                        مميز
                      </span>
                    )}
                  </div>
                  <span className="text-base sm:text-lg font-extrabold text-brand-darkGreen bg-[#EFE8DA] px-4 py-1 rounded-xl border border-brand-gold/40 shadow-sm min-w-[48px] text-center">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Menu Card Footer Note */}
          <div className="mt-8 pt-5 border-t-2 border-brand-gold/30 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm font-bold text-brand-leaf/90 gap-2">
            <span className="flex items-center gap-1.5">
              <span>🌿</span>
              <span>الجنينة كافيه .. تجربة استثنائية</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span>جميع الأسعار شاملة الخدمة</span>
              <span>🌿</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
