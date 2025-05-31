import React from 'react';
import { MapPin, ArrowRight, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stats = [
    { icon: <Users size={24} />, value: '15,000+', label: 'Happy Customers' },
    { icon: <Star size={24} />, value: '4.9/5', label: 'Customer Rating' }
  ];

  return (
    <section className="relative bg-gray-50 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              #1 Car Rental Service
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6"
              {...fadeIn}
            >
              UNLOCK YOUR <br />
              <span className="relative inline-block">
                JOURNEY
                <MapPin className="text-red-600 absolute -right-8 -top-2 animate-bounce" size={24} />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-700 mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Experience luxury and comfort with our premium fleet. From city cruisers to luxury vehicles, find your perfect ride.
            </motion.p>

            <motion.div 
              className="flex gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button className="group bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-300 flex items-center gap-2">
                Book Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300">
                View Fleet
              </button>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 bg-red-100 text-red-600 rounded-lg">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg" 
              alt="Luxury Car" 
              className="w-full h-[700px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
            
            {/* Animated elements */}
            <motion.div 
              className="absolute -left-4 top-1/4 bg-white p-4 rounded-lg shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Available Now</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -right-4 bottom-1/4 bg-white p-4 rounded-lg shadow-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <Star className="text-yellow-500 fill-yellow-500" size={16} />
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;