import React, { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I add a new user?",
      answer: "You can add a new user by navigating to the 'Add User' section on the dashboard. Fill in the user’s details and assign roles accordingly."
    },
    {
      question: "How can I block or delete a user?",
      answer: "To block or delete a user, go to the 'Manage Users' section. Select the user you want to block/delete and use the provided action buttons."
    },
    {
      question: "How do I assign roles to a user?",
      answer: "Roles can be assigned in the 'Manage Roles' section. Select the user and assign them a role from the available list of roles."
    },
    {
      question: "What should I do if I forget my admin password?",
      answer: "If you forget your admin password, click on the 'Forgot Password' link on the login page, and follow the instructions to reset your password."
    }
  ];

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium text-gray-700">{faq.question}</h3>
              <button className="text-gray-600 focus:outline-none">
                {openFAQ === index ? '-' : '+'}
              </button>
            </div>
            {openFAQ === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
