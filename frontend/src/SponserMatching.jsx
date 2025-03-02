
// src/StartupForm.js
import React, { useState } from 'react';

const StartupForm = ({ onSubmit }) => {
  const [startup, setStartup] = useState({
    name: '',
    description: '',
    fundingGoal: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStartup({ ...startup, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(startup);
    setStartup({ name: '', description: '', fundingGoal: '', image: '' });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Submit Your Startup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Startup Name</label>
          <input
            type="text"
            name="name"
            value={startup.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={startup.description}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Funding Goal</label>
          <input
            type="text"
            name="fundingGoal"
            value={startup.fundingGoal}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
            value={startup.image}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit Startup
        </button>
      </form>
    </div>
  );
};

export default StartupForm;