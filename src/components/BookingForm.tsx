import React, { useState } from 'react';
import { MapPin, Calendar, Search } from 'lucide-react';

const BookingForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState('hourly');
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto px-4 -mt-8 relative z-20">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex border-b mb-6">
          <button 
            className={`px-6 py-3 font-medium ${activeTab === 'hourly' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500'}`}
            onClick={() => handleTabChange('hourly')}
          >
            Hourly
          </button>
          <button 
            className={`px-6 py-3 font-medium ${activeTab === 'distance' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500'}`}
            onClick={() => handleTabChange('distance')}
          >
            Distance
          </button>
          <button 
            className={`px-6 py-3 font-medium ${activeTab === 'flat' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500'}`}
            onClick={() => handleTabChange('flat')}
          >
            Flat Rate
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pick Up Address
            </label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Enter pickup address" 
                className="w-full border border-gray-300 rounded py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Drop Off Address
            </label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Enter dropoff address" 
                className="w-full border border-gray-300 rounded py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pick Up Date
            </label>
            <div className="relative">
              <input 
                type="date" 
                className="w-full border border-gray-300 rounded py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pick Up Time
            </label>
            <div className="relative">
              <input 
                type="time" 
                className="w-full border border-gray-300 rounded py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          
          <div className="md:col-span-4 mt-4">
            <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors flex items-center justify-center">
              <Search size={18} className="mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;