import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContextAPI } from '../context/AuthContext'

const ProfilePic = () => {
    let {authUser}=useContext(AuthContextAPI)
  return (
    <NavLink to="/user-profile">
        <img src={authUser.photoURL} className='h-[30px] w-[30px] rounded-full' />
    </NavLink>
  )
}

export default ProfilePic