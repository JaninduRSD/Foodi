import React, { useContext } from 'react'
import { AuthContext } from "../contexts/AuthProvider";

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut().then(() => {
      alert("Logout")
    }).catch(error => {});
  }
  return (
    <div><div className="drawer drawer-end z-50">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost btn-circle ">
        <div className="w-10 rounded-full">
          {
            user.photoURL? <img className='rounded-full' 
            alt="Tailwind CSS Navbar component"
            src= {user.photoURL} />: <img className='rounded-full'
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          }
        </div>
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li><a href='/update-profile'>Profile</a></li>
      <li><a>Order</a></li>
      <li><a>Setting</a></li>
      <li><a onClick={handleLogout}>Logout</a></li>

    </ul>
  </div>
</div></div>
  )
}
export default Profile;
