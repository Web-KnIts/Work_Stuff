import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'
import { useEffect } from 'react';

const Profile = () => {
  // const {user,userLoggedIn} = useAuth();
  const userLoggedIn = true;
  const ProtectedRoute = ()=>
  (
    <div className='flex justify-center items-center h-[50vh] flex-col'>
      <h1 className='text-4xl uppercase'>Page Not Found </h1>
      <Link to={'/'}><button className='mt-5 p-4 bg-blue-600 rounded-xl text-white'>Go Back</button></Link>
    </div>
  )

  const ShowProfile = ()=>(
    <div>
      <nav className='flex justify-center items-center gap-5 py-4 list-none'>  
          <li><NavLink to={'/profile/'}  className='p-2 bg-black rounded-lg text-white px-4'>My Profile</NavLink></li>
          <li><NavLink to={'/profile/order'}>All Orders</NavLink></li>
          <li><NavLink to={'/profile/add-address'}>Address</NavLink></li> {/* Added Delivery Address link */}
      </nav>
      <Outlet/>
  </div>   
  )

  return userLoggedIn?<ShowProfile/>:<ProtectedRoute/>
}
export default Profile
