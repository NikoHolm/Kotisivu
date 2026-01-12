import React from 'react'

function Taitoni() {
  const koodauskielet = [
    { kieli: 'JavaScript', prosentti: 60 },
    { kieli: 'React', prosentti: 75 },
    { kieli: 'TailwindCSS', prosentti: 65 },
    { kieli: 'Flutter', prosentti: 45 },
    { kieli: 'PHP', prosentti: 80 },
    { kieli: 'Python', prosentti: 40 },
    { kieli: 'Swift', prosentti: 55 },
    { kieli: 'C#', prosentti: 50 }
  ]

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-white text-left">
        Koodauskielet
      </h3>
      <div className="space-y-4">
        {koodauskielet.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-300 font-medium">{item.kieli}</span>
            <div className="flex items-center gap-3">
              <div className="w-24 bg-slate-600 rounded-full h-2">
                <div 
                  className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${item.prosentti}%` }}
                ></div>
              </div>
              <span className="text-purple-300 font-semibold text-sm w-10 text-right">
                {item.prosentti}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Taitoni
