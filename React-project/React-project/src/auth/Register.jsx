import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import toast from 'react-hot-toast'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate} from "react-router-dom";
import { __AUTH } from "../backend/firebaseConfig";
import Spinner from "../helpers/Spinner";
import sideImg from "../assets/side-img.svg"
import Logo from "../assets/logo.png"


const Register = () => {
    const [togglePassword, setTogglePassword] = useState(false)
    const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false)
    let navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
let [data, setData] = useState({
  userName: "",
  email: "",
  passwd: "",
  confirmpasswd: "",
})
  let {userName, email, passwd, confirmpasswd} = data

  let handleChange = (e) =>{
    let value = e.target.value;
    let key = e.target.name;
    setData({...data, [key]:value})
  }
  let handleSubmit = async (e) =>{
    e.preventDefault()
    // console.log(data)
    setIsLoading(true)
    try{
      if(passwd !== confirmpasswd){
        toast.error("Confirm Password does not match")
        setData({...data, confirmpasswd: ""})
      }else{
        let obj = await createUserWithEmailAndPassword(
          __AUTH, email, passwd
        ) //? If successful, creating an account and storing it as an object
        console.log(obj)
        let {user} = obj
      
      await updateProfile(user, {
        displayName:userName,
        photoURL:"https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid"
      })
      sendEmailVerification(user)
      toast("Verification link sent")
      toast.success("User Registered")
      navigate("/auth/login")
    }
    }catch(error){
      console.log(error)
      toast.error(error.message.slice(22))
    }finally{
      setIsLoading(false)
    }
  }


  return (
    <div className='flex text-white overflow-hidden'>
            <section className="h-screen w-full md:w-1/2 bg-slate-900 flex flex-col items-center justify-center">
                <main className='w-3/4 p-9'>
                <img src={Logo}alt="" className='h-[70px]'/>
                <h1 className='text-center text-2xl font-semibold '>Create a new account</h1>
                <p className=' text-center text-sm text-gray-500 pb-7'>To use Music Hub, Please enter your details</p>
                    <form className='flex flex-col justify-center gap-4' onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-1'>
                        <label htmlFor="" className='text-sm'>UserName</label>
                        <input type="text" name="username" value={userName} onChange={handleChange} className='w-4/5 px-2 py-2 bg-slate-700 rounded-lg'/>
                        </div>
                        
                        <div className='flex flex-col gap-1'>
                        <label htmlFor="" className='text-sm'>Email</label>
                        <input type="email" name='email' value={email} onChange={handleChange} className='w-4/5 px-2 py-2 bg-slate-700 rounded-lg'/>
                        </div>

                        <div className='flex flex-col gap-1 relative'>
                        <label htmlFor="" className='text-sm'>Password</label>
                        <input 
                            type={togglePassword ?"text":"password"} 
                            name="passwd" 
                            value={passwd} 
                            onChange={handleChange} 
                            className='w-4/5 px-2 py-2 bg-slate-700 rounded-lg relative'
                        />
                        {togglePassword ? (
                            <div 
                                className="absolute top-9 right-22 cursor-pointer"
                                onClick={() => setTogglePassword(!togglePassword)}
                            >
                                <FaEyeSlash size={20} />
                            </div>
                        ) : (
                            <div 
                                className="absolute top-9 right-22 cursor-pointer"
                                onClick={() => setTogglePassword(!togglePassword)}
                            >
                                <FaEye size={20} />
                            </div>
                        )}
                        </div>
                        
                        <div className='flex flex-col gap-1 relative'>
                        <label htmlFor="" className='text-sm'>Confirm Password</label>
                        <input 
                            type={toggleConfirmPassword ?"text":"password"} 
                            name='confirmPasswd' 
                            value={confirmpasswd} 
                            onChange={handleChange} 
                            className='w-4/5 px-2 py-2 bg-slate-700 rounded-lg'
                        />
                        {toggleConfirmPassword ? (
                            <div 
                                className="absolute top-9 right-22 cursor-pointer"
                                onClick={() => setToggleConfirmPassword(!toggleConfirmPassword)}
                            >
                                <FaEyeSlash size={20} />
                            </div>
                        ) : (
                            <div 
                                className="absolute top-9 right-22 cursor-pointer"
                                onClick={() => setToggleConfirmPassword(!toggleConfirmPassword)}
                            >
                                <FaEye size={20} />
                            </div>
                        )}
                        </div>
                        <div>
                            <div className="py-1 flex justify-center gap-1 text-sm  text-white">
                                <p>Don't have an account? </p>
                                <NavLink to="/auth/login" className="text-blue-600"> Sign-in</NavLink>
                            </div>
                            <div className=" flex justify-center text-sm  text-white">
                                <NavLink to="/auth/forget-password" className="text-blue-600">Forget Password</NavLink>
                            </div>
                        </div>
                        <button className='w-4/5 py-1.5 bg-blue-600 rounded-lg hover:bg-blue-800'>Sign Up</button>
                    </form>
                </main>
            
            </section>
            <section className='hidden md:block lg:block h-screen w-1/2 object-contain overflow-hidden'>
                <img src={sideImg} />
            </section>
            {isLoading===true && < Spinner />}
        </div>
  );
};

export default Register;
