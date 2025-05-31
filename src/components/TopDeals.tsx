import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CarCard from './CarCard';
import { ArrowRight } from 'lucide-react';

const TopDeals: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const cars = [
    {
      id: 1,
      name: 'Tesla Model 3',
      category: 'Electric',
      image: 'https://images.pexels.com/photos/7674867/pexels-photo-7674867.jpeg',
      price: 120,
      rating: 4.9,
      seats: 5,
      transmission: 'Automatic',
      fuel: 'Electric',
      features: ['Autopilot', 'Premium Sound', 'Glass Roof']
    },
    {
      id: 2,
      name: 'BMW M4 Competition',
      category: 'Sports',
      image: 'https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg',
      price: 150,
      rating: 4.8,
      seats: 4,
      transmission: 'Automatic',
      fuel: 'Petrol',
      features: ['Sport Mode', 'Carbon Fiber', 'Harman Kardon']
    },
    {
      id: 3,
      name: 'Mercedes S-Class',
      category: 'Luxury',
      image: 'https://images.pexels.com/photos/4674337/pexels-photo-4674337.jpeg',
      price: 200,
      rating: 4.9,
      seats: 5,
      transmission: 'Automatic',
      fuel: 'Petrol',
      features: ['Massage Seats', 'Night Vision', 'Burmester 3D']
    },
    {
      id: 4,
      name: 'Range Rover Sport',
      category: 'SUV',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',
      price: 180,
      rating: 4.7,
      seats: 7,
      transmission: 'Automatic',
      fuel: 'Diesel',
      features: ['Off-Road Mode', 'Panoramic Roof', 'Meridian Sound']
    },
    {
      id: 5,
      name: 'Porsche 911 GT3',
      category: 'Sports',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      price: 300,
      rating: 5.0,
      seats: 2,
      transmission: 'Manual',
      fuel: 'Petrol',
      features: ['Track Mode', 'Carbon Ceramic Brakes', 'Sport Chrono']
    },
    {
      id: 6,
      name: 'Audi e-tron GT',
      category: 'Electric',
      image: 'https://images.pexels.com/photos/3802580/pexels-photo-3802580.jpeg',
      price: 220,
      rating: 4.8,
      seats: 5,
      transmission: 'Automatic',
      fuel: 'Electric',
      features: ['Boost Mode', 'Matrix LED', 'Bang & Olufsen']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h5 className="text-sm text-red-600 font-semibold tracking-wider mb-3">BEST DEALS</h5>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Explore Our Top Deals
            </h2>
          </div>
          <motion.button 
            className="mt-6 md:mt-0 group bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Vehicles
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {cars.map(car => (
            <motion.div
              key={car.id}
              variants={itemVariants}
              className="transform hover:-translate-y-2 transition-transform duration-300"
            >
              <CarCard
                name={car.name}
                category={car.category}
                image={car.image}
                price={car.price}
                rating={car.rating}
                seats={car.seats}
                transmission={car.transmission}
                fuel={car.fuel}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-600 mb-8">
            Can't find what you're looking for? Check out our complete fleet inventory.
          </p>
          <motion.button 
            className="bg-white border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 inline-flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Browse All Vehicles
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TopDeals;