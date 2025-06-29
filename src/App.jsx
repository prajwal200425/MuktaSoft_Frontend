import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from "./pages/Layout";
import Login from "./pages/login"
import Home from './pages/Home';
import ProjectSearch from './pages/ProjectSearch'
import ProjectForm from './pages/ProjectForm';
import ProjectSuccess from './pages/ProjectSuccess';
import CreateEstimate from './pages/CreateEstimate';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/project-search" element={<ProjectSearch />} />
            <Route path="/project-form" element={<ProjectForm />} />
            <Route path="/project-sucess" element={<ProjectSuccess />} />
            <Route path="/CreateEstimate" element={<CreateEstimate />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App