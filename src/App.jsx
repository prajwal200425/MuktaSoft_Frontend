import React from 'react'
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from "./pages/Layout";
import Login from "./pages/Login"
import Home from './pages/Home';
import ProjectSearch from './pages/ProjectSearch'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/project-search" element={<ProjectSearch />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App