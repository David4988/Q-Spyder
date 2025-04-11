import React from 'react'
import UserSidebar from "./UserSidebar"
import { Outlet } from 'react-router-dom'
const UserLayout = () => {
  return (
    <div className='flex bg-gray-950 h-screen w-full'>
      <UserSidebar />
      <Outlet />
    </div>
    
  )
}

export default UserLayout