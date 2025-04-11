import React, { useState } from 'react'
import Spinner from '../helpers/Spinner';
import { NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { sendPasswordResetEmail } from 'firebase/auth';
import { __AUTH } from '../backend/firebaseConfig';

const UpdatePassword = () => {
    const [isloading, setIsLoading] = useState(false)
    let navigate = useNavigate()

    let [email, setEmail]=useState("")

    let handleChange = (e) =>{
        setEmail(e.target.value)
    }

    let handleSubmit = async (e) =>{
        e.preventDefault()
        setIsLoading(true)
        try{

            await sendPasswordResetEmail(__AUTH,email)

            toast.success("Reset link sent to Email")
            navigate("/auth/login")
        }catch(e){
            toast.error(e.message.slice(22))
        }
    }  
  return (
    <section className="h-[calc(100vh-70px)] w-[100%] bg-slate-950 flex flex-col items-center justify-center">
      
      <div className=" w-[30%] bg-slate-700 px-4 py-3 rounded-xl">
        <header></header>
        <main className="p-2">
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
            <h1 className="text-center text-3xl font-semibold pb-3 text-white">
        Update Password
      </h1>
            <label htmlFor="email" className="block text-md font-semibold text-white">
                Email 
              </label>
              <input
                type="email"
                id="email"
                placeholder="enter email"
                className="outline-none border-1 w-[100%] my-1 bg-slate-700 rounded-md py-1 pl-2 border-gray-300 placeholder:text-gray-500"
                required
                name="email"
                onChange={handleChange}
                value={email}
              />
              
              <div className="flex justify-center px-1 pt-2 pb-1">
                <button
                  type="submit"
                  className="bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 hover:border-blue950 w-[100%] text-md font-semibold"
                >
                  Reset Password
                </button>
              </div>
              <div className="flex justify-center text-sm  text-white  px-1">
                
                <NavLink to="/auth/login" className="text-red-500 hover:text-red-600 block w-[100%] text-md font-semibold text-center py-2 px-4 rounded-md">Cancel</NavLink>
              </div>
            </div>
          </form>
        </main>
      </div>
      {isloading===true && < Spinner />}
    </section>
  )
}

export default UpdatePassword