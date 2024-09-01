import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Travel/Header'
import Footer from '../Components/Home/Footer'

function Layout3() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout3