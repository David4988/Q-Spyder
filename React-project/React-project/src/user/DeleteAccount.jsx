import React, { useContext, useState } from 'react'
import { UserContextAPI } from '../context/UserContext'
import { AuthContextAPI } from '../context/AuthContext'
import { deleteUser } from 'firebase/auth'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { deleteDoc, doc } from 'firebase/firestore'
import { __DB } from '../backend/firebaseConfig'

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
    <div className='h-[100%] w-[100%] flex items-center justify-center text-white'>
        <aside className='min-h-[300px] w-[40%] bg-slate-900 rounded-xl p-4 flex flex-col items-center gap-7'>
            <h2 className=' text-center text-xl font-bold'>Delete Account</h2>
            <form action="" className='flex flex-col gap-5' onSubmit={DeleteUser}>
            <div>
                <p>Do you really want to delete the account?</p>
                <br />
                <p>If yes, Enter "Delete Account"</p>
            </div>
            <input type="text" onChange={handleChange}  placeholder='Delete Account' className='bg-slate-700 w-[90%] px-3 py-2 rounded'/>
            <button className='text-white bg-red-500 w-[90%] rounded py-2 px-2'>Delete Account</button>
            </form>
        </aside>
    </div>
  )
}

export default DeleteAccount