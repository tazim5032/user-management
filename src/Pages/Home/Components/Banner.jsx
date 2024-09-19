import React from 'react';

const Banner = () => {
  return (
    <div className="container mx-auto relative mt-24 p-10 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-400 rounded-full opacity-20 transform -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-purple-400 rounded-full opacity-20 transform translate-x-16 translate-y-16"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center md:text-left">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">Welcome to Your User Management Dashboard</h1>
        <p className="text-xl font-light mb-8 max-w-2xl mx-auto md:mx-0">
          Seamlessly manage your users, permissions, and access controls in one streamlined platform designed for
          efficiency and simplicity.
        </p>
        
        <div className="flex justify-center md:justify-start space-x-6">
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105 duration-300">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-white hover:text-blue-600 transition-transform transform hover:scale-105 duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
