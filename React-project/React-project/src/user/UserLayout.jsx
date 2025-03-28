import React from 'react'
import UserSidebar from "./UserSidebar"
import { Outlet } from 'react-router-dom'
const UserLayout = () => {
  return (
    <div className='flex bg-slate-900 h-screen w-full'>
      <UserSidebar />
      <Outlet />
    </div>
    
  )
}

export default UserLayout