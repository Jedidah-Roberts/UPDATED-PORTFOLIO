import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import Index from '../constants/Index';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50 border-b border-gray-200 font-sans p-4 flex justify-between items-center">
      
      <Link to="/" className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-orange-300 to-orange-600 bg-clip-text ">
        J.EDIDAH
      </Link>

      
      <nav className="hidden md:flex items-center space-x-8">
        {Index.NAVBAR.map(({ text, path }) => (
          <div key={text} className="relative group">
            <div className="flex items-center gap-1 text-base font-medium text-gray-700 hover:text-orange-500 transition cursor-pointer">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `transition duration-200 border-b-2 border-transparent hover:border-orange-500 ${
                    isActive ? 'text-orange-700 font-bold border-orange-500' : ''
                  }`
                }
                end
              >
                {text}
              </NavLink>
            </div>
          </div>
        ))}
      </nav>

      {/* Hamburger Button (visible on mobile) */}
      <button
        className="md:hidden flex flex-col space-y-1 focus:outline-none"
        onClick={toggleMobileMenu}
        aria-label="Toggle Menu"
      >
        <span className="w-6 h-0.5 bg-gray-700"></span>
        <span className="w-6 h-0.5 bg-gray-700"></span>
        <span className="w-6 h-0.5 bg-gray-700"></span>
      </button>

      
      {isMobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 md:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            {Index.NAVBAR.map(({ text, path }) => (
              <NavLink
                key={text}
                to={path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `text-base font-medium text-gray-700 hover:text-purple-700 transition ${
                    isActive ? 'text-purple-700 font-bold' : ''
                  }`
                }
                end
              >
                {text}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
