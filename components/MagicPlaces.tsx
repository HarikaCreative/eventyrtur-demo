type Language = 'en' | 'no';

interface MagicPlacesProps {
  language: Language;
}

export default function MagicPlaces({ language }: MagicPlacesProps) {
  const content = {
    en: {
      title: 'Magical Places to Explore',
      subtitle: 'Where legends come alive',
      places: [
        {
          name: 'Trolltunga',
          description: 'The famous troll\'s tongue rock formation, where ancient tales meet breathtaking views',
          image: 'https://images.unsplash.com/photo-1601439678777-b2b3c56fa9a2?w=800&q=80'
        },
        {
          name: 'Geirangerfjord',
          description: 'A UNESCO World Heritage fjord where water spirits dance in the misty waterfalls',
          image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&q=80'
        },
        {
          name: 'Preikestolen',
          description: 'The Pulpit Rock, standing 604 meters above the deep blue Lysefjord',
          image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80'
        },
        {
          name: 'Lofoten Islands',
          description: 'Dramatic peaks rising from the arctic waters, home to fishing villages and northern lights',
          image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80'
        }
      ]
    },
    no: {
      title: 'Magiske Steder å Utforske',
      subtitle: 'Der legendene kommer til live',
      places: [
        {
          name: 'Trolltunga',
          description: 'Den berømte trolltunge-formasjonen, hvor eldgamle eventyr møter spektakulær utsikt',
          image: 'https://images.unsplash.com/photo-1601439678777-b2b3c56fa9a2?w=800&q=80'
        },
        {
          name: 'Geirangerfjorden',
          description: 'En UNESCO Verdensarvfjord hvor vannånder danser i de tåkete fossene',
          image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&q=80'
        },
        {
          name: 'Preikestolen',
          description: 'Prekestolen står 604 meter over den dypblå Lysefjorden',
          image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80'
        },
        {
          name: 'Lofoten',
          description: 'Dramatiske tinder som reiser seg fra de arktiske farvann, hjem til fiskeværer og nordlys',
          image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="places" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
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

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.places.map((place, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-3">
                  {place.name}
                </h3>
                <p className="text-slate-200 leading-relaxed">
                  {place.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}