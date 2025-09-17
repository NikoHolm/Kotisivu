import React from 'react'

function Yhteystiedot() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-white mb-8">
        Yhteystiedot
      </h2>
      
      <p className="text-gray-300 text-lg mb-12">
        Ota yhteyttä! Olen aina kiinnostunut uusista projekteista ja yhteistyömahdollisuuksista.
      </p>

      {/* Yhteystietojen laatikot */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-slate-700/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/30">
          <h3 className="text-xl font-semibold mb-4 text-white text-left">
            Sähköposti
          </h3>
          <div className="text-left">
            <a 
              href="mailto:niko.holm@example.com"
              className="text-purple-400 hover:text-purple-300 transition-colors text-lg no-underline"
            >
              📧 niko.holm@edu.sakky.fi
            </a>
            <p className="text-gray-300 mt-2 text-sm">
              Lähetä minulle sähköpostia olen aina kiinnostunut mahdollisista työpaikoista.
            </p>
          </div>
        </div>
        
        <div className="bg-slate-700/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/30">
          <h3 className="text-xl font-semibold mb-4 text-white text-left">
            GitHub
          </h3>
          <div className="text-left">
            <a 
              href="https://github.com/nikoholm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors text-lg no-underline"
            >
              🔗 github.com/nikoholm
            </a>
            <p className="text-gray-300 mt-2 text-sm">
              Projektini löytyvät githubista.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Yhteystiedot