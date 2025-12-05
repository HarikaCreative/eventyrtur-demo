type Language = 'en' | 'no';

interface FairyTalesProps {
  language: Language;
}

export default function FairyTales({ language }: FairyTalesProps) {
  const content = {
    en: {
      title: 'Classic Norwegian Fairytales',
      subtitle: 'Discover the stories that have enchanted generations',
      tales: [
        {
          title: 'Three Billy Goats Gruff',
          excerpt: 'Once upon a time, three billy goats needed to cross a bridge to reach the lush grass on the other side. But under the bridge lived a fearsome troll...',
          location: 'Mountain Valleys',
          duration: '3 hours'
        },
        {
          title: 'East of the Sun, West of the Moon',
          excerpt: 'A poor farmer's daughter meets a great white bear who promises riches if she comes to live with him in his castle. But she must never see his true form...',
          location: 'Enchanted Forests',
          duration: '5 hours'
        },
        {
          title: 'The Princess and the Trolls',
          excerpt: 'Deep in the mountain halls, trolls guard ancient treasures. Only the bravest can venture into their realm and return with tales of wonder...',
          location: 'Mountain Caves',
          duration: '4 hours'
        }
      ]
    },
    no: {
      title: 'Klassiske Norske Eventyr',
      subtitle: 'Oppdag historiene som har fortryllet generasjoner',
      tales: [
        {
          title: 'De Tre Bukkene Bruse',
          excerpt: 'Det var en gang tre bukker som måtte krysse en bro for å nå det saftige gresset på den andre siden. Men under broen bodde et fryktelig troll...',
          location: 'Fjelldaler',
          duration: '3 timer'
        },
        {
          title: 'Østenfor Sol og Vestenfor Måne',
          excerpt: 'En fattig bondes datter møter en stor hvit bjørn som lover rikdom hvis hun kommer for å bo med ham i slottet hans. Men hun må aldri se hans sanne skikkelse...',
          location: 'Fortryllede Skoger',
          duration: '5 timer'
        },
        {
          title: 'Prinsessen og Trollene',
          excerpt: 'Dypt inne i fjellhallene vokter troll eldgamle skatter. Bare de modigste kan våge seg inn i deres rike og returnere med eventyr å fortelle...',
          location: 'Fjellhuler',
          duration: '4 timer'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="adventures" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Tales Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.tales.map((tale, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-200"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                  {tale.location}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {tale.title}
              </h3>
              
              <p className="text-slate-700 mb-6 leading-relaxed">
                {tale.excerpt}
              </p>
              
              <div className="flex items-center text-slate-600 text-sm">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {tale.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}