import React from 'react'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import BeforeFooter from '../subPages/beforFooter/BeforeFooter'

export default function MainLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <BeforeFooter/>
    <Footer/>
    </>
)
}
