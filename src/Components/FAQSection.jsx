import React from 'react';

const FAQSection = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <ul className="list-disc list-inside text-gray-600">
        <li>How do I add a new user?</li>
        <li>How can I block or delete a user?</li>
        <li>How do I assign roles to a user?</li>
        <li>What should I do if I forget my admin password?</li>
      </ul>
    </div>
  );
};

export default FAQSection;
