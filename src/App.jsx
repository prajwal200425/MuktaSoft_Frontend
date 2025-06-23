import React from 'react'
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from "./pages/Layout";
import Login from "./pages/login"
<<<<<<< HEAD
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> 
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
=======
import ProjectSearch from "./pages/pagesSearch";
export default function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>

        </Route>
        <Route path="/login" element={<Login/>}>

        </Route>
        <Route path="/pagesearch" element={<ProjectSearch/>}>

        </Route>

      </Routes>
    </BrowserRouter>
>>>>>>> d7bd0787038e41cb55f18e3e598e4084fc618722
    </>
  )
}

export default App