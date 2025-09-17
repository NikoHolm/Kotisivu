import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Etusivu from './components/Etusivu'
import Projektit from './components/Projektit'
import Yhteystiedot from './components/Yhteystiedot'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Navigointi ylhäällä */}
        <Navbar />
        
        {/* Pää otsikko */}
        <div className="text-center py-8">
          <h1 className="text-6xl font-bold text-white">
            Niko Holm
          </h1>
        </div>
        
        {/* Pääsisältö isossa laatikossa */}
        <div className="max-w-5xl mx-auto px-4">
          <main className="bg-slate-800/60 backdrop-blur-sm rounded-3xl border border-slate-600/30 p-12 shadow-2xl">
            <Routes>
              <Route path="/" element={<Etusivu />} />
              <Route path="/projektit" element={<Projektit />} />
              <Route path="/yhteystiedot" element={<Yhteystiedot />} />
            </Routes>
          </main>
        </div>
        
        {/* Footer koko sivun leveänä */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
