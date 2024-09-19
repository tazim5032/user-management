import React from 'react';

const CallToAction = () => {
  return (
    <div className="container mx-auto mt-16 p-8 bg-white rounded-xl shadow-lg relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-green-100 opacity-20 rounded-xl"></div>
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-300 rounded-full opacity-40"></div>
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-green-300 rounded-full opacity-40"></div>

      <div className="relative z-10">
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Get Started with User Management</h2>
        <p className="text-lg text-gray-600 mb-8">
          Empower your team with the right tools to manage users, roles, and permissions seamlessly.
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-6">
          <button className="bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200">
            Add New User
          </button>
          <button className="bg-green-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-green-700 transition duration-200">
            Manage Roles
          </button>
          <button className="bg-gray-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-200">
            View User Reports
          </button>
        </div>

        {/* Additional info */}
        <div className="mt-8 text-gray-500">
          <p>
            Secure your application by controlling who can access and modify user data. Our user management tools
            ensure efficiency and peace of mind for administrators.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
