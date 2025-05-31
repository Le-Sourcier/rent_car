import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="font-medium text-gray-900 hover:text-red-600 transition-colors">Home</a>
          <a href="#" className="font-medium text-gray-900 hover:text-red-600 transition-colors">Service</a>
          <a href="#" className="font-medium text-gray-900 hover:text-red-600 transition-colors">About</a>
          <a href="#" className="font-medium text-gray-900 hover:text-red-600 transition-colors">Vehicle</a>
          <a href="#" className="font-medium text-gray-900 hover:text-red-600 transition-colors">FAQ</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:(456) 555-0120" className="flex items-center text-gray-900 hover:text-red-600 transition-colors">
            <Phone size={18} className="mr-2" />
            <span className="font-medium">(456) 555-0120</span>
          </a>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
            Sign In
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-900"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <a href="#" className="font-medium text-gray-900 hover:text-red-600 transition-colors py-2">Home</a>
            <a href="#" className="font-medium text-gray-900 hover:text-red-600 transition-colors py-2">Service</a>
            <a href="#" className="font-medium text-gray-900 hover:text-red-600 transition-colors py-2">About</a>
            <a href="#" className="font-medium text-gray-900 hover:text-red-600 transition-colors py-2">Vehicle</a>
            <a href="#" className="font-medium text-gray-900 hover:text-red-600 transition-colors py-2">FAQ</a>
            <a href="tel:(456) 555-0120" className="flex items-center text-gray-900 hover:text-red-600 transition-colors py-2">
              <Phone size={18} className="mr-2" />
              <span className="font-medium">(456) 555-0120</span>
            </a>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;