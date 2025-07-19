import React from 'react'

const Modal = () => {
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-white rounded-xl shadow-2xl p-8">
        <h3 className="font-bold text-2xl text-green-600 mb-2">Welcome Back</h3>
        <p className="mb-6 text-gray-500">Sign in to continue. Press ESC or click below to close.</p>
        <form className="space-y-5 bg-white p-4 rounded-lg shadow-md">
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
        </form>
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
