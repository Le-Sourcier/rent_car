import React from 'react';
import { CheckCircle } from 'lucide-react';

const Commitment: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img 
              src="https://images.pexels.com/photos/14539070/pexels-photo-14539070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Red Sport Car" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <div className="mb-8">
              <h5 className="text-sm text-red-600 font-medium mb-2">ABOUT US</h5>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR COMMITMENT TO YOUR COMFORT AND SATISFACTION</h2>
              <p className="text-gray-700">
                At Rento, we're dedicated to providing you with an exceptional car rental experience. Our commitment to quality, comfort, and customer satisfaction sets us apart from the competition.
              </p>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-gray-900">24/7 Phone Support</h4>
                  <p className="text-gray-700 text-sm">Our customer service team is available around the clock to assist with any questions or concerns.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-gray-900">Clean & Well-Maintained Vehicles</h4>
                  <p className="text-gray-700 text-sm">Every vehicle in our fleet undergoes rigorous cleaning and maintenance checks before each rental.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-gray-900">Flexible Pick-up and Drop-off Locations</h4>
                  <p className="text-gray-700 text-sm">Choose from our convenient locations or request custom pickup and drop-off points.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;