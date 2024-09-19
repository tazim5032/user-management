import React from 'react';
import { MdGroup, MdSecurity, MdDashboard } from 'react-icons/md';

const FeatureCards = () => {
  const features = [
    {
      icon: <MdGroup size={40} className="text-blue-500" />,
      title: 'User Management',
      description: 'Easily add, edit, or remove users from the system.',
    },
    {
      icon: <MdSecurity size={40} className="text-purple-500" />,
      title: 'Access Control',
      description: 'Control user roles and permissions with ease.',
    },
    {
      icon: <MdDashboard size={40} className="text-green-500" />,
      title: 'Dashboard Overview',
      description: 'Get a quick overview of system metrics and user activity.',
    },
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      {features.map((feature, index) => (
        <div key={index} className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
