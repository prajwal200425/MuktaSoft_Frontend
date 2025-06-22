import React from "react";
import {
  Home,
  FileText,
  Folder,
  BarChart2,
  HelpCircle
} from "lucide-react";

const links = [
  { icon: Home, label: "Home" },
  { icon: FileText, label: "Forms" },
  { icon: Folder, label: "Projects" },
  { icon: BarChart2, label: "Reports" },
  { icon: HelpCircle, label: "Help" },
];

export default function Sidebar() {
  return (
    <div className="w-16 bg-[#043554] text-white min-h-screen fixed lg:static z-50 p-3 flex flex-col items-center">
      <nav className="mt-10 flex flex-col gap-6">
        {links.map(({ icon: Icon, label }) => (
          <a
            href="#"
            key={label}
            className="p-2 rounded hover:bg-white hover:text-[#043554] transition-colors duration-200"
            title={label} // Tooltip on hover
          >
            <Icon size={24} className="text-white" />
          </a>
        ))}
      </nav>
    </div>
  );
}
