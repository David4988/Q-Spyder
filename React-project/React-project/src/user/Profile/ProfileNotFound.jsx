import React from 'react'
import { NavLink } from 'react-router-dom'

const ProfileNotFound = () => {
  return (
    <div className='h-[150px] w-[100%] flex flex-col items-center justify-center gap-4'>
        <h2 className='text-white'>User Data not Present</h2>
        <NavLink to="/user-profile/user-profile" className='text-white py-2 px-4 bg-blue-600 rounded-xl'>Add User Data</NavLink>
    </div>
  )
}

export default ProfileNotFound