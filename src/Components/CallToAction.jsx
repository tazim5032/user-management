import React from 'react';

const CallToAction = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-12">
      <h2 className="text-2xl font-bold mb-4">Get Started</h2>
      <p className="text-gray-700 mb-6">Manage your users and ensure secure access control.</p>
      <div className="flex gap-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Add New User
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
          Manage Roles
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
