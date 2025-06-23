import React from "react";
import { Wrench, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex-1 p-4 md:p-6 lg:p-8">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 sm:p-6">


        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">MUKTA</h2>
          <div className="bg-orange-500 p-2 rounded-lg">
            <Wrench className="text-white h-5 w-5" />
          </div>
        </div>


        <div className="space-y-3">

          <Link
            to="/project-search"
            className="flex justify-between items-center text-gray-800 bg-white hover:bg-orange-50 hover:text-orange-600 rounded-lg px-3 py-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
          >
            <div className="flex justify-between items-center text-gray-800 bg-white hover:bg-orange-50 hover:text-orange-600 rounded-lg px-3 py-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md">
              <span className="text-sm sm:text-base font-medium">Projects</span>
              <ArrowRight className="h-4 w-4 text-orange-500" />
            </div>
          </Link>

          <div className="flex justify-between items-center text-gray-800 bg-white hover:bg-orange-50 hover:text-orange-600 rounded-lg px-3 py-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md">
            <span className="text-sm sm:text-base font-medium">Estimates</span>
            <div className="flex items-center space-x-2">
              <span className="bg-orange-500 text-white text-xs sm:text-sm rounded-full px-2 py-0.5">19</span>
              <ArrowRight className="h-4 w-4 text-orange-500" />
            </div>
          </div>

          <div className="flex justify-between items-center text-gray-800 bg-white hover:bg-orange-50 hover:text-orange-600 rounded-lg px-3 py-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md">
            <span className="text-sm sm:text-base font-medium">Work Orders</span>
            <div className="flex items-center space-x-2">
              <span className="bg-orange-500 text-white text-xs sm:text-sm rounded-full px-2 py-0.5">30</span>
              <ArrowRight className="h-4 w-4 text-orange-500" />
            </div>
          </div>

          <div className="flex justify-between items-center text-gray-800 bg-white hover:bg-orange-50 hover:text-orange-600 rounded-lg px-3 py-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md">
            <span className="text-sm sm:text-base font-medium">Muster Rolls</span>
            <div className="flex items-center space-x-2">
              <span className="bg-orange-500 text-white text-xs sm:text-sm rounded-full px-2 py-0.5">193</span>
              <ArrowRight className="h-4 w-4 text-orange-500" />
            </div>
          </div>

          <div className="flex justify-between items-center text-gray-800 bg-white hover:bg-orange-50 hover:text-orange-600 rounded-lg px-3 py-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md">
            <span className="text-sm sm:text-base font-medium">Billing Management</span>
            <div className="flex items-center space-x-2">
              <span className="bg-orange-500 text-white text-xs sm:text-sm rounded-full px-2 py-0.5">193</span>
              <ArrowRight className="h-4 w-4 text-orange-500" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;
