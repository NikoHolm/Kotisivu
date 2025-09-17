import React from 'react'

function Ohjelmistot() {
  const ohjelmat = [
    { ohjelma: 'Photoshop/Gimp', prosentti: 85 },
    { ohjelma: 'Blender', prosentti: 55 },
    { ohjelma: 'Premiere/Davinci Resolve', prosentti: 65 },
    { ohjelma: 'Officen sovellukset', prosentti: 85 },
    { ohjelma: 'Tekoäly', prosentti: 100 }
  ]

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-white text-left">
        Ohjelmat
      </h3>
      <div className="space-y-4">
        {ohjelmat.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-300 font-medium">{item.ohjelma}</span>
            <div className="flex items-center gap-3">
              <div className="w-24 bg-slate-600 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${item.prosentti}%` }}
                ></div>
              </div>
              <span className="text-blue-300 font-semibold text-sm w-10 text-right">
                {item.prosentti}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ohjelmistot
