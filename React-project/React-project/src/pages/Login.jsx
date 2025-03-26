import { sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate} from "react-router-dom";
import { __AUTH } from '../backend/firebaseConfig';
import Spinner from '../helpers/Spinner';

const Login = () => {

  let [data, setData] = useState({
    email: "",
    passwd: "",
  })
  let navigate = useNavigate()
  let {email, passwd} = data

  const [togglePassword, setTogglePassword] = useState(false)
  const [isloading, setIsLoading] = useState(false)

  let handleSubmit = async (e) =>{
    e.preventDefault()
    setIsLoading(true)
  }
  let handleChange = async (e) =>{
    let value = e.target.value;
    let key = e.target.name;
    setData({...data, [key]:value})

    try{

      let obj = await signInWithEmailAndPassword(__AUTH, email, passwd)
      console.log(obj)
      let {user} = obj
      console.log(user)
      if(user.emailVerified == true){
        toast.success("Login successful")
        navigate('/')
      }
      else{
        toast.error("Verify your email")
        sendEmailVerification(user)
      }

    }catch(error){
      toast.error(error.message)
      setIsLoading(false)
    }finally{
      setIsLoading(false)
    }
  }
  
  return (
    <section className="h-[calc(100vh-70px)] w-[100%] bg-slate-900 flex flex-col items-center justify-center">
      <h1 className="text-center text-3xl font-bold text-red-400 p-3 text-white">
        Login
      </h1>
      <br />
      <div className=" w-[27%] bg-slate-700 px-4 py-3 rounded-xl">
        <header></header>
        <main className="p-2">
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
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
              
              <div className="relative">
              <label htmlFor="password" className="block text-md font- text-white">
                Password 
              </label>

              <input
                type={togglePassword ?"text":"password"}
                id="password"
                placeholder="enter password"
                className="relative outline-none border-1 w-[100%] my-1 rounded-md py-1 pl-2 border-gray-300 placeholder:text-gray-500"
                required
                name="passwd"
                onChange={handleChange}
                value={passwd}
              />
              {togglePassword ? (
                <FaEyeSlash
                 className="absolute top-9 right-3 cursor-pointer"
                 onClick ={()=> setTogglePassword(!togglePassword)}
                 />
              ):(
                <FaEye
               className="absolute top-9 right-3" 
               onClick={() => setTogglePassword(!togglePassword)} 
               />
              )
              
              }         
              
              <div className="py-3 flex justify-between text-sm  text-white">
                <p>Don't have an account?</p>
                <NavLink to="/auth/register" className="text-red-500">Sign-up</NavLink>
              </div>
              <div className="flex justify-center p-3">
                <button
                  type="submit"
                  className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-900 hover:border-blue950 w-[100%] text-md font-semibold"
                >
                  Login
                </button>
              </div>
            </div>
            </div>
          </form>
        </main>
      </div>
      {isloading===true && < Spinner />}
    </section>
  )
}

export default Login