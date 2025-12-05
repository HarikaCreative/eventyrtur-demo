type Language = 'en' | 'no';

interface HeroProps {
  language: Language;
}

export default function Hero({ language }: HeroProps) {
  const content = {
    en: {
      title: 'Step Into Norwegian Fairy-tales',
      subtitle: 'Experience the magic of storytelling and fairy-tales around a bonfire deep in the Norwegian forest',
      cta: 'Explore the tales'
    },
    no: {
      title: 'Tre Inn i Norske Eventyr',
      subtitle: 'Opplev eventyrenes magi rundt bål dypt inn i skogen - historiefortelling og fantasi hånd i hånd',
      cta: 'Utforsk Eventyr'
    }
  };

  const t = content[language];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('soft-wintersun-fairytalewalk.webp')"

        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-emerald-900/50 to-slate-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          {t.title}
        </h1>
        <p className="text-xl md:text-2xl text-emerald-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>
        <a
          href="#adventures"
          className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-blue-600 transition-all shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transform"
        >
          {t.cta}
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
}
