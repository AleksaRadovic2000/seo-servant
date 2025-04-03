import React from 'react'
import Sidebar from '../components/Sidebar'
import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ToolsLayout = () => {
  return (
    <>
        <Header />
        <div>
            <Sidebar />
            <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default ToolsLayout