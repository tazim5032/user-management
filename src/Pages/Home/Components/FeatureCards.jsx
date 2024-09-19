import React from 'react';
import { MdGroup, MdSecurity, MdDashboard } from 'react-icons/md';

const FeatureCards = () => {
  const features = [
    {
      icon: <MdGroup size={50} className="text-blue-500" />,
      title: 'User Management',
      description: 'Effortlessly manage users, including adding, editing, and removing users.',
    },
    {
      icon: <MdSecurity size={50} className="text-purple-500" />,
      title: 'Access Control',
      description: 'Define roles and permissions to secure sensitive data.',
    },
    {
      icon: <MdDashboard size={50} className="text-green-500" />,
      title: 'Dashboard Overview',
      description: 'Monitor system metrics and user activities in real-time.',
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
          >
            <div className="flex justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">{feature.title}</h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
