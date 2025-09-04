import React, { useState } from 'react';
import logo from '../assets/images/logo.png';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-white">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Furniture Premium Logo"
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 lg:space-x-16">
          <button
            onClick={() => onNavigate('home')}
            className={`text-white hover:text-yellow-500 transition-colors duration-300 relative group font-semibold text-base lg:text-lg ${
              currentPage === 'home' ? 'text-yellow-500' : ''
            }`}
          >
            Home
            {/* Active underline */}
            {currentPage === 'home' && (
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-yellow-500"></div>
            )}
            {/* Hover underline */}
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`text-white hover:text-yellow-500 transition-colors duration-300 relative group font-semibold text-base lg:text-lg ${
              currentPage === 'about' ? 'text-yellow-500' : ''
            }`}
          >
            About us
            {/* Active underline */}
            {currentPage === 'about' && (
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-yellow-500"></div>
            )}
            {/* Hover underline */}
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className={`text-white hover:text-yellow-500 transition-colors duration-300 relative group font-semibold text-base lg:text-lg ${
              currentPage === 'contact' ? 'text-yellow-500' : ''
            }`}
          >
            Contact
            {/* Active underline */}
            {currentPage === 'contact' && (
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-yellow-500"></div>
            )}
            {/* Hover underline */}
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 relative">
            <span
              className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out translate-y-2 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45 translate-y-2' : 'translate-y-4'
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <button
            onClick={() => {
              onNavigate('home');
              setIsMenuOpen(false);
            }}
            className={`block w-full text-left text-white hover:text-yellow-500 transition-colors duration-300 font-semibold text-lg py-2 ${
              currentPage === 'home' ? 'text-yellow-500' : ''
            }`}
          >
            Home
          </button>
          <button
            onClick={() => {
              onNavigate('about');
              setIsMenuOpen(false);
            }}
            className={`block w-full text-left text-white hover:text-yellow-500 transition-colors duration-300 font-semibold text-lg py-2 ${
              currentPage === 'about' ? 'text-yellow-500' : ''
            }`}
          >
            About us
          </button>
          <button
            onClick={() => {
              onNavigate('contact');
              setIsMenuOpen(false);
            }}
            className={`block w-full text-left text-white hover:text-yellow-500 transition-colors duration-300 font-semibold text-lg py-2 ${
              currentPage === 'contact' ? 'text-yellow-500' : ''
            }`}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
