import React, { useContext, useState } from 'react'
import { UserContextAPI } from '../context/UserContext'
import { AuthContextAPI } from '../context/AuthContext'
import { deleteUser } from 'firebase/auth'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { deleteDoc, doc } from 'firebase/firestore'
import { __DB } from '../backend/firebaseConfig'
import { FaExclamationTriangle, FaTrashAlt } from 'react-icons/fa'

const DeleteAccount = () => {
    const {userProfile} = useContext(UserContextAPI)
    const {authUser} = useContext(AuthContextAPI)

    const navigate = useNavigate()

    const [text, setText] = useState(null)

    console.log(userProfile)
    const handleChange = (e) =>{
        setText(e.target.value)
    }
    const DeleteUser = async (e) =>{
        e.preventDefault();
        try {
            if (text.toLowerCase().trim() === 'delete account') {
                let user_collection = doc(__DB, "user_profile", authUser?.uid);
                
                console.log(authUser)
                console.log(user_collection)

                await deleteDoc(user_collection);
                await deleteUser(authUser);
                
                toast.success("Account Deleted");

                navigate("/auth/register");
            } else {
                toast.error("Please enter 'Delete Account' to confirm.");
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-950 text-white">
      <aside className="relative min-h-[350px] w-[40%] bg-gray-800 border border-gray-700 shadow-xl rounded-xl p-6 flex flex-col items-center gap-6">
        
        {/* Neon Red Accent Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[65%] h-[4px] bg-red-500 rounded-full "></div>

        {/* Title with Warning Icon */}
        <h2 className="text-center text-2xl font-bold text-red-500 tracking-wide uppercase drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] flex items-center gap-2">
          <FaExclamationTriangle size={24} color="rgb(239, 68, 68)" /> {/* Fixed Icon */}
          Delete Account
        </h2>
        
        <form className="flex flex-col gap-5 w-full items-center" onSubmit={DeleteUser}>
          <div className="text-center">
            <p className="text-gray-300 text-lg font-medium">Are you sure you want to delete your account?</p>
            <br />
            <p className="text-sm text-gray-400 italic">
              Type "<span className="text-red-400 font-semibold drop-shadow-[0_0_5px_rgba(255,0,0,0.7)]">Delete Account</span>" below to confirm.
            </p>
          </div>

          {/* Input Field with Icon */}
          <div className="relative w-[85%]">
            <input
              type="text"
              placeholder="Delete Account"
              className="bg-gray-900 text-white text-center w-full px-3 py-2 rounded-lg outline-none border border-gray-600 focus:ring-2 focus:ring-red-500 focus:bg-gray-800 transition-all duration-200 placeholder-gray-500 shadow-[0_0_12px_rgba(255,0,0,0.6)]"
              onChange={handleChange}
            />
            <div  className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <FaTrashAlt
              size={18}  /* Fixed Icon */
              color="rgb(156, 163, 175)"
              
            />
            </div>
          </div>

          {/* Delete Button with Trash Icon */}
          <button className="relative text-white bg-red-500 w-[85%] rounded-lg py-2 px-2 font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-red-600 hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,0,0,0.8)] flex items-center justify-center gap-2">
            <FaTrashAlt size={18} color="white" /> {/* Fixed Icon */}
            Delete Account
            {/* Glowing Border */}
            <span className="absolute inset-0 rounded-lg border-2 border-red-400 opacity-30"></span>
          </button>
        </form>
      </aside>
    </div>
  )
}

export default DeleteAccount