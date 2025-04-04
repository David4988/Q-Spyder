import React from 'react'
import toast from 'react-hot-toast'
import { NavLink, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { __AUTH } from '../../backend/firebaseConfig'

const Logout = () => {

    let navigate = useNavigate()
    const MakeAuthUserToNull = async () =>{
        try{
            await signOut(__AUTH)
            toast.success("Logged Out")
            navigate("/auth/login")
        }catch(e){
            toast.error(e.message)
        }

    }
  return (
    <div>
        <NavLink className={(obj) => {
        let { isActive } = obj;
        return `py-2 px-4 rounded-lg hover:cursor-pointer bg-purple-700 hover:text-white ${
          isActive && " text-white"
        }`
      }} onClick={MakeAuthUserToNull}>Logout</NavLink>
    </div>
    
  )
}

export default Logout