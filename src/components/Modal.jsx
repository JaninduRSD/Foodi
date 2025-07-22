import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa'; // commonly used for Google login
import { AuthContext } from '../contexts/AuthProvider';
import { useContext , useState } from 'react';


const Modal = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();

  const{signUpWithGmail,login}= useContext(AuthContext);
  const {errorMessage, setErrorMessage} = useState("");
  const location =useLocation();
  const navigate = useNavigate();
   const from = location.state?.from?.pathname || "/";
  
  const onSubmit = data => {
    const email = data.email;
    const password = data.password;
    login(email, password).then((result) => {
      const user =result.user;
      alert("Login successful!");
      document.getElementById("my_modal_5").close();
      navigate(from, {replace: true});
    }).catch((error) => {
      setErrorMessage("provide a correct email and password");
      console.log(error);
    });
  }
  
  const handleLogin = () => {
    signUpWithGmail().then((result) => {
      const user = result.user;
      alert("Login successful!");
    }).catch((error) => console.log(error));
      
  }

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-white rounded-xl  py-4 px-8">
        <h3 className="font-bold text-2xl text-green-600 mb-2">Welcome Back</h3>
        <p className="mb-6 text-gray-500">Sign in to continue. Press ESC or click below to close.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white px-4 rounded-lg ">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 bg-amber-50">Email</label>
            <input type="email" className="input input-bordered w-full bg-amber-50 border-black" required {...register("email")} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 bg-amber-50">Password</label>
            <input type="password" className="input input-bordered w-full bg-amber-50 border-black" placeholder="Password" required {...register("password")} />
          </div>
          <div className="flex justify-between items-center">
            <a className="text-green-600 hover:underline text-sm" href="#">Forgot password?</a>
          </div>

          {
            errorMessage ? <p className='text-red-500 text-xs'>{errorMessage}</p>:""
          }

          <button className="btn bg-green-600 hover:bg-green-700 text-white w-full mt-2 rounded-full font-semibold transition">Login</button>
          <p className='text-center'>Don't have an account?<Link to="/signup" className='text-green-600 hover:underline'>Signup Now</Link></p>
        </form>
        <div className='text-center mt-6 space-x-3'>
            <button className="btn btn-circle hover:bg-green-600 hover:text-white bg-gray-300 text-black border-0 " onClick={handleLogin}>
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
