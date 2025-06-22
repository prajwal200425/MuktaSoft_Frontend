import React from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <SideBar/>
    </>
  )
}

export default Layout