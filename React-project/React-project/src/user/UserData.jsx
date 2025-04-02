import React, { useContext } from 'react'
import { UserContextAPI } from '../context/UserContext'
import { deleteUser } from 'firebase/auth'
import { AuthContextAPI } from '../context/AuthContext'
import toast from 'react-hot-toast'
import { __AUTH } from '../backend/firebaseConfig'
import { NavLink } from 'react-router-dom'


const UserData = () => {
    const {userProfile} = useContext(UserContextAPI)
    const {authUser} = useContext(AuthContextAPI)
    console.log(userProfile)
    const DeleteUser = async () =>{
        window.alert("Do you really want to delete the account? ")
        try{
            await deleteUser(authUser)
            toast.success("Account Deleted")
        }catch(error){
            toast.error(error.message)
        }
        
    }
    
  return (
    <div className='text-white'>
        <h2 className='text-center font-bold text-2xl pt-2 pb-4 '>Personal Info</h2>
        <article>
            <div className='flex flex-wrap gap-3'>
                <div className='flex flex-col gap-1 w-[45%] bg-slate-600 h-16 p-2 rounded'>
                    <h3 className='font-semibold text-[#877EFF]'>Phone Number : </h3>
                    <p>{userProfile?.phone}</p>
                </div>
                <div className='flex flex-col gap-1 w-[45%] bg-slate-600 h-16 p-2 rounded'>
                    <h3 className='font-semibold text-[#877EFF]'>Date Of Birth : </h3>
                    <p>{userProfile?.dateOfBirth}</p>
                </div>
                <div className='flex flex-col gap-1 w-[45%] bg-slate-600 h-16 p-2 rounded overflow-clip'>
                    <h3 className='font-semibold text-[#877EFF]'>Languages : </h3>
                    <p className=''>{userProfile?.languages}</p>
                </div>
                <div className='flex flex-col gap-1 w-[45%] bg-slate-600 h-16 p-2 rounded'>
                    <h3 className='font-semibold text-[#877EFF]'>Gender : </h3>
                    <p>{userProfile?.gender}</p>
                </div>
                <div className='flex flex-col gap-1 w-[93%]  bg-slate-600 h-16 p-2 rounded'>
                    <h3 className='font-semibold text-[#877EFF]'>Address : </h3>
                    <p>{userProfile?.address}</p>
                </div>
                <div className='flex justify-end items-center w-full '>
                    <NavLink to="/user-profile/delete-account" className='text-red-600 hover:text-white cursor-pointer px-5 py-2 rounded'>Delete Account</NavLink>
                </div>
                
            </div>
        </article>
    </div>
  )
}

export default UserData