import React from 'react'
import { Wrench, ArrowRight } from "lucide-react";

const Home = () => {
  const items = [
    { label: "Projects" },
    { label: "Estimates", count: 19 },
    { label: "Work Orders", count: 30 },
    { label: "Muster Rolls", count: 193 },
    { label: "Billing Management", count: 193 },
  ];

  return (
 <div className="bg-white rounded-2xl shadow-md w-full max-w-sm p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">MUKTA</h2>
        <div className="bg-orange-500 p-2 rounded-lg">
          <Wrench className="text-white h-5 w-5" />
        </div>
      </div>

      {/* List Items */}
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-gray-800 hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors"
          >
            <span className="text-sm sm:text-base">{item.label}</span>
            <div className="flex items-center space-x-2">
              {item.count !== undefined && (
                <span className="bg-orange-500 text-white text-xs sm:text-sm rounded-full px-2 py-0.5">
                  {item.count}
                </span>
              )}
              <ArrowRight className="h-4 w-4 text-orange-500" />
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Home;
