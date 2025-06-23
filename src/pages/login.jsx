import React from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-blue-900 bg-opacity-80 relative">
      <div className="absolute inset-0 bg-[url('/your-building-image.jpg')] bg-cover bg-center opacity-30"></div>
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="text-center mb-6">
          <h1 className="text-sm font-semibold text-gray-500">MUKTASoft</h1>
          <h2 className="text-lg font-semibold text-gray-700">State Demo</h2>
        </div>
        <h3 className="text-xl font-bold text-center mb-4">Login</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">User Name *</label>
            <input type="text" placeholder="Enter username" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="Super QA" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password *</label>
            <input type="password" placeholder="Enter password" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="12345678" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">City *</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>City A</option>
              <option>City B</option>
              <option>City C</option>
            </select>
          </div>
          <button type="submit" className="w-full py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition duration-200">
            Continue
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-sm text-orange-500 hover:underline">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}
