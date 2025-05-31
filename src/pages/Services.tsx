import React from 'react';
import { Clock, Map, CreditCard, Shield, Car, Headset, ArrowRight, Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageTransition from '../components/PageTransition';

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
      features: ['Live Chat Support', 'Emergency Assistance', 'Quick Response Time']
    },
    {
      icon: <Map size={32} />,
      title: 'Flexible Locations',
      description: 'Multiple pickup and drop-off points across the city for your convenience.',
      features: ['Airport Transfers', 'Hotel Delivery', 'Custom Locations']
    },
    {
      icon: <Shield size={32} />,
      title: 'Insurance Coverage',
      description: 'Comprehensive insurance options to ensure your peace of mind during rentals.',
      features: ['Collision Coverage', 'Theft Protection', 'Personal Insurance']
    },
    {
      icon: <Car size={32} />,
      title: 'Premium Fleet',
      description: 'Access to a wide range of luxury and premium vehicles for any occasion.',
      features: ['Regular Maintenance', 'Latest Models', 'Luxury Options']
    },
    {
      icon: <Calendar size={32} />,
      title: 'Flexible Booking',
      description: 'Easy booking process with flexible scheduling and modification options.',
      features: ['Online Booking', 'Free Cancellation', 'Schedule Modification']
    },
    {
      icon: <Users size={32} />,
      title: 'Corporate Services',
      description: 'Specialized services for business travelers and corporate events.',
      features: ['Corporate Accounts', 'Event Transportation', 'Business Packages']
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h5 className="text-sm text-red-600 font-semibold tracking-wider mb-3">OUR SERVICES</h5>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Premium Car Rental Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience unparalleled service quality with our comprehensive range of car rental solutions designed to meet your every need.
            </p>
          </motion.div>

          <motion.div 
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-red-600 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button 
                  className="mt-8 flex items-center text-red-600 font-medium group-hover:text-red-700 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="bg-red-600 rounded-2xl p-12 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Premium Service?</h2>
            <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us for their car rental needs.
            </p>
            <motion.button 
              className="bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-red-50 transition-colors inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Services;