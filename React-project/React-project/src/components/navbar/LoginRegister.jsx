import React from 'react'
import { NavLink } from 'react-router-dom';

const LoginRegister = () => {
  return (
    <div className='flex'>
          <li>
          <NavLink
            to="/auth/login"
            className={(obj) => {
              let { isActive } = obj;
              return `py-2 px-4 rounded-lg hover:cursor-pointer hover:bg-purple-700 text-white ${
                isActive && "bg-purple-500 text-white"
              }`
            }}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/auth/register"
            className={(obj) => {
              let { isActive } = obj;
              return `py-2 px-4 rounded-lg hover:cursor-pointer hover:bg-purple-700 text-white ${
                isActive && "bg-purple-500 text-white"
              }`;
            }}
          >
            Register 
          </NavLink>
        </li>

        </div>
  )
}

export default LoginRegister