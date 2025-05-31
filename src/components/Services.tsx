import React from 'react';
import { Clock, Map, CreditCard } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'ONLINE BOOKING',
      description: 'Rento offers a seamless online booking experience that allows customers to browse our extensive fleet, select their preferred vehicle, and complete reservation in minutes. Enjoy competitive pricing, transparent terms, and instant confirmation.',
      icon: <Clock className="text-red-600" size={24} />,
      image: 'https://images.pexels.com/photos/6207363/pexels-photo-6207363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    },
    {
      id: 2,
      title: 'CITY TRANSPORT',
      description: 'Navigate urban environments with a premium service featuring a diverse selection of well-maintained vehicles. Perfect for business trips, city explorations, or airport transfers. Enjoy competitive pricing, flexible pickup/drop-off, and exceptional customer service.',
      icon: <Map className="text-red-600\" size={24} />,
      image: 'https://images.pexels.com/photos/4824424/pexels-photo-4824424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    },
    {
      id: 3,
      title: 'SPECIAL EVENT',
      description: 'Make your special occasions memorable with our premium vehicle service. Whether it\'s a wedding, corporate event, or anniversary, we offer a luxurious selection of well-maintained vehicles. Enjoy competitive pricing, professional drivers, and exceptional service.',
      icon: <CreditCard className="text-red-600" size={24} />,
      image: 'https://images.pexels.com/photos/2526127/pexels-photo-2526127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="text-sm text-red-600 font-medium mb-2">Our Services</h5>
          <h2 className="text-3xl font-bold text-gray-900">OUR BEST SERVICE FOR YOU</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;