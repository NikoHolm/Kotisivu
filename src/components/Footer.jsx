import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-16 py-8 bg-slate-900/80 backdrop-blur-sm border-t border-slate-600/40 shadow-lg w-full">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="mb-4">
          <h4 className="text-xl font-semibold text-white mb-2">Niko Holm</h4>
          <p className="text-gray-300">Tietoja viestintätekniikan opiskelija</p>
        </div>
    
        <div className="flex justify-center gap-8 mb-6 text-sm">
          <a 
          /* footerin sähköposti ja githun linkkien */
            href="mailto:niko.holm@edu.sakky.fi" 
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            📧 niko.holm@edu.sakky.fi
          </a>
        </div>
        
        <div className="flex justify-center gap-6 mb-6">
          <a 
            href="https://github.com/nikoholm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            🔗 GitHub
          </a>
        </div>
        
        <div className="text-xs text-gray-400">
          © {currentYear} Niko Holm tehty React ja tailwindCSS käyttäen.
        </div>
      </div>
    </footer>
  )
}

export default Footer
