import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Home/Footer'

function Layout2() {
  return (
    <div>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout2