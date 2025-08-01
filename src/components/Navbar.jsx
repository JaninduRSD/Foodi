import React, { useEffect, useState } from 'react'
import logo from '/logo (1).png'
import { FaUserPlus } from 'react-icons/fa'; // commonly used for registration
import Modal from './Modal'; // Assuming Modal is in the same directory
import { AuthContext } from '../contexts/AuthProvider'; 
import { useContext } from 'react';
import Profile from './Profile';
import { Link } from 'react-router-dom'
import useCart from '../hooks/useCart'; // Custom hook to fetch cart items

export const Navbar = () => {
    const [isSticky, setSticky]=useState(false);
    //handle scroll functions

    const {user}=useContext(AuthContext);
    console.log(user);
    const [cart, refetch] = useCart();
    console.log(cart);

    useEffect(() => {
        const handleScroll=()=>{
            const offset= window.scrollY;
            if(offset>0){
                setSticky(true)
            }else{
                setSticky(false)
            }
        };

        window.addEventListener("scroll", handleScroll);

        return()=>{
            window.removeEventListener("scroll", handleScroll); // Fixed the event removal
        }
        
    },[])
    const navItems =(
        <>
        <li className="hover:bg-gray-100 rounded-lg">
            <a href='/' className="hover:text-green-500">Home</a>
        </li>
        <li tabIndex={0} className="hover:bg-gray-100 rounded-lg">
            <details>
            <summary className="hover:text-green-500">Menu</summary>
            <ul className="p-2 bg-white shadow-md">
                <li className="hover:bg-gray-100"><a className="hover:text-green-500" href='/menu'>All</a></li>
                <li className="hover:bg-gray-100"><a className="hover:text-green-500">Salad</a></li>
                <li className="hover:bg-gray-100"><a className="hover:text-green-500">Pizza</a></li>
            </ul>
            </details>
        </li>
        <li tabIndex={0} className="hover:bg-gray-100 rounded-lg">
            <details>
            <summary className="hover:text-green-500">Services</summary>
            <ul className="p-2 bg-white shadow-md">
                <li className="hover:bg-gray-100"><a className="hover:text-green-500">Online Order</a></li>
                <li className="hover:bg-gray-100"><a className="hover:text-green-500">Table Booking</a></li>
                <li className="hover:bg-gray-100"><a className="hover:text-green-500">Order Tracking</a></li>
            </ul>
            </details>
        </li>
        <li className="hover:bg-gray-100 rounded-lg">
            <a className="hover:text-green-500">Offers</a>
        </li>
        </>
    )
  return (
    <header className='max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out'>
        <div className={`navbar xl:px-24 ${isSticky ? "shadow-md bg-white transition-all duration-300 ease-in-out": ""}`}>
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box z-[100] mt-3 w-52 p-2 shadow">
                {navItems}
            </ul>
            </div>
            <a href='/'>
                <img src={logo} alt=""/>
            </a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItems}
            </ul>
        </div>
        <div className="navbar-end">
            <button className="btn btn-ghost btn-circle hidden lg:flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
            </button>

            {/* cart */}
            <Link to="/cart-page">
            <label tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-3 lg:flex hidden items-center justify-center">
                <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                <span className="badge badge-sm indicator-item">{cart.length}</span>
                </div>
            </label>
            </Link>

            {
                user?<Profile user={user}/> : <button className="btn bg-green-500 rounded-full px-6 text-white flex items-center gap-2" onClick={()=>document.getElementById('my_modal_5').showModal()}><FaUserPlus/> Login</button>

            }

            <Modal />
        </div>
        </div>
    </header>
  )
}
export default Navbar;