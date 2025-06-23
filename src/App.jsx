import React  from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from "./pages/Layout";
import Login from "./pages/login"
export default function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>

        </Route>
        <Route path="/login" element={<Login/>}>

        </Route>

      </Routes>
    </BrowserRouter>
    </>
    
  );
}
