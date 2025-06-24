// import React, { useState } from "react";
// import { Home, FileText, Folder, BarChart2, HelpCircle, } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { IoBagSharp } from "react-icons/io5";

// export default function Sidebar() {
//   const [activeLink, setActiveLink] = useState("Home");
//   const navigate = useNavigate();

//   return (
//     <div className="w-12 bg-gradient-to-b from-[#032b40] to-[#06506d] text-white min-h-screen fixed lg:static z-50 p-2 flex flex-col items-center">

//       <nav className="mt-8 flex flex-col gap-4 cursor-pointer">

//         <button
//           onClick={() => {
//             setActiveLink("Home");
//             navigate("/");
//           }}
//           className={`p-2.5 rounded-lg transition-all duration-300 ${activeLink === "Home"
//             ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105"
//             : "hover:bg-orange-100 hover:text-[#043554] text-white"
//             }`}
//           title="Home"
//         >
//           <Home size={20} />
//         </button>

//         <button
//           onClick={() => {
//             setActiveLink("Forms");
//             navigate("/");
//           }}
//           className={`p-2.5 rounded-lg transition-all duration-300 ${activeLink === "Forms"
//             ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105"
//             : "hover:bg-orange-100 hover:text-[#043554] text-white"
//             }`}
//           title="Forms"
//         >
//           <FileText size={20} />
//         </button>

//         <button
//           onClick={() => {
//             setActiveLink("Projects");
//             navigate("/");
//           }}
//           className={`p-2.5 rounded-lg transition-all duration-300 ${activeLink === "Projects"
//             ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105"
//             : "hover:bg-orange-100 hover:text-[#043554] text-white"
//             }`}
//           title="Projects"
//         >
//           <Folder size={20} />
//         </button>

//         <button
//           onClick={() => {
//             setActiveLink("Reports");
//             navigate("/");
//           }}
//           className={`p-2.5 rounded-lg transition-all duration-300 ${activeLink === "Reports"
//             ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105"
//             : "hover:bg-orange-100 hover:text-[#043554] text-white"
//             }`}
//           title="Reports"
//         >
//           <BarChart2 size={20} />
//         </button>

//         <button
//           onClick={() => {
//             setActiveLink("Help");
//             navigate("/");
//           }}
//           className={`p-2.5 rounded-lg transition-all duration-300 ${activeLink === "Help"
//             ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105"
//             : "hover:bg-orange-100 hover:text-[#043554] text-white"
//             }`}
//           title="Help"
//         >
//           <HelpCircle size={20} />
//         </button>

//         <button
//           onClick={() => {
//             setActiveLink("Help");
//             navigate("/");
//           }}
//           className={`p-2.5 rounded-lg transition-all duration-300 cursor-pointer ${activeLink === "Help"
//               ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105"
//               : "hover:bg-orange-100 hover:text-[#043554] text-white"
//             }`}
//           title="Help"
//         >
//           <IoBagSharp size={20} />
//         </button>

//       </nav>

//     </div>
//   );
// }


import React, { useState } from "react";
import {
  Home,
  FileText,
  HelpCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { IoBagSharp } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { RiTodoLine } from "react-icons/ri";
import { MdLocationCity } from "react-icons/md";
import { IoMdBookmarks } from "react-icons/io";
import { BiMessageSquareEdit } from "react-icons/bi";

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState("Home");
  const navigate = useNavigate();

  const links = [
    { name: "Home", icon: <Home size={20} />, path: "/" },
    { name: "BiError", icon: <BiMessageSquareEdit size={20} />, path: "/" },
    { name: "Todo", icon: <RiTodoLine size={20} />, path: "/" },
    { name: "Forms", icon: <FileText size={20} />, path: "/" },
    { name: "city", icon: <MdLocationCity size={20} />, path: "/" },
    { name: "Orders", icon: <MdHomeWork size={20} />, path: "/" },
    { name: "Bag", icon: <IoBagSharp size={20} />, path: "/" },
    { name: "BookMark", icon: <IoMdBookmarks size={20} />, path: "/" },
    { name: "Help", icon: <HelpCircle size={20} />, path: "/" },


  ];

  return (
    <div className="w-12 bg-gradient-to-b from-[#032b40] to-[#06506d] text-white min-h-screen fixed lg:static z-50 p-2 flex flex-col items-center">
      <nav className="mt-8 flex flex-col gap-4 cursor-pointer">
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => {
              setActiveLink(link.name);
              navigate(link.path);
            }}
            className={`p-2.5 rounded-lg transition-all duration-300 cursor-pointer ${
              activeLink === link.name
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105"
                : "hover:bg-orange-100 hover:text-[#043554] text-white"
            }`}
            title={link.name}
          >
            {link.icon}
          </button>
        ))}
      </nav>
    </div>
  );
}
