import React from 'react';

const Banner = () => {
  return (
    <div className="container mx-auto relative mt-24 p-8 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white rounded-xl shadow-xl overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full opacity-30 transform -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-400 rounded-full opacity-30 transform translate-x-16 translate-y-16"></div>

      {/* Main content */}
      <div className="relative z-10">
        <h1 className="text-5xl font-extrabold mb-4">User Management Dashboard</h1>
        <p className="text-xl font-light mb-6">Streamline your user management processes with ease.</p>
        
        <div className="flex space-x-4">
          <button className="bg-white text-blue-600 font-medium px-6 py-2 rounded-lg hover:bg-gray-100 transition duration-200">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white text-white font-medium px-6 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
