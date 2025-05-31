import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Rento</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in premium car rental services since 2020.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-700 mb-4">
            At Rento, we're committed to providing exceptional car rental experiences.
            Our fleet of well-maintained vehicles and dedicated customer service team
            ensure your journey is comfortable and hassle-free.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;