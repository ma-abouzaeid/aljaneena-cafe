'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu as MenuIcon, X } from 'lucide-react';

const navLinks = [
  { name: 'الرئيسية', href: '#hero' },
  { name: 'القائمة', href: '#menu' },
  { name: 'من نحن', href: '#about' },
  { name: 'معرض الصور', href: '#gallery' },
  { name: 'موقعنا', href: '#location' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // ScrollSpy logic
      const sections = ['hero', 'menu', 'about', 'gallery', 'location'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-darkGreen/95 backdrop-blur-md shadow-2xl border-b border-brand-gold/30 py-3'
          : 'bg-gradient-to-b from-brand-darkGreen/90 via-brand-darkGreen/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Official Logo */}
        <Link href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-brand-gold/50 group-hover:border-brand-gold transition-colors duration-300 bg-white p-0.5">
            <Image
              src="/images/Logo.png"
              alt="الجنينة كافيه - Logo"
              fill
              className="object-contain p-0.5"
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-xl font-bold tracking-wide text-brand-cream font-arabic group-hover:text-brand-gold transition-colors">
              الجنينة
            </span>
            <span className="text-[10px] tracking-widest text-brand-gold/80 font-serif">
              CAFÉ & BISTRO
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-base font-medium transition-colors duration-300 py-1 ${
                  isActive
                    ? 'text-brand-gold font-bold'
                    : 'text-brand-cream/90 hover:text-brand-gold'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-brand-gold rounded-full transition-all duration-300" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-brand-gold hover:text-brand-cream focus:outline-none rounded-lg bg-brand-forest/60 border border-brand-gold/30"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-darkGreen/98 border-b border-brand-gold/30 px-4 pt-4 pb-6 shadow-2xl backdrop-blur-lg animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-right text-lg py-2.5 px-4 rounded-lg transition-all ${
                    isActive
                      ? 'bg-brand-emerald text-brand-gold font-bold border-r-4 border-brand-gold'
                      : 'text-brand-cream hover:bg-brand-forest/40'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
