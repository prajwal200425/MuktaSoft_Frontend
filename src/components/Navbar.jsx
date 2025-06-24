import React, { useState } from "react";
import { Menu } from "lucide-react";
import { assests } from "../assets/assests";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <header className="bg-white h-16 shadow-md px-4 flex items-center justify-between sticky top-0 z-40">

      <div className="flex items-center gap-4 min-w-0">
        <img
          src={assests.logo}
          alt="Logo"
          className="h-10 w-auto max-w-[120px] object-contain"
        />

        <div className="text-lg lg:text-xl font-bold text-gray-800 whitespace-nowrap truncate">
          City Municipal Corporation
        </div>


        <nav className="hidden lg:flex gap-2 text-sm text-gray-500 ml-4 items-center">
          <span className="font-medium">WMS</span>
          <span>/</span>
          <span className="text-gray-600">Project</span>
        </nav>
      </div>


      <div className="flex items-center gap-4">

        <div className="hidden md:flex items-center gap-4">
          <select className="text-sm border px-3 py-1.5 rounded-md text-gray-700 bg-white shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100">
            <option>City</option>
          </select>

          <select className="text-sm border px-3 py-1.5 rounded-md text-gray-700 bg-white shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100">
            <option>English</option>
          </select>
        </div>

        <Link to="/login">
          <img
            src={assests.profile}
            className="w-9 h-9 bg-[#043554] text-white flex items-center justify-center rounded-full text-base font-semibold shadow-md cursor-pointer"
            alt="Profile"
          />
        </Link>

        <span className="font-semibold text-[#043554] text-sm whitespace-nowrap hidden sm:block">
          MUKTAsoft
        </span>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>


      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white border rounded-md shadow-md p-4 flex flex-col gap-3 w-48 z-50 md:hidden">
          <select className="text-sm border px-3 py-1.5 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100">
            <option>City</option>
          </select>

          <select className="text-sm border px-3 py-1.5 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100">
            <option>English</option>
          </select>
        </div>
      )}
    </header>
  );
}
