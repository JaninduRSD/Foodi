import React from 'react'

const Testamonial = () => {
  return (
    <div className='section-container'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
            <div className='md:w-1/2'>
                <img src="/images/home/testimonials/testimonials.png" alt=""/>
            </div>
            <div className='md:w-1/2'>
                <div className='text-left md:w-4/5'>
                    <p className='subtitles'>Testimonials</p>
                    <h2 className='title'>What Our Customers Say About Us</h2>
                    <blockquote className='my-5 text-secondary leading-[30px]'>
                        "I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable"
                    </blockquote>

                    <div>
                        <div className="avatar-group -space-x-6">
                            <div className="avatar">
                                <div className="w-12">
                                <img src="/images/home/testimonials/tetimonial1.png" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
                                </div>
                            </div>
                            <div className="avatar avatar-placeholder">
                                <div className="bg-neutral text-neutral-content w-12">
                                <span>+99</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testamonial
