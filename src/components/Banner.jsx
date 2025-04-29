import React from 'react'
import banner from '/images/home/banner.png'
import bimg from "/images/home/b-food1.png"

export const Banner = () => {
  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% tO-[#FCFCFC] to-100%'>
      <div className='py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
        {/* image */}
        <div className='md:w-1/2'>
          <img src={banner} alt=""/>
          <div className='flex flex-col md:flex-row items-center justify-around -mt-14 gap-4'>
            <div className='flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
              <img src={bimg} alt='' className='rounded-2xl'/>
              <div className='space-y-1'>
                <h5 className='font-medium mb-1'>Spicy noodles</h5>
                <div className="rating rating-sm">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                </div>
                <p className='text-red-500'>$ 18.00</p>
              </div>
            </div>
            <div className='sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
              <img src={bimg} alt='' className='rounded-2xl'/>
              <div className='space-y-1'>
                <h5 className='font-medium mb-1'>Spicy noodles</h5>
                <div className="rating rating-sm">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                </div>
                <p className='text-red-500'>$ 18.00</p>
              </div>
            </div>
          </div>
        </div>
        {/* text */}
        <div className='md:w-1/2 space-y-7 px-4'>
          <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>Dive into Delights of Delectable <span className='text-green-600'>Food</span></h2>
          <p className='text-xl text-black'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate craftsmanship</p>
          <button className='btn bg-green-500 px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
        </div>
        


      </div>
    </div>
  )
}
export default Banner