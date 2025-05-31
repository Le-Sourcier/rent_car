import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="text-xl font-bold text-gray-900 ml-2">{title}</h3>
        </div>
        <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
        <button className="text-red-600 font-medium hover:text-red-700 transition-colors">
          See More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;