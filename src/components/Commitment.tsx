import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Commitment: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            className="md:w-1/2"
            {...fadeIn}
          >
            <img 
              src="https://images.pexels.com/photos/14539070/pexels-photo-14539070.jpeg" 
              alt="Red Sport Car" 
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            {...fadeIn}
          >
            <div className="mb-8">
              <h5 className="text-sm text-red-600 font-semibold tracking-wider mb-3">ABOUT US</h5>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
                OUR COMMITMENT TO YOUR COMFORT AND SATISFACTION
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Rento, we're dedicated to providing you with an exceptional car rental experience. 
                Our commitment to quality, comfort, and customer satisfaction sets us apart from the competition.
              </p>
            </div>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <CheckCircle className="text-red-600 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">24/7 Phone Support</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Our customer service team is available around the clock to assist with any questions or concerns.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <CheckCircle className="text-red-600 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">Clean & Well-Maintained Vehicles</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Every vehicle in our fleet undergoes rigorous cleaning and maintenance checks before each rental.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <CheckCircle className="text-red-600 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">Flexible Pick-up and Drop-off Locations</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Choose from our convenient locations or request custom pickup and drop-off points.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;