import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo />
            <p className="mt-4 text-gray-400">
              Premium car rental services tailored to your needs. Experience luxury, comfort, and reliability with every journey.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Vehicles</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Luxury Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SUVs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sedans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sports Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Electric Vehicles</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex">
                <Phone size={20} className="mr-3 text-red-500" />
                <span className="text-gray-400">(456) 555-0120</span>
              </li>
              <li className="flex">
                <Mail size={20} className="mr-3 text-red-500" />
                <span className="text-gray-400">info@rento.com</span>
              </li>
              <li className="flex">
                <MapPin size={20} className="mr-3 text-red-500" />
                <span className="text-gray-400">2464 Royal Ln. Mesa, New Jersey 45463</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Rento. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;