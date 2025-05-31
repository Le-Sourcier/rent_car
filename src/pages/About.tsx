import React from 'react';
import { Users, Award, Car, Target } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const About: React.FC = () => {
  const stats = [
    { icon: <Users size={32} />, value: '15,000+', label: 'Happy Customers' },
    { icon: <Car size={32} />, value: '500+', label: 'Vehicles' },
    { icon: <Award size={32} />, value: '10+', label: 'Years Experience' },
    { icon: <Target size={32} />, value: '99%', label: 'Customer Satisfaction' }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gray-900 text-white py-24">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg"
              alt="About Hero"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <h5 className="text-red-500 font-medium mb-2">ABOUT US</h5>
              <h1 className="text-4xl font-bold mb-4">Your Trusted Partner in Premium Car Rentals</h1>
              <p className="text-gray-300">
                Since 2015, Rento has been providing exceptional car rental services with a commitment to quality, reliability, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 -mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-red-600 mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded with a vision to revolutionize the car rental industry, Rento has grown from a small local business to a leading provider of premium car rental services.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey began with just 10 vehicles and a passionate team dedicated to providing exceptional service. Today, we proudly maintain a fleet of over 500 vehicles and serve thousands of satisfied customers annually.
              </p>
              <p className="text-gray-700">
                What sets us apart is our unwavering commitment to customer satisfaction, transparent pricing, and maintaining a modern fleet of well-maintained vehicles.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4489734/pexels-photo-4489734.jpeg"
                alt="Our Story"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do and help us deliver exceptional service to our customers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-red-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our service, from vehicle maintenance to customer support.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-red-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Customer First</h3>
                <p className="text-gray-600">
                  Our customers are at the heart of everything we do, and their satisfaction is our top priority.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-red-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We continuously innovate and improve our services to meet evolving customer needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;