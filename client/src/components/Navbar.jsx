import React from 'react'
import { useEffect } from 'react';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = ({categories}) => {
    const [showDrop, setShowDrop] = useState(false);
    useEffect(()=>{
      setTimeout(()=>{
        if(showDrop == true)
        {
          setShowDrop(false);
        }
      },1000*10)
    },[showDrop])
  return (
   <>
   <div className=''>
   <div className="flex flex-col px-4 font-medium md:px-10 lg:px-20 py-5">
     <div className="flex items-center justify-between md:gap-[30px]  gap-[20px] ">
        <Link to={'/'}><img
          src={"Logo.png"}
          className="w-44 md:w-48 lg:w-60 cursor-pointer"
          alt="Logo"
        /></Link>
        <div className="flex-1 relative">
          <input
            type="text"
            id="small-input"
            placeholder="Search..."
            autoCorrect="off"
            autoComplete="off"
            className="hidden md:block w-full p-2 px-4 md:text-base lg:text-lg text-gray-900 border rounded-[10px] border-gray-300 bg-gray-50 outline-none "
          />
          <button className="absolute hidden md:flex top-0 right-0 items-center h-full px-3 bg-red-400 text-white">
            <FaSearch className="text-[20px]" />
          </button>
        </div>
        <div className="relative">
          <img
            src={"profile_icon.png"}
            alt=""
            className="w-6 cursor-pointer"
            onClick={() => setShowDrop((prev) => !prev)}
          />
          <div
            className={`absolute -right-5 pt-4 z-[4] text-black ${
              showDrop ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-50 text-gray-600 rounded">
              <a to={"/profile"} className="cursor-pointer hover:text-black">
                My profile
              </a>
              <a to={"/Order"} className="cursor-pointer hover:text-black">
                Order
              </a>
              <Link to={"/signin"} className="cursor-pointer hover:text-black">
                Signin
              </Link>
              <a to={""} className="cursor-pointer hover:text-black">
                Logout
              </a>
            </div>
          </div>
        </div>
        <a to={"/cart"} className="relative">
          <img src={"cart_icon.png"} alt="" className="w-6 cursor-pointer" />
          <p className="absolute -right-2 -bottom-3 bg-white text-[12px] rounded-full aspect-square font-bold">
            1
          </p>
        </a>
      </div>
     </div>
     <div className="flex-1 relative block md:hidden mx-10 mb-4">
          <input
            type="text"
            id="small-input"
            placeholder="Search..."
            autoCorrect="off"
            autoComplete="off"
            className="w-full p-2 px-3  text-gray-900 border rounded-[10px] border-gray-300 bg-gray-50 outline-none "
          />
          <button className="absolute flex top-0 right-0 items-center h-full px-3 bg-red-400 text-white">
            <FaSearch className="text-[20px]" />
          </button>
      </div>
      <div className="bg-yellow-300 hidden lg:block">
            <nav className="flex flex-wrap w-[80%] mx-auto gap-5 text-[16px] px-5 py-5">
              {
                categories.map((item,idx)=>(
                  <div className="flex justify-center items-center gap-2">{item.main}
                    <span className="mt-1 rotate-90">{<IoIosArrowForward/>}</span>
                  </div>
                ))
              }        
            </nav>
        </div>
      {/* <div className='py-3 bg-zinc-700'>
          <nav className='mx-20 list-none flex gap-10 relative w-[fit-content]'>
              {
                categories.map((item,idx)=>{
                  return (
                    <NavMenuDropDown title={item.main} subcategory={item.subCategories} idx={idx}/>
                  )
                })
              }
          </nav>
      </div> */}
   </div>
    </>
  )
}

export default Navbar