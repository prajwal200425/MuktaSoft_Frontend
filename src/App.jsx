import React, {useState} from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <SideBar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1">
        <Navbar setSidebarOpen={setSidebarOpen} />
        <main className="p-4">{/* Your main content here */}</main>
      </div>
    </div>
  );
}
