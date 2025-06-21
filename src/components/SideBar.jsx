// Sidebar.jsx
import React from "react";
import { Home, FileText, Folder, BarChart2, HelpCircle } from "lucide-react";

const links = [
  { icon: <Home />, label: "Home" },
  { icon: <FileText />, label: "Forms" },
  { icon: <Folder />, label: "Projects" },
  { icon: <BarChart2 />, label: "Reports" },
  { icon: <HelpCircle />, label: "Help" },
];

export default function SideBar() {
  return (
    <div
      className={`bg-[#043554] text-white w-64 min-w-[16rem] h-full p-4 space-y-6 fixed lg:static z-40 transform lg:translate-x-0 transition-transform duration-200 ease-in-out ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="text-xl font-semibold border-b pb-4">City Municipal Corporation</div>
      <nav className="flex flex-col gap-4">
        {links.map(({ icon, label }) => (
          <a
            href="#"
            key={label}
            className="flex items-center gap-4 px-3 py-2 hover:bg-white hover:text-[#043554] rounded"
          >
            {icon}
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
