import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Gauge, Battery, Fuel } from 'lucide-react';

interface VehicleCardProps {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  rating: number;
  seats: number;
  transmission: string;
  fuelType: string;
  specs: {
    acceleration: string;
    topSpeed: string;
    range?: string;
  };
}

const VehicleCard: React.FC<VehicleCardProps> = ({
  name,
  category,
  image,
  price,
  rating,
  seats,
  transmission,
  fuelType,
  specs
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
          {category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">{name}</h3>
          <div className="flex items-center">
            <Star className="text-yellow-500 fill-yellow-500" size={16} />
            <span className="ml-1">{rating}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-gray-600">
            <Users size={16} className="mr-2" />
            <span>{seats} Seats</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Gauge size={16} className="mr-2" />
            <span>{transmission}</span>
          </div>
          <div className="flex items-center text-gray-600">
            {fuelType === 'Electric' ? (
              <Battery size={16} className="mr-2" />
            ) : (
              <Fuel size={16} className="mr-2" />
            )}
            <span>{fuelType}</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="text-2xl font-bold text-red-600">${price}</span>
              <span className="text-gray-600">/day</span>
            </div>
            <button className="btn btn-primary">
              Rent Now
            </button>
          </div>

          <details className="text-sm">
            <summary className="cursor-pointer text-red-600 hover:text-red-700 transition-colors">
              View Specifications
            </summary>
            <div className="mt-2 space-y-1 text-gray-600">
              <p>0-60 mph: {specs.acceleration}</p>
              <p>Top Speed: {specs.topSpeed}</p>
              {specs.range && <p>Range: {specs.range}</p>}
            </div>
          </details>
        </div>
      </div>
    </motion.div>
  );
};

export default VehicleCard;