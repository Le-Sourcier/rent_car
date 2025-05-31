import React from 'react';
import { Clock, Map, CreditCard, Shield, Car, Headset as HeadSet } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Clock size={32} />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your rental needs with dedicated customer service.'
    },
    {
      icon: <Map size={32} />,
      title: 'Flexible Locations',
      description: 'Multiple pickup and drop-off points across the city for your convenience.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Insurance Coverage',
      description: 'Comprehensive insurance options to ensure your peace of mind during rentals.'
    },
    {
      icon: <Car size={32} />,
      title: 'Wide Car Selection',
      description: 'From economy to luxury, choose from our extensive fleet of well-maintained vehicles.'
    },
    {
      icon: <CreditCard size={32} />,
      title: 'Easy Payments',
      description: 'Secure and convenient payment options including credit cards and digital payments.'
    },
    {
      icon: <HeadSet size={32} />,
      title: 'Premium Service',
      description: 'Exceptional service quality with attention to detail and customer satisfaction.'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h5 className="text-sm text-red-600 font-medium mb-2">OUR SERVICES</h5>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Car Rental Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience unparalleled service quality with our comprehensive range of car rental solutions designed to meet your every need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="text-red-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-900">Professional Team</h4>
                      <p className="text-gray-700">Experienced staff dedicated to your satisfaction</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-900">Competitive Pricing</h4>
                      <p className="text-gray-700">Best rates with no hidden charges</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-900">Regular Maintenance</h4>
                      <p className="text-gray-700">Well-maintained vehicles for your safety</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg" 
                  alt="Car Service" 
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Services;