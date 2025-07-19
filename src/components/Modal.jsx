import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa'; // commonly used for Google login

const Modal = () => {
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-white rounded-xl  py-4 px-8">
        <h3 className="font-bold text-2xl text-green-600 mb-2">Welcome Back</h3>
        <p className="mb-6 text-gray-500">Sign in to continue. Press ESC or click below to close.</p>
        <form className="space-y-5 bg-white px-4 rounded-lg ">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 bg-amber-50">Email</label>
            <input type="email" className="input input-bordered w-full bg-amber-50 border-black" placeholder="you@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 bg-amber-50">Password</label>
            <input type="password" className="input input-bordered w-full bg-amber-50 border-black" placeholder="Password" />
          </div>
          <div className="flex justify-between items-center">
            <a className="text-green-600 hover:underline text-sm" href="#">Forgot password?</a>
          </div>
          <button className="btn bg-green-600 hover:bg-green-700 text-white w-full mt-2 rounded-full font-semibold transition">Login</button>
          <p className='text-center'>Don't have an account?<Link to="/signup" className='text-green-600 hover:underline'>Signup Now</Link></p>
        </form>
        <div className='text-center mt-6 space-x-3'>
            <button className="btn btn-circle hover:bg-green-600 hover:text-white bg-gray-300 text-black border-0 ">
                <FaGoogle />
            </button>
            <button className="btn btn-circle hover:bg-green-600 hover:text-white bg-gray-300 text-black border-0 ">
                <FaFacebook />
            </button>
            <button className="btn btn-circle hover:bg-green-600 hover:text-white bg-gray-300 text-black border-0 ">
                <FaInstagram />
            </button>
        </div>
        <div className="modal-action mt-6 flex justify-end">
          <form method="dialog">
            <button className="btn btn-outline rounded-full">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default Modal
