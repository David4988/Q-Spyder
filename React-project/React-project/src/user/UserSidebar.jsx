import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdAccountBox } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";

const UserSidebar = () => {
  return (
    <div className='h-[100%] w-1/5 bg-slate-600 shrink-0'>
      <ul className='flex flex-col my-2 mx-4 justify-center relative gap-3'>
        <li className='text-white  font-semibold '>
          <NavLink to="/user-profile" end className={(obj)=>{
             let {isActive}= obj;
             return `flex gap-2 w-[100%] hover:bg-[#7671be] rounded-lg py-2 px-4 ${isActive && `bg-[#877EFF]`}`}} ><span className='relative top-1.5'><MdAccountBox  /></span><span>My Account</span></NavLink>
        </li>
        <li className='text-white font-semibold'>
          <NavLink to="/user-profile/user-picture" end className={(obj)=>{
             let {isActive}= obj;
             return `flex gap-2 w-[100%] hover:bg-[#7671be] rounded-lg py-2 px-4 ${isActive && `bg-[#877EFF]`}`}}><span className='relative top-1.5'><AiFillPicture /></span><span>Update Picture</span></NavLink>
        </li>
        <li className='text-white font-semibold '>
          <NavLink to="/user-profile/user-profile" end className={(obj)=>{
             let {isActive}= obj;
             return `flex gap-2 w-[100%] hover:bg-[#7671be] rounded-lg py-2 px-4 ${isActive && `bg-[#877EFF]`}`}}>Update Profile</NavLink>
        </li>
        <li className='text-white font-semibold '>
          <NavLink to="/user-profile/user-password/" end className={(obj)=>{
             let {isActive}= obj;
             return `flex gap-2 w-[100%] hover:bg-[#7671be] rounded-lg py-2 px-4 ${isActive && `bg-[#877EFF]`}`}}>Update Password</NavLink>
        </li>

      </ul>
    </div>
  )
}

export default UserSidebar