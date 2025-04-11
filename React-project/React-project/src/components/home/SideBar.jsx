import React from 'react'
import { MdDashboard } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='h-[calc(100vh-70px)] w-1/5 sticky top-[70px] bg-slate-900 shrink-0'>
      <ul className='flex flex-col my-6 mx-4 justify-center relative gap-3 text-white'>
        <li className=' font-semibold flex flex-col gap-4'>
          <NavLink to="/" className={(obj) => {
            let {isActive} = obj;
            return `flex gap-2 w-[100%] hover:bg-[#7671be] rounded-lg py-2 px-4 ${isActive && `bg-purple-600`}`
          }}>
            <span className='relative top-1.5'><MdDashboard  /></span>
            <span>Dashboard</span>
          </NavLink>
          
        </li>
      </ul>
    </div>
  )
}

export default SideBar