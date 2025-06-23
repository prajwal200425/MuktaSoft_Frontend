import React from 'react'

const ProjectSearch = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">

       
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
          <h2 className="text-3xl font-bold text-gray-800">Search Projects</h2>
          <button className="border border-orange-500 text-orange-500 px-5 py-2.5 rounded-md hover:bg-orange-100 text-base font-medium transition">
            + Create New Project
          </button>
        </div>

       
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <p className="text-gray-700 mb-6 text-base">
            Provide at least one parameter to search for a project
          </p>

         
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ward</label>
              <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Ward</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
              <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Type</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
              <input type="text" placeholder="Enter name" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project ID</label>
              <input type="text" placeholder="Enter ID" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Created from</label>
              <input type="date" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Created to</label>
              <input type="date" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

           
            <div className="md:col-span-2 lg:col-span-3 flex justify-end gap-4 mt-4">
              <button
                type="button"
                className="text-orange-500 hover:underline text-sm font-medium"
              >
                Clear Search
              </button>
              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-2.5 rounded-lg hover:bg-orange-600 font-semibold transition"
              >
                Search
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ProjectSearch;

