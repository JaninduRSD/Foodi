import React from 'react'
import { Outlet } from 'react-router';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer'
import "../App.css"

export const Main = () => {
  return (
    <div>
        <Navbar/>
<<<<<<< HEAD
        <div className='min-h-screen'>
          <Outlet/>
        </div>
=======
        <Outlet/>
>>>>>>> 311fed178f43b7502cd10c212b5eff20198358f9
        <Footer/>
    </div>
  )
}
export default Main;