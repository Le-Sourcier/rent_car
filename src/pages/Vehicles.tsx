import React from 'react';
import { Car } from 'lucide-react';

const Vehicles: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Vehicle Fleet</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our extensive collection of premium vehicles, from luxury sedans to powerful SUVs.
            Find the perfect car for your next journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for vehicle grid */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <Car className="mx-auto text-red-600 mb-4" size={48} />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon</h2>
            <p className="text-gray-600">Our vehicle listings are being updated.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;