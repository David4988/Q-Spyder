import React from 'react'
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='flex bg-slate-950 min-h-[calc(100vh-70px)] text-white'>
        <AdminSidebar />
        <Outlet />
    </div>
    
  )
}

export default AdminLayout