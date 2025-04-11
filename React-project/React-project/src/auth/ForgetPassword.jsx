import React, { useState } from 'react'
import Spinner from '../helpers/Spinner';
import { NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { sendPasswordResetEmail } from 'firebase/auth';
import { __AUTH } from '../backend/firebaseConfig';
import sideImg from "../assets/side-img.svg"
import Logo from "../assets/logo.png"

const ForgetPassword = () => {
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
    <div className='flex text-white overflow-hidden'>
            <section className="h-[calc(100vh)] w-full md:w-1/2 bg-slate-900 flex flex-col items-center justify-center">
                <main className='w-3/4 p-9'>
                <img src={Logo}alt="" className='h-[70px]'/>
                    <h1 className='text-center text-2xl font-bold'>Reset Password</h1>
                    <p className='text-center text-sm text-gray-500 pb-7'>To reset password, Please enter your details</p>
                    <form className='flex flex-col justify-center gap-7' onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email" className='text-sm'>Email</label>
                            <input 
                                type="email" 
                                name='email' 
                                value={email} 
                                onChange={handleChange} 
                                className='w-4/5 px-2 py-2 bg-slate-700 rounded-lg'
                            />
                        </div>

                        
                        <div className="flex flex-col justify-center p-3 gap-4">
                            <button
                            type="submit"
                            className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-900 hover:border-blue-950 w-[80%] text-md font-semibold"
                            >
                                Submit
                            </button>
                            <NavLink
                            to="/auth/login"
                            className=" text-center text-red-600 py-2 px-4 rounded-md w-[80%] text-md font-semibold"
                            >
                                <span className='hover:text-blue-600'>Cancel</span>
                            </NavLink>
                        </div>
                    </form>
                </main>
            </section>
            <section className='hidden md:block lg:block h-[calc(100vh)] w-1/2 object-contain overflow-hidden'>
                <img src={sideImg} alt="Login illustration" />
            </section>
            {isloading && <Spinner />}
        </div>
  )
}

export default ForgetPassword