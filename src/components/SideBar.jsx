import React, { useState } from "react";
import {
  Home,
  FileText,
  Folder,
  BarChart2,
  HelpCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState("Home");
  const navigate = useNavigate();

  return (
    <div className="w-12 bg-gradient-to-b from-[#032b40] to-[#06506d] text-white min-h-screen fixed lg:static z-50 p-2 flex flex-col items-center">
      
      <nav className="mt-8 flex flex-col gap-4 cursor-pointer">

        <button
          onClick={() => {
            setActiveLink("Home");
            navigate("/");
          }}
          className={`p-2.5 rounded-lg transition-all duration-300 ${
            activeLink === "Home"
              ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105"
              : "hover:bg-orange-100 hover:text-[#043554] text-white"
          }`}
          title="Home"
        >
          <Home size={20} />
        </button>

        <button
          onClick={() => {
            setActiveLink("Forms");
            navigate("/forms");
          }}
          className={`p-2.5 rounded-lg transition-all duration-300 ${
            activeLink === "Forms"
              ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105"
              : "hover:bg-orange-100 hover:text-[#043554] text-white"
          }`}
          title="Forms"
        >
          <FileText size={20} />
        </button>

        <button
          onClick={() => {
            setActiveLink("Projects");
            navigate("/projects");
          }}
          className={`p-2.5 rounded-lg transition-all duration-300 ${
            activeLink === "Projects"
              ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105"
              : "hover:bg-orange-100 hover:text-[#043554] text-white"
          }`}
          title="Projects"
        >
          <Folder size={20} />
        </button>

        <button
          onClick={() => {
            setActiveLink("Reports");
            navigate("/reports");
          }}
          className={`p-2.5 rounded-lg transition-all duration-300 ${
            activeLink === "Reports"
              ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105"
              : "hover:bg-orange-100 hover:text-[#043554] text-white"
          }`}
          title="Reports"
        >
          <BarChart2 size={20} />
        </button>

        <button
          onClick={() => {
            setActiveLink("Help");
            navigate("/help");
          }}
          className={`p-2.5 rounded-lg transition-all duration-300 ${
            activeLink === "Help"
              ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105"
              : "hover:bg-orange-100 hover:text-[#043554] text-white"
          }`}
          title="Help"
        >
          <HelpCircle size={20} />
        </button>

      </nav>

    </div>
  );
}
