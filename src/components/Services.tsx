import React from 'react';
import { Clock, Map, CreditCard, Shield, Car, Headset, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services: React.FC = () => {
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

  const services = [
    {
      icon: <Clock size={32} />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your rental needs with dedicated customer service.',
      image: 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg'
    },
    {
      icon: <Map size={32} />,
      title: 'Flexible Locations',
      description: 'Multiple pickup and drop-off points across the city for your convenience.',
      image: 'https://images.pexels.com/photos/7674867/pexels-photo-7674867.jpeg'
    },
    {
      icon: <Shield size={32} />,
      title: 'Insurance Coverage',
      description: 'Comprehensive insurance options to ensure your peace of mind during rentals.',
      image: 'https://images.pexels.com/photos/3802580/pexels-photo-3802580.jpeg'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h5 className="text-sm text-red-600 font-semibold tracking-wider mb-3">OUR SERVICES</h5>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Premium Car Rental Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience unparalleled service quality with our comprehensive range of car rental solutions.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-8">
                <div className="text-red-600 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <button className="flex items-center text-red-600 font-medium group-hover:text-red-700 transition-colors">
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center gap-2">
            View All Services
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;