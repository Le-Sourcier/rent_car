import React from 'react';
import { Clock, Map, CreditCard } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of car rental services designed to meet your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <Clock className="text-red-600 mb-4" size={32} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-700">Round-the-clock assistance for all your rental needs.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <Map className="text-red-600 mb-4" size={32} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Locations</h3>
            <p className="text-gray-700">Convenient pickup and drop-off points across the city.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <CreditCard className="text-red-600 mb-4" size={32} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Payments</h3>
            <p className="text-gray-700">Secure and convenient payment options for your rentals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;