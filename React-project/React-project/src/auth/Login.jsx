import { sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate} from "react-router-dom";
import { __AUTH } from '../backend/firebaseConfig';
import Spinner from '../helpers/Spinner';
import { AuthContextAPI } from '../context/AuthContext';
import Logo from '../assets/logo.png';
import sideImg from '../assets/side-img.svg'

const Login = () => {

  let [data, setData] = useState({
    email: "",
    passwd: "",
  })
  let navigate = useNavigate()

  let {setAuthUser} = useContext(AuthContextAPI) //! We are getting setAuthUser by using useContext from AuthContextAPI (destructuring)

  let {email, passwd} = data

  const [togglePassword, setTogglePassword] = useState(false)
  const [isloading, setIsLoading] = useState(false)

  let handleSubmit = async (e) =>{
    e.preventDefault()
    setIsLoading(true)
    try{

      let obj = await signInWithEmailAndPassword(__AUTH, email, passwd)

      let {user} = obj
      console.log(user)

      if(user.emailVerified == true){
        toast.success("Login successful")

        setAuthUser(user) //! Giving the user data to setAuth User

        navigate('/')
      }
      else{
        toast.error("Verify your email")

        sendEmailVerification(user)
      }

    }catch(error){

      toast.error(error.message.slice(22))

    }finally{

      setIsLoading(false)

    }
  }
  let handleChange = async (e) =>{

    let value = e.target.value;
    let key = e.target.name;
    setData({...data, [key]:value})

  }
  
  return (
    <div className='flex text-white overflow-hidden'>
            <section className="h-[calc(100vh)] w-full md:w-1/2 bg-slate-900 flex flex-col items-center justify-center">
                <main className='w-3/4 p-9'>
                <img src={Logo}alt="" className='h-[70px]'/>
                    <h1 className='text-center text-2xl font-bold'>Log in to your account</h1>
                    <p className='text-center text-sm text-gray-500 pb-7'>Welcome back! Please enter your details</p>
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

                        <div className='flex flex-col gap-1 relative'>
                            <label htmlFor="password" className='text-sm'>Password</label>
                            <input 
                                type={togglePassword ? "text" : "password"} 
                                name="passwd" 
                                value={passwd} 
                                onChange={handleChange} 
                                className='w-4/5 px-2 py-2 bg-slate-700 rounded-lg relative'
                            />
                            <div 
                                className="absolute top-9 right-22 cursor-pointer"
                                onClick={() => setTogglePassword(!togglePassword)}
                            >
                                {togglePassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </div>
                        </div>
                        
                        <div>
                            <div className="py-1 flex justify-center gap-1 text-sm  text-white">
                                <p>Don't have an account? </p>
                                <NavLink to="/auth/register" className="text-blue-600"> Sign-up</NavLink>
                            </div>
                            <div className=" flex justify-center text-sm  text-white">
                                <NavLink to="/auth/forget-password" className="text-blue-600">Forget Password</NavLink>
                            </div>
                        </div>
                        <div className="flex justify-center p-3">
                            <button
                            type="submit"
                            className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-900 hover:border-blue950 w-[100%] text-md font-semibold"
                            >
                                Login
                            </button>
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

export default Login