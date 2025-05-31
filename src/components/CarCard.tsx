import React from 'react';
import { Star, Users, Gauge, Fuel } from 'lucide-react';

interface CarCardProps {
  name: string;
  category: string;
  image: string;
  price: number;
  rating: number;
  seats: number;
  transmission: string;
  fuel: string;
}

const CarCard: React.FC<CarCardProps> = ({ 
  name, 
  category, 
  image, 
  price, 
  rating, 
  seats, 
  transmission, 
  fuel 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
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
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <div className="flex items-center">
            <Star className="text-yellow-500 fill-yellow-500" size={16} />
            <span className="text-gray-700 ml-1">{rating}</span>
          </div>
        </div>
        
        <div className="flex justify-between mb-6">
          <p className="text-red-600 font-bold">${price}<span className="text-gray-500 font-normal">/day</span></p>
        </div>
        
        <div className="flex justify-between mb-6">
          <div className="flex items-center text-gray-700">
            <Users size={16} className="mr-1" />
            <span className="text-sm">{seats} Seats</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Gauge size={16} className="mr-1" />
            <span className="text-sm">{transmission}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Fuel size={16} className="mr-1" />
            <span className="text-sm">{fuel}</span>
          </div>
        </div>
        
        <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition-colors">
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;