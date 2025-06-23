import React from 'react';

export default function ProjectSearch() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Search Projects</h2>
          <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-100 text-sm font-medium">
            + Create New Project
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">Provide at least one parameter to search for a project</p>

          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Ward</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Ward</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Project Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Type</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Project Name</label>
              <input type="text" placeholder="Enter name" className="w-full px-3 py-2 border border-gray-300 rounded" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Project ID</label>
              <input type="text" placeholder="Enter ID" className="w-full px-3 py-2 border border-gray-300 rounded" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Created from</label>
              <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Created to</label>
              <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded" />
            </div>

            <div className="lg:col-span-2 flex items-center justify-end space-x-4 mt-6">
              <button type="button" className="text-orange-500 hover:underline text-sm">Clear Search</button>
              <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 font-medium">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
