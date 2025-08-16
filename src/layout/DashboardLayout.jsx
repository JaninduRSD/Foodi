import React from 'react'
import { FaEdit, FaPlusCircle, FaShoppingBag, FaUser } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'
import { Link } from 'react-router'
import logo from '/logo (1).png'

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open bg-amber-50">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
        Open drawer
        </label>
    </div>
    <div className="drawer-side bg-amber-50">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay bg-amber-50"></label>
        <ul className="menu bg-gray-50 text-black min-h-full w-80 p-4 ">
        {/* Sidebar content here */}
        <li><Link to='/dashboard'><img src={logo} alt='' className='w-20'/><span className='badge badge-primary'></span></Link></li>
        <li><Link to='/dashboard'><MdDashboard/>Dashboard</Link></li>
        <li><Link to='/dashboard/managebooking'><FaShoppingBag/>Manage Booking</Link></li>
        <li><Link to='/dashboard/menu'><FaPlusCircle/>All Menu</Link></li>
        <li><Link to='/dashboard/manageitems'><FaEdit/>Manage Items</Link></li>
        <li><Link to='/dashboard/users'><FaUser/>All Users</Link></li>



        </ul>
    </div>
    </div>
  )
}
export default DashboardLayout
