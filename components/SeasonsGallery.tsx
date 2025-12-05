type Language = 'en' | 'no';

interface SeasonsGalleryProps {
  language: Language;
}

export default function SeasonsGallery({ language }: SeasonsGalleryProps) {
  const content = {
    en: {
      title: 'Adventure Through All Seasons',
      subtitle: 'Each season brings its own magic',
      seasons: [
        {
          name: 'Spring',
          description: 'Witness nature awakening with blooming wildflowers and rushing waterfalls',
          image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&q=80',
          color: 'from-green-400 to-emerald-500'
        },
        {
          name: 'Summer',
          description: 'Experience the midnight sun and endless days of exploration',
          image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
          color: 'from-yellow-400 to-orange-500'
        },
        {
          name: 'Autumn',
          description: 'Marvel at mountains painted in gold and crimson hues',
          image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80',
          color: 'from-orange-400 to-red-500'
        },
        {
          name: 'Winter',
          description: 'Chase the Northern Lights across snow-covered landscapes',
          image: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800&q=80',
          color: 'from-blue-400 to-purple-500'
        }
      ]
    },
    no: {
      title: 'Eventyr Gjennom Alle Årstider',
      subtitle: 'Hver årstid bringer sin egen magi',
      seasons: [
        {
          name: 'Vår',
          description: 'Opplev naturens oppvåkning med blomstrende vill blomster og fossende fosser',
          image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&q=80',
          color: 'from-green-400 to-emerald-500'
        },
        {
          name: 'Sommer',
          description: 'Opplev midnattssolen og endeløse dager med utforskning',
          image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
          color: 'from-yellow-400 to-orange-500'
        },
        {
          name: 'Høst',
          description: 'Beundre fjell malt i gull og karmosinrøde nyanser',
          image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80',
          color: 'from-orange-400 to-red-500'
        },
        {
          name: 'Vinter',
          description: 'Jakt på nordlyset over snødekte landskap',
          image: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800&q=80',
          color: 'from-blue-400 to-purple-500'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="seasons" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-slate-600">
            {t.subtitle}
          </p>
        </div>

        {/* Seasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.seasons.map((season, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={season.image}
                  alt={season.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                
                {/* Season Badge */}
                <div className={`absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r ${season.color} text-white font-semibold shadow-lg`}>
                  {season.name}
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm leading-relaxed">
                  {season.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}