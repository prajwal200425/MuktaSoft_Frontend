// Navbar.jsx
import React from "react";
import { Menu } from "lucide-react";

export default function Navbar({ setSidebarOpen }) {
  return (
    <header className="bg-white h-16 shadow px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          className="lg:hidden"
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
        <nav className="hidden lg:flex gap-4 text-sm text-gray-600">
          <span className="font-medium">WMS</span>
          <span>/</span>
          <span>Project</span>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <select className="text-sm border px-2 py-1 rounded text-gray-700">
          <option>City</option>
        </select>
        <select className="text-sm border px-2 py-1 rounded text-gray-700">
          <option>English</option>
        </select>
        <div className="w-8 h-8 bg-[#043554] text-white flex items-center justify-center rounded-full font-semibold">
          A
        </div>
        <span className="font-semibold text-[#043554] text-sm">mSeva</span>
      </div>
    </header>
  );
}
