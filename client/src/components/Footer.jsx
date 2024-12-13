import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        <div className=' flex mx-10 flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>
            <div>
                <img src={"Logo.png"} className='mb-5 w-44' alt="" />
                <h1 className='text-xl font-semibold'>About Us</h1>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <Link to={'/'}><li>HOME</li></Link>
                    <li>ABOUT US</li>
                    <li>DELIVERY</li>
                    <li>PRIVACY POLICY</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 9393483xxx</li>
                    <li>contact@webknits.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5  text-sm text-center'>Copyright 2024</p>
        </div>
    </div>
  )
}

export default Footer