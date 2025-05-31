import React from 'react';
import { MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        {/* Map background */}
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/70"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            UNLOCK YOUR <br />
            <span className="relative">
              TRAVEL EXPERIENCE
              <MapPin className="text-red-600 absolute -right-8 -top-2" size={24} />
            </span>
          </h1>
          <p className="text-gray-700 mb-6 max-w-md">
            Enjoy the freedom of exploring new places in style. Experience top-class comfort with our diverse range of immaculately maintained vehicles. All Rento rentals exceptionally clean and ready to go!
          </p>
          <button className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors">
            Book Now
          </button>
        </div>
        
        <div className="md:w-1/2 relative">
          <img 
            src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg" 
            alt="Luxury Car" 
            className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
          />
          {/* Map markers */}
          <div className="absolute h-3 w-3 bg-yellow-400 rounded-full top-1/4 left-1/4 animate-pulse"></div>
          <div className="absolute h-3 w-3 bg-green-400 rounded-full top-1/3 right-1/3 animate-pulse"></div>
          <div className="absolute h-3 w-3 bg-red-400 rounded-full bottom-1/3 right-1/4 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;