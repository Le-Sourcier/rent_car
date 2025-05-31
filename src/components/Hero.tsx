import React from 'react';
import { MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        {/* Map background */}
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            UNLOCK YOUR <br />
            <span className="relative inline-block">
              TRAVEL EXPERIENCE
              <MapPin className="text-red-600 absolute -right-8 -top-2 animate-bounce" size={24} />
            </span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-md leading-relaxed">
            Enjoy the freedom of exploring new places in style. Experience top-class comfort with our diverse range of immaculately maintained vehicles. All Rento rentals exceptionally clean and ready to go!
          </p>
          <div className="flex gap-4">
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
              Book Now
            </button>
            <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <img 
            src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg" 
            alt="Luxury Car" 
            className="w-full h-[600px] object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
          {/* Map markers with enhanced animation */}
          <div className="absolute h-4 w-4 bg-yellow-400 rounded-full top-1/4 left-1/4 animate-ping"></div>
          <div className="absolute h-4 w-4 bg-green-400 rounded-full top-1/3 right-1/3 animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute h-4 w-4 bg-red-400 rounded-full bottom-1/3 right-1/4 animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;