import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import AuthModal from './AuthModal';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState<'signin' | 'signup'>('signin');
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openAuthModal = (type: 'signin' | 'signup') => {
    setAuthType(type);
    setIsAuthModalOpen(true);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-red-600' : 'text-gray-900';
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium ${isActive('/')} hover:text-red-600 transition-colors`}>
              Home
            </Link>
            <Link to="/services" className={`font-medium ${isActive('/services')} hover:text-red-600 transition-colors`}>
              Services
            </Link>
            <Link to="/vehicles" className={`font-medium ${isActive('/vehicles')} hover:text-red-600 transition-colors`}>
              Vehicles
            </Link>
            <Link to="/about" className={`font-medium ${isActive('/about')} hover:text-red-600 transition-colors`}>
              About
            </Link>
            <Link to="/faq" className={`font-medium ${isActive('/faq')} hover:text-red-600 transition-colors`}>
              FAQ
            </Link>
            <Link to="/contact" className={`font-medium ${isActive('/contact')} hover:text-red-600 transition-colors`}>
              Contact
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:(456) 555-0120" className="flex items-center text-gray-900 hover:text-red-600 transition-colors">
              <Phone size={18} className="mr-2" />
              <span className="font-medium">(456) 555-0120</span>
            </a>
            <button 
              onClick={() => openAuthModal('signin')}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
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
              <Link to="/" className={`font-medium ${isActive('/')} hover:text-red-600 transition-colors py-2`}>
                Home
              </Link>
              <Link to="/services" className={`font-medium ${isActive('/services')} hover:text-red-600 transition-colors py-2`}>
                Services
              </Link>
              <Link to="/vehicles" className={`font-medium ${isActive('/vehicles')} hover:text-red-600 transition-colors py-2`}>
                Vehicles
              </Link>
              <Link to="/about" className={`font-medium ${isActive('/about')} hover:text-red-600 transition-colors py-2`}>
                About
              </Link>
              <Link to="/faq" className={`font-medium ${isActive('/faq')} hover:text-red-600 transition-colors py-2`}>
                FAQ
              </Link>
              <Link to="/contact" className={`font-medium ${isActive('/contact')} hover:text-red-600 transition-colors py-2`}>
                Contact
              </Link>
              <a href="tel:(456) 555-0120" className="flex items-center text-gray-900 hover:text-red-600 transition-colors py-2">
                <Phone size={18} className="mr-2" />
                <span className="font-medium">(456) 555-0120</span>
              </a>
              <button 
                onClick={() => openAuthModal('signin')}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        type={authType}
      />
    </>
  );
};

export default Navbar;