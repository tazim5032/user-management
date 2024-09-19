import React from 'react';

const AboutSection = () => {
  return (
    <div className="container mx-auto relative p-8 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-lg mt-12 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-green-100 opacity-10 rounded-xl"></div>
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-300 rounded-full opacity-30"></div>
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-green-300 rounded-full opacity-30"></div>

      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">About Our System</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Welcome to our state-of-the-art <span className="font-semibold">User Management System</span>. Our platform
          enables you to effortlessly handle user data, customize roles, and manage permissions with advanced tools
          designed for efficiency and security.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Whether you're managing a small team or an entire organization, our system is built to scale, offering
          granular control to ensure the right people have access to the right resources.
        </p>
        <p className="text-lg text-gray-700 mt-6">
          <strong className="font-semibold">Crafted with care</strong> by a dedicated team of developers passionate about 
          delivering secure, reliable, and intuitive solutions.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
