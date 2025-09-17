import React, { useEffect } from 'react'
import Taitoni from './Taitoni'
import Ohjelmistot from './Ohjelmistot'
import selfieImage from '../assets/selfie.jpeg'

function Etusivu() {
  useEffect(() => {
    console.log('Etusivu component mounted')
    console.log('Current location:', window.location.hash)
  }, [])

  console.log('Etusivu rendering...')

  return (
    <div className="text-center">
      {/* Tervetuloa otsikko */}
      <h2 className="text-4xl font-bold text-white mb-6">
        Tervetuloa!
      </h2>
      
      {/* Selfie kuva */}
      <div className="mb-8">
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center border-4 border-purple-400/50 shadow-xl overflow-hidden">
          <img 
            src={selfieImage}
            alt="Niko Holm" 
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-purple-300 mt-3 font-medium">Niko Holm</p>
      </div>
      
      {/* kaksi laatikkoa jossa on tietoa minusta ja mitä teen tällä hetkellä ja niiden teemat tms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
        <div className="bg-slate-700/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/30">
          <h3 className="text-xl font-semibold mb-4 text-white text-left">
            Tietoa minusta
          </h3>
          <p className="text-gray-300 text-left leading-relaxed">
            Olen Niko Holm, tietoja viestintätekniikan opiskelija Savon ammattiopistolla, ja opiskelen nyt viimeistä vuottani. Valmistun keväällä 2026. 
            Minun vahvuuteni ovat: itsenäinen tekeminen,  loogisuus, tavoitteellisuus ja mielikuvitus. 
            Olen erityisen kiinnostunut web-kehityksestä ja mobiilisovelluksien kehityksestä.
          </p>
        </div>
        
        <div className="bg-slate-700/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/30">
          <h3 className="text-xl font-semibold mb-4 text-white text-left">
            Mitä teen
          </h3>
          <p className="text-gray-300 text-left leading-relaxed">
            Tällä hetkellä työskentelen matikkaprojektin parissa jossa teen matikkapelin 
            käyttäen react, TailwindCSS ja backendinä käytän php ja supabasea
          </p>
        </div>
      </div>
      
      {/* Osaamisten laatikot */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-slate-700/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/30">
          <Taitoni />
        </div>
        
        <div className="bg-slate-700/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/30">
          <Ohjelmistot />
        </div>
      </div>
    </div>
  )
}

export default Etusivu
