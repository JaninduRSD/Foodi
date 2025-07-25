import React from 'react'
import useCart from '../../hooks/useCart';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthProvider';
import { useContext } from 'react';

const CartPage = () => {
    const [cart, refetch] = useCart();
    const {user} = useContext(AuthContext);

    //handle delete
    const handleDelete = (item)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:6001/carts/${item._id}`,{
                    method: 'DELETE'

                }).then(res => res.json()).then(data => {
                    if (data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success",
                        })
                    }
                })
            }
            });
            
    }
  return (
    <div className='section-container '>
        <div className=' bg-gradient-to-r from-[#FAFAFA] from-0% tO-[#FCFCFC] to-100%'>
              <div className='py-24 flex flex-col justify-center items-center gap-8'>
                {/* text */}
                <div className='space-y-7 px-4'>
                  <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>Items Added to The <span className='text-green-600'>Cart</span></h2>
                </div>
                
        
        
              </div>
        </div>

        {/* table cart */}
        <div>
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead className='bg-green-500 text-white'>
                <tr>
                    <th>#</th>
                    <th>Food</th>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    cart.map((item, index)=>(
                        <tr key={index}>
                    <th>{index + 1}</th>
                    <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                            src={item.image}
                            alt="" />
                        </div>
                        </div>
                    </div>
                    </td>
                    <td className='font-medium'>
                    {item.name}
                    </td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <th>
                    <button className="btn btn-ghost text-red-500 btn-xs" onClick={() => handleDelete(item)}>
                        <FaTrash/>
                    </button>
                    </th>
                </tr>
                    ))
                }
                </tbody>
            </table>
            </div>


            {/* customer details */}
            <div className='my-12 flex flex-col md:flex-row justify-between items-start'>
                <div className='md:w-1/2 space-y-3'>
                    <h3 className='font-medium'>Customer Details</h3>
                    <p>Name: {user.displayName}</p>
                    <p>Email: {user.email}</p>
                    <p>User_id: {user.uid}</p>
                </div>
                <div className='md:w-1/2 space-y-3'>
                    <h3 className='font-medium'>Shopping Details</h3>
                    <p>Total Items: {cart.length}</p>
                    <p>Total Price: $0.00</p>
                    <button className='btn btn-primary bg-green-500'>Checkout</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartPage;
