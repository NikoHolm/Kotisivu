import React from 'react'

function Projektit() {
  const projektit = [
    {
      nimi: 'Matikkapeli',
      kuvaus: 'Tällä hetkellä työskentelen matikka projektin parissa jossa, lasketaan perustason matemaattisia laskuja ja käytän siinä react ja tailwindcss frontendinä ja backendinä php supabase .',
      tekniikat: ['React', 'TailwindCSS', 'PHP', 'Supabase'],
    },
    {
      nimi: 'Kotisivut',
      kuvaus: 'Päivitetyt kotisivut, jotka on tehty reactia ja tailwindcss käyttäen ja tässä lopputulos.',
      tekniikat: ['React', 'TailwindCSS'],
    },
    {
      nimi: 'Ravit sovellus',
      kuvaus: 'Ravit sovellus jossa, voidaan uhkapelata raveissa ja jokaisella hevosella on eri todennäköisyydet ja kertoimet. Sovellus on tehty käyttäen swiftiä ja supabasea.',
      tekniikat: ['Swift', 'Supabase'],
    }, 
    {
      nimi: 'Testausautomaatio sovellus',
      kuvaus: 'Testausautomaatio sovellus, jossa vertailtiin MySQL ja api rajapintojen tuloksia keskenään. Tein tämän työharjoitelussa Clinisoft Oy:lle.',
      tekniikat: ['PHP', 'MySQL', 'REST API'],
      linkki: 'https://clinisoft.fi'
    }
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-12">
        Projektini
      </h1>
      
      <div className="grid grid-cols-1 gap-8">
        {projektit.map((projekti, index) => (
          <div 
            key={index}
            className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              {projekti.nimi}
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {projekti.kuvaus}
            </p>
            
            <div className="mb-6">
              <h4 className="text-base text-purple-300 mb-2">
                Tekniikat:
              </h4>
              <div className="flex flex-wrap gap-2">
                {projekti.tekniikat.map((tekniikka, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-md border border-purple-500/30"
                  >
                    {tekniikka}
                  </span>
                ))}
              </div>
            </div>
            
            {projekti.linkki && (
              <a 
                href={projekti.linkki}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white no-underline rounded-lg text-sm font-medium transition-transform duration-200 hover:scale-105"
              >
                Katso yrityksen sivu →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projektit
