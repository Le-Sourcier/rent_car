import React from 'react';
import CarCard from './CarCard';

const TopDeals: React.FC = () => {
  const cars = [
    {
      id: 1,
      name: 'Toyota GR Supra',
      category: 'Sports',
      image: 'https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      price: 120,
      rating: 4.8,
      seats: 2,
      transmission: 'Manual',
      fuel: 'Petrol'
    },
    {
      id: 2,
      name: 'BMW M4 Competition',
      category: 'Luxury',
      image: 'https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      price: 150,
      rating: 4.9,
      seats: 4,
      transmission: 'Automatic',
      fuel: 'Petrol'
    },
    {
      id: 3,
      name: 'Lexus NX 350h',
      category: 'SUV',
      image: 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      price: 110,
      rating: 4.7,
      seats: 5,
      transmission: 'Automatic',
      fuel: 'Hybrid'
    },
    {
      id: 4,
      name: 'Honda Accord',
      category: 'Sedan',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      price: 85,
      rating: 4.5,
      seats: 5,
      transmission: 'Automatic',
      fuel: 'Petrol'
    },
    {
      id: 5,
      name: 'Mercedes C-Class',
      category: 'Luxury',
      image: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      price: 130,
      rating: 4.8,
      seats: 5,
      transmission: 'Automatic',
      fuel: 'Petrol'
    },
    {
      id: 6,
      name: 'Audi RS7',
      category: 'Sports',
      image: 'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      price: 160,
      rating: 4.9,
      seats: 4,
      transmission: 'Automatic',
      fuel: 'Petrol'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h5 className="text-sm text-red-600 font-medium mb-2">BEST DEALS</h5>
            <h2 className="text-3xl font-bold text-gray-900">EXPLORE OUR TOP DEAL</h2>
          </div>
          <button className="mt-4 md:mt-0 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors">
            View All Vehicles
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map(car => (
            <CarCard
              key={car.id}
              name={car.name}
              category={car.category}
              image={car.image}
              price={car.price}
              rating={car.rating}
              seats={car.seats}
              transmission={car.transmission}
              fuel={car.fuel}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDeals;