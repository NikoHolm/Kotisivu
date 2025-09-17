import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Etusivu' },
    { path: '/projektit', label: 'Projektit' },
    { path: '/yhteystiedot', label: 'Yhteystiedot' }
  ]

  return (
    <nav className="flex justify-center py-4">
      <div className="flex gap-6 bg-slate-800/80 px-8 py-3 rounded-full border border-slate-600/50">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                no-underline px-6 py-2 rounded-full transition-all duration-300 text-base font-medium
                ${isActive 
                  ? 'text-white bg-slate-700/80' 
                  : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }
              `}
            >
              {item.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
