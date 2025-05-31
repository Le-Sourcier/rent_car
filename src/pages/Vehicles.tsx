import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import VehicleCard from '../components/VehicleCard';

const Vehicles: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const vehicles = [
    {
      id: '1',
      name: 'Tesla Model 3',
      category: 'Electric',
      image: 'https://images.pexels.com/photos/7674867/pexels-photo-7674867.jpeg',
      price: 150,
      rating: 4.9,
      seats: 5,
      transmission: 'Automatic',
      fuelType: 'Electric',
      specs: {
        acceleration: '3.1s',
        topSpeed: '162 mph',
        range: '358 miles'
      }
    },
    {
      id: '2',
      name: 'BMW M4 Competition',
      category: 'Sports',
      image: 'https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg',
      price: 200,
      rating: 4.8,
      seats: 4,
      transmission: 'Automatic',
      fuelType: 'Petrol',
      specs: {
        acceleration: '3.5s',
        topSpeed: '180 mph'
      }
    },
    {
      id: '3',
      name: 'Mercedes-Benz S-Class',
      category: 'Luxury',
      image: 'https://images.pexels.com/photos/4674337/pexels-photo-4674337.jpeg',
      price: 250,
      rating: 4.9,
      seats: 5,
      transmission: 'Automatic',
      fuelType: 'Petrol',
      specs: {
        acceleration: '4.8s',
        topSpeed: '155 mph'
      }
    },
    {
      id: '4',
      name: 'Range Rover Sport',
      category: 'SUV',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',
      price: 180,
      rating: 4.7,
      seats: 7,
      transmission: 'Automatic',
      fuelType: 'Diesel',
      specs: {
        acceleration: '5.9s',
        topSpeed: '140 mph'
      }
    },
    {
      id: '5',
      name: 'Porsche 911 GT3',
      category: 'Sports',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      price: 300,
      rating: 5.0,
      seats: 2,
      transmission: 'Manual',
      fuelType: 'Petrol',
      specs: {
        acceleration: '3.2s',
        topSpeed: '197 mph'
      }
    },
    {
      id: '6',
      name: 'Audi e-tron GT',
      category: 'Electric',
      image: 'https://images.pexels.com/photos/3802580/pexels-photo-3802580.jpeg',
      price: 220,
      rating: 4.8,
      seats: 5,
      transmission: 'Automatic',
      fuelType: 'Electric',
      specs: {
        acceleration: '3.3s',
        topSpeed: '152 mph',
        range: '298 miles'
      }
    }
  ];

  const categories = ['all', 'Electric', 'Sports', 'Luxury', 'SUV'];

  const filteredVehicles = selectedCategory === 'all'
    ? vehicles
    : vehicles.filter(vehicle => vehicle.category === selectedCategory);

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h5 className="text-sm text-red-600 font-medium mb-2">OUR FLEET</h5>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Vehicles</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our wide selection of premium vehicles for your perfect journey.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-6 rounded-lg shadow-md">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search vehicles..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              <div className="flex items-center gap-4">
                <Filter className="text-gray-600" size={20} />
                <div className="flex gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map(vehicle => (
              <VehicleCard key={vehicle.id} {...vehicle} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Vehicles;