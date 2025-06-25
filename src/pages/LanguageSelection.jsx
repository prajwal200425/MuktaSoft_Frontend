import React, { useState } from 'react';

const LanguageSelection = () => {
  const [selectedLang, setSelectedLang] = useState('ENGLISH');

  return (
    <div className="min-h-screen bg-blue-950 bg-opacity-80 flex items-center justify-center relative">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Indian_government_building.jpg"
        alt="Background"
        className="absolute w-full h-full object-cover opacity-50"
      />

      <div className="relative z-10 bg-white p-6 rounded shadow-md w-full max-w-sm text-center">
        <div className="flex justify-between items-center mb-6 border-b pb-2">
          <img src="https://muktasoft.in/assets/images/logo.png" alt="Logo" className="h-5" />
          <span className="text-gray-700 text-sm font-medium">State Demo</span>
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          <button
            className={`px-6 py-2 rounded border ${
              selectedLang === 'ENGLISH'
                ? 'bg-orange-500 text-white'
                : 'border-gray-500 text-gray-700'
            }`}
            onClick={() => setSelectedLang('ENGLISH')}
          >
            ENGLISH
          </button>
          <button
            className={`px-6 py-2 rounded border ${
              selectedLang === 'हिंदी'
                ? 'bg-orange-500 text-white'
                : 'border-gray-500 text-gray-700'
            }`}
            onClick={() => setSelectedLang('हिंदी')}
          >
            हिंदी
          </button>
        </div>

        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded">
          Continue
        </button>
      </div>
    </div>
  );
};

export default LanguageSelection;
