import React, { useState } from "react";
import {
  Home,
  FileText,
  Folder,
  BarChart2,
  HelpCircle,
} from "lucide-react";

const links = [
  { icon: Home, label: "Home" },
  { icon: FileText, label: "Forms" },
  { icon: Folder, label: "Projects" },
  { icon: BarChart2, label: "Reports" },
  { icon: HelpCircle, label: "Help" },
];

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <div className="w-16 bg-[#043554] text-white min-h-screen fixed lg:static z-50 p-3 flex flex-col items-center">
      <nav className="mt-10 flex flex-col gap-6">
        {links.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={() => setActiveLink(label)}
            className={`p-2 rounded transition-colors duration-200 ${
              activeLink === label
                ? "bg-red-500 text-white"
                : "hover:bg-white hover:text-[#043554] text-white"
            }`}
            title={label} 
          >
            <Icon size={24} />
          </button>
        ))}
      </nav>
    </div>
  );
}
