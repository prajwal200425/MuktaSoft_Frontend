import React, {useState} from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from "./pages/Layout";

export default function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}
