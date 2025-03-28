import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdAccountBox } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";

const UserSidebar = () => {
  return (
    <div className='h-[100%] w-1/5 bg-slate-600'>
      <ul className='flex flex-col my-2 mx-4 gap-4 justify-center relative'>
        <li className='text-white  font-semibold w-[100%] hover:bg-blue-800 rounded-lg py-2 px-4'>
          <NavLink to="/user-profile" className='flex gap-2'><MdAccountBox  /><span>My Account</span></NavLink>
        </li>
        <li className='text-white font-semibold w-[100%] block hover:bg-blue-800 rounded-lg py-2 px-4'>
          <NavLink to="/user-profile/user-picture" className='flex gap-2'><AiFillPicture /><span>Update Picture</span></NavLink>
        </li>
        <li className='text-white font-semibold w-[100%] block hover:bg-blue-800 rounded-lg py-2 px-4'>
          <NavLink to="/user-profile/user-profile">Update Profile</NavLink>
        </li>
        <li className='text-white font-semibold w-[100%] block hover:bg-blue-800 rounded-lg py-2 px-4'>
          <NavLink to="/user-profile/user-password/">Update Password</NavLink>
        </li>
        
      </ul>
    </div>
  )
}

export default UserSidebar