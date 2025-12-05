'use client';

import { useState } from 'react';

type Language = 'en' | 'no';
type Currency = 'EUR' | 'NOK';

interface BookingSectionProps {
  language: Language;
}

export default function BookingSection({ language }: BookingSectionProps) {
  const [currency, setCurrency] = useState<Currency>('EUR');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const content = {
    en: {
      title: 'Book Your Adventure',
      subtitle: 'Choose your fairytale experience',
      currency: 'Currency',
      adventures: [
        {
          title: 'Three Billy Goats Gruff Trail',
          description: 'Half-day mountain valley adventure',
          duration: '3 hours',
          priceEUR: 89,
          priceNOK: 950,
          dates: ['2024-06-15', '2024-06-22', '2024-06-29']
        },
        {
          title: 'East of the Sun Journey',
          description: 'Full-day enchanted forest expedition',
          duration: '5 hours',
          priceEUR: 149,
          priceNOK: 1590,
          dates: ['2024-07-10', '2024-07-17', '2024-07-24']
        },
        {
          title: 'Troll Caves Expedition',
          description: 'Mountain cave exploration with guide',
          duration: '4 hours',
          priceEUR: 119,
          priceNOK: 1270,
          dates: ['2024-08-05', '2024-08-12', '2024-08-19']
        }
      ],
      selectDate: 'Select Date',
      bookNow: 'Book Now',
      perPerson: 'per person',
      available: 'Available Dates'
    },
    no: {
      title: 'Bestill Ditt Eventyr',
      subtitle: 'Velg din eventyropplevelse',
      currency: 'Valuta',
      adventures: [
        {
          title: 'De Tre Bukkene Bruse Sti',
          description: 'Halvdags fjelldal-eventyr',
          duration: '3 timer',
          priceEUR: 89,
          priceNOK: 950,
          dates: ['2024-06-15', '2024-06-22', '2024-06-29']
        },
        {
          title: 'Østenfor Sol-reisen',
          description: 'Heldags fortryllet skogekspedisjon',
          duration: '5 timer',
          priceEUR: 149,
          priceNOK: 1590,
          dates: ['2024-07-10', '2024-07-17', '2024-07-24']
        },
        {
          title: 'Trollhuler Ekspedisjon',
          description: 'Fjellhule-utforskning med guide',
          duration: '4 timer',
          priceEUR: 119,
          priceNOK: 1270,
          dates: ['2024-08-05', '2024-08-12', '2024-08-19']
        }
      ],
      selectDate: 'Velg Dato',
      bookNow: 'Bestill Nå',
      perPerson: 'per person',
      available: 'Tilgjengelige Datoer'
    }
  };

  const t = content[language];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'en' ? 'en-US' : 'nb-NO', {
      day: 'numeric',
      month: 'short'
    });
  };

  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            {t.subtitle}
          </p>

          {/* Currency Toggle */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg border border-slate-200">
            <span className="text-sm font-medium text-slate-700">{t.currency}:</span>
            <button
              onClick={() => setCurrency('EUR')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                currency === 'EUR'
                  ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              EUR €
            </button>
            <button
              onClick={() => setCurrency('NOK')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                currency === 'NOK'
                  ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              NOK kr
            </button>
          </div>
        </div>

        {/* Adventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.adventures.map((adventure, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {adventure.title}
                </h3>
                <p className="text-emerald-100 text-sm">
                  {adventure.description}
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Duration */}
                <div className="flex items-center text-slate-600 mb-6">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {adventure.duration}
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-4xl font-bold text-slate-900">
                    {currency === 'EUR' ? `€${adventure.priceEUR}` : `${adventure.priceNOK} kr`}
                  </div>
                  <div className="text-sm text-slate-600">{t.perPerson}</div>
                </div>

                {/* Available Dates */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">{t.available}:</h4>
                  <div className="space-y-2">
                    {adventure.dates.map((date) => (
                      <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedDate === date
                            ? 'bg-emerald-500 text-white shadow-md'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {formatDate(date)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Book Button */}
                <button
                  onClick={() => alert(`Booking ${adventure.title} for ${selectedDate || 'selected date'}`)}
                  className="w-full py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!selectedDate}
                >
                  {t.bookNow}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note about Stripe */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 bg-blue-50 inline-block px-6 py-3 rounded-full border border-blue-200">
            💡 {language === 'en' 
              ? 'Secure payment processing with Stripe (integration ready)'
              : 'Sikker betaling med Stripe (integrasjon klar)'}
          </p>
        </div>
      </div>
    </section>
  );
}