import React, { useState } from 'react'
import { Link } from 'react-router'

export const Card = ({item}) => {
    const[isHeartFillted, setIsHeartFillted]=useState
  return (
    <div className="card w-96 shadow-sm bg-white">
        <Link to={`/menu/${item._id}`}>
        <figure>
            <img
            src={item.image}
            alt="" 
            className='hover:scale-105 transition-all duration-200 md:h-72'/>
        </figure>
        </Link>
    <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>Description of the item</p>
        <div className="card-actions justify-between items-center mt-2">
            <h5 className='font-semibold'><span className='text-sm text-red-500'>$</span>{item.price}</h5>
            <button className="btn bg-green-500 text-white ">Buy Now</button>
        </div>
    </div>
    </div>
    
  )
}
export default Card