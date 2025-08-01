import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-amber-50'>
    <div className="flex w-52 flex-col gap-4 bg-amber-50">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </div>
  )
}
export default LoadingSpinner;
