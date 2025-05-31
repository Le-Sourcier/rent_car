import React from 'react';
import { Car } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="h-8 w-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-2">
        <Car size={20} />
      </div>
      <span className="text-xl font-bold text-gray-900">RENTO</span>
    </div>
  );
};

export default Logo;