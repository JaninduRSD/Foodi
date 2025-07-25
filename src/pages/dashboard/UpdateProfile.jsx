import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../contexts/AuthProvider'
import { useLocation, useNavigate } from 'react-router'

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const name = data.name;
    const photoURL = data.photoURL;
    updateUserProfile(name, photoURL)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-2xl">
      <div className="card-body bg-amber-50 onSubmit={handleSubmit(onSubmit)}">
        <h3 className='font-bold'>Update Your ProfileS</h3>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input {...register("name")}  type="text" className="input mb-2 bg-white shadow-2xl border-1 border-gray-400" placeholder="Name" />
          <label className="label ">Upload Photo</label>
          <fieldset className="fieldset ">
            <input {...register("photoURL")}  type="file" className="file-input bg-white shadow-2xl border-1 border-gray-400" />
            <label className="label">Max size 2MB</label>
          </fieldset>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4 bg-green-500">update</button>
        </fieldset>
      </div>
    </div>
    </div>
  )
}
export default UpdateProfile;
