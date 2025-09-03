import React from 'react';
import logo from '../assets/images/logo.png';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-white">
            <div className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="Furniture Premium Logo" 
                className="w-24 h-24 object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-16">
          <button
            onClick={() => onNavigate('home')}
            className="text-white hover:text-yellow-500 transition-colors duration-300 relative group font-semibold text-lg"
          >
            Home
            {/* Hover underline */}
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`text-white hover:text-yellow-500 transition-colors duration-300 relative group font-semibold text-lg ${
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
            className={`text-white hover:text-yellow-500 transition-colors duration-300 relative group font-semibold text-lg ${
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
      </div>
    </nav>
  );
};

export default Navbar;