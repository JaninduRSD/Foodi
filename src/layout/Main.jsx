import React, {useContext} from 'react'
import { Outlet } from 'react-router';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer'
import "../App.css"
import { AuthContext } from '../contexts/AuthProvider';
import  LoadingSpinner  from '../components/LoadingSpinner';

export const Main = () => {
  const {loading} =useContext(AuthContext);
  return (
    <div className='bg-prigmayBG'>
      {
        loading?<LoadingSpinner/>:
        <div>
          <Navbar/>
            <div className='min-h-screen'>
                <Outlet/>
            </div>
          <Footer/>
        </div>
      }
    </div>
      
  )
}
export default Main;