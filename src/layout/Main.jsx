import React from 'react'
import { Outlet } from 'react-router';
import { Navbar } from '../components/Navbar';
import "../App.css"

export const Main = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <footer>footer</footer>
    </div>
  )
}
export default Main;