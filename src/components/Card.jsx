import React, { use, useState, useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import {FaHeart} from "react-icons/fa"
import { AuthContext } from '../contexts/AuthProvider';
import Swal from 'sweetalert2'

export const Card = ({item}) => {
    const {name,image,price,recipe, _id} = item;
    const[isHeartFillted, setIsHeartFillted]=useState(false);
    const {user}= useContext(AuthContext);

    const navigate= useNavigate();
    const location= useLocation();

    //add to cart
    const handleAddtoCart = (item) =>{
        // console.log("btn clicked")
        if (user && user?.email){
            const cartItem= {menuItemId:_id,name, quentity:1,image,price,email:user.email}
            // console.log(cartItem);
            fetch('http://localhost:6001/carts',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(cartItem)
            }).then(res=>res.json()).then(data=>{
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Item added to cart',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            });
        }else{
            Swal.fire({
            title: "Are you sure?",
            text: "Please create an account or login",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
                navigate('/signup', {state:{from: location  }})
            }
        });
        }
    }
    const handleHeartClick = () => {
        setIsHeartFillted(!isHeartFillted)
    }
  return (
    <div className="card w-96 shadow-sm bg-white">
        <div className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${isHeartFillted ? "text-rose-500": "text-white"}`}
        onClick={handleHeartClick}>
            <FaHeart className="h-5 w-5 cursor-pointer"/>
        </div>
        <Link to={`/menu/${item._id}`}>
        <figure>
            <img
            src={item.image}
            alt="" 
            className='hover:scale-105 transition-all duration-200 md:h-72'/>
        </figure>
        </Link>
    <div className="card-body">
        <Link to={`/menu/${item._id}`}><h2 className='card-title'>{item.name}</h2></Link>
        <p>Description of the item</p>
        <div className="card-actions justify-between items-center mt-2">
            <h5 className='font-semibold'><span className='text-sm text-red-500'>$</span>{item.price}</h5>
            <button className="btn bg-green-500 text-white " onClick={() => handleAddtoCart(item)}>Buy Now</button>
        </div>
    </div>
    </div>
    
  )
}
export default Card