import React from 'react'
import logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom'
const Logo = () => {
  return (
    <NavLink to="/">
        <img src={logo} alt="" className='h-[50px]'/>
    </NavLink>
  )
}

export default Logo