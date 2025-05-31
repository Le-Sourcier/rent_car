import React from 'react';

const MobileApp: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 relative">
            <div className="max-w-md mx-auto">
              <img 
                src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Rento Mobile App" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <div className="mb-8">
              <h5 className="text-sm text-red-600 font-medium mb-2">MOBILE APP</h5>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">ONE APP, MILLIONS OF USERS</h2>
              <p className="text-gray-700 mb-6">
                Download our mobile app for a seamless car rental experience. Browse and book vehicles, manage reservations, and access exclusive deals right from your smartphone.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#" 
                  className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5234 12.0195C17.5103 9.44148 19.7736 8.28207 19.8714 8.22012C18.6289 6.4252 16.6983 6.15445 16.0172 6.12898C14.3229 5.95786 12.6693 7.14445 11.8152 7.14445C10.9318 7.14445 9.60051 6.15768 8.20238 6.19598C6.41104 6.23307 4.76433 7.21754 3.85494 8.79113C1.96592 12.0153 3.39656 16.9554 5.20748 19.4867C6.10621 20.7264 7.16454 22.1191 8.55301 22.0561C9.90602 21.988 10.3989 21.1477 11.9984 21.1477C13.5768 21.1477 14.0439 22.0561 15.4578 22.0181C16.9172 21.988 17.8167 20.7678 18.6807 19.5153C19.7213 18.0794 20.1389 16.6761 20.1632 16.6017C20.1266 16.5867 17.5389 15.5631 17.5234 12.0195Z" />
                    <path d="M15.1178 4.35893C15.8508 3.45074 16.344 2.17393 16.1978 0.875977C15.0977 0.930351 13.7335 1.61094 12.9645 2.4915C12.2826 3.27012 11.6865 4.58633 11.8564 5.8454C13.0819 5.94653 14.3484 5.24825 15.1178 4.35893Z" />
                  </svg>
                  App Store
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" />
                  </svg>
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;