import React, { useState } from 'react';
import { MapPin, Calendar, Search, Clock, Car, Route, CreditCard, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';

const BookingForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState('hourly');
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const tabVariants = {
    active: {
      color: '#dc2626',
      borderColor: '#dc2626',
      backgroundColor: '#fee2e2',
      transition: { duration: 0.3 }
    },
    inactive: {
      color: '#6b7280',
      borderColor: 'transparent',
      backgroundColor: '#ffffff',
      transition: { duration: 0.3 }
    }
  };

  const renderRateSpecificFields = () => {
    switch (activeTab) {
      case 'hourly':
        return (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="relative" variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Hours
              </label>
              <div className="relative group">
                <input 
                  type="number" 
                  min="1"
                  placeholder="Enter number of hours" 
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 group-hover:border-red-400"
                />
                <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-red-500 transition-colors" size={18} />
              </div>
            </motion.div>
            <motion.div className="relative" variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vehicle Type
              </label>
              <div className="relative group">
                <select className="w-full border border-gray-300 rounded-lg py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 group-hover:border-red-400 appearance-none cursor-pointer">
                  <option value="">Select vehicle type</option>
                  <option value="economy">Economy</option>
                  <option value="standard">Standard</option>
                  <option value="luxury">Luxury</option>
                  <option value="suv">SUV</option>
                  <option value="sports">Sports</option>
                </select>
                <Car className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-red-500 transition-colors" size={18} />
              </div>
            </motion.div>
          </motion.div>
        );
      case 'distance':
        return (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="relative" variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Estimated Distance (km)
              </label>
              <div className="relative group">
                <input 
                  type="number" 
                  min="1"
                  placeholder="Enter estimated distance" 
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 group-hover:border-red-400"
                />
                <Route className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-red-500 transition-colors" size={18} />
              </div>
            </motion.div>
            <motion.div className="relative" variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vehicle Category
              </label>
              <div className="relative group">
                <select className="w-full border border-gray-300 rounded-lg py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 group-hover:border-red-400 appearance-none cursor-pointer">
                  <option value="">Select category</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="luxury">Luxury</option>
                  <option value="sports">Sports</option>
                </select>
                <Car className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-red-500 transition-colors" size={18} />
              </div>
            </motion.div>
          </motion.div>
        );
      case 'flat':
        return (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="relative" variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Package Type
              </label>
              <div className="relative group">
                <select className="w-full border border-gray-300 rounded-lg py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 group-hover:border-red-400 appearance-none cursor-pointer">
                  <option value="">Select package</option>
                  <option value="airport">Airport Transfer</option>
                  <option value="wedding">Wedding Package</option>
                  <option value="tour">City Tour</option>
                  <option value="business">Business Travel</option>
                </select>
                <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-red-500 transition-colors" size={18} />
              </div>
            </motion.div>
            <motion.div className="relative" variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Passengers
              </label>
              <div className="relative group">
                <input 
                  type="number" 
                  min="1"
                  placeholder="Enter number of passengers" 
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 group-hover:border-red-400"
                />
                <Car className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-red-500 transition-colors" size={18} />
              </div>
            </motion.div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 -mt-16 relative z-20">
      <motion.div 
        className="bg-white rounded-xl shadow-xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-wrap gap-4 border-b mb-8">
          {['hourly', 'distance', 'flat'].map((tab) => (
            <motion.button 
              key={tab}
              className={`px-8 py-4 font-medium rounded-t-lg relative`}
              variants={tabVariants}
              animate={activeTab === tab ? 'active' : 'inactive'}
              onClick={() => handleTabChange(tab)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Rate
              {activeTab === tab && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
                  layoutId="activeTab"
                />
              )}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {renderRateSpecificFields()}
        </AnimatePresence>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="relative" variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pick Up Location
            </label>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Enter pickup location" 
                className="w-full border border-gray-300 rounded-lg py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 group-hover:border-red-400"
              />
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-red-500 transition-colors" size={18} />
            </div>
          </motion.div>
          
          <motion.div className="relative" variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Drop Off Location
            </label>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Enter dropoff location" 
                className="w-full border border-gray-300 rounded-lg py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 group-hover:border-red-400"
              />
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-red-500 transition-colors" size={18} />
            </div>
          </motion.div>
          
          <motion.div className="relative" variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pick Up Date
            </label>
            <div className="relative group">
              <input 
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 group-hover:border-red-400"
              />
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-red-500 transition-colors" size={18} />
            </div>
          </motion.div>
          
          <motion.div className="relative" variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pick Up Time
            </label>
            <div className="relative group">
              <input 
                type="time" 
                className="w-full border border-gray-300 rounded-lg py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 group-hover:border-red-400"
              />
              <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-red-500 transition-colors" size={18} />
            </div>
          </motion.div>
          
          <div className="md:col-span-4 mt-6">
            <motion.button 
              className="w-full bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center space-x-2 font-medium group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Search size={20} />
              <span>Search Available Cars</span>
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BookingForm;