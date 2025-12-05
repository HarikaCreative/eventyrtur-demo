'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import FairyTales from '@/components/FairyTales';
import MagicPlaces from '@/components/MagicPlaces';
import SeasonsGallery from '@/components/SeasonsGallery';
import BookingSection from '@/components/BookingSection';
import ContactSection from '@/components/ContactSection';

type Language = 'en' | 'no';

export default function HomePage() {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'no' : 'en');
  };

  const translations = {
    en: {
      nav: {
        fairytales: 'Fairy-tales',
        places: 'Places',
        seasons: 'Seasons',
        booking: 'Booking',
        contact: 'Contact'
      }
    },
    no: {
      nav: {
        adventures: 'Eventyr',
        places: 'Steder',
        seasons: 'Årstider',
        booking: 'Bestilling',
        contact: 'Kontakt'
      }
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-emerald-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Eventyrtur
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#adventures" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
                {t.nav.adventures}
              </a>
              <a href="#places" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
                {t.nav.places}
              </a>
              <a href="#seasons" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
                {t.nav.seasons}
              </a>
              <a href="#booking" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
                {t.nav.booking}
              </a>
              <a href="#contact" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
                {t.nav.contact}
              </a>

              {/* Language Toggle */}
             {/* Language Toggle – vises på alle skjermstørrelser */}
              <div className="flex items-center space-x-2">
               <button
                onClick={toggleLanguage}
                className="px-3 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-xl hover:from-emerald-600 hover:to-blue-600 transition-all shadow-md hover:shadow-lg"
                aria-label={language === 'en' ? 'Switch to Norwegian' : 'Bytt til engelsk'}
                >
                {language === 'en' ? '🇳🇴' : '🇬🇧'}
                </button>
              </div>

            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Hero language={language} />
        <FairyTales language={language} />
        <MagicPlaces language={language} />
        <SeasonsGallery language={language} />
        <BookingSection language={language} />
        <ContactSection language={language} />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Eventyrtur
              </h3>
              <p className="text-slate-400">
                {language === 'en' 
                  ? 'Experience the magic of Norwegian fairytales'
                  : 'Opplev magien i norske eventyr'}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{language === 'en' ? 'Quick Links' : 'Hurtiglenker'}</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#adventures" className="hover:text-emerald-400 transition-colors">{t.nav.adventures}</a></li>
                <li><a href="#places" className="hover:text-emerald-400 transition-colors">{t.nav.places}</a></li>
                <li><a href="#booking" className="hover:text-emerald-400 transition-colors">{t.nav.booking}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{language === 'en' ? 'Contact' : 'Kontakt'}</h4>
              <p className="text-slate-400">
                Email: eventyr@eventyrtur.no<br />
                Tel: +47 123 45 678
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
            <p>&copy; 2024 Eventyrtur. {language === 'en' ? 'All rights reserved.' : 'Alle rettigheter reservert.'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
