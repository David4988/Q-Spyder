import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import toast from 'react-hot-toast'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate} from "react-router-dom";
import { __AUTH } from "../backend/firebaseConfig";
import Spinner from "../helpers/Spinner";

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
    <section className="h-[calc(100vh-70px)] w-[100%] bg-slate-900 flex flex-col items-center">
      <h1 className="text-center text-3xl font-bold p-3 text-white">
        Register
      </h1>
      <br />
      <div className=" w-[27%] bg-slate-700 px-4 py-3 rounded-xl">
        <header></header>
        <main className="p-2">
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="block text-md font-semibold text-white">
                Username 
              </label>
              <input
                type="text"
                // id="username"
                placeholder="enter username"
                className="outline-none border-1 w-[100%] bg-slate-700 my-1 rounded-md py-1 pl-2 border-gray-300 placeholder:text-gray-500"
                required
                name="userName"
                onChange={handleChange}
                value={userName}
              />
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
              <label
                htmlFor="confirmPassword"
                className="block text-md font-semibold text-white"
              >
                Confirm Password 
              </label>
              <input
                type={toggleConfirmPassword ?"text":"password"}
                id="confirmPassword"
                placeholder="confirm password"
                className="relative outline-none border-1 w-[100%] my-1 rounded-md py-1 pl-2 border-gray-300 placeholder:text-gray-500"
                required
                onChange={handleChange}
                name="confirmpasswd"
                value={confirmpasswd}
              />
              {toggleConfirmPassword ? (
                <FaEyeSlash
                 className="absolute top-25 right-3 cursor-pointer"
                 onClick ={()=> setToggleConfirmPassword(!toggleConfirmPassword)}
                 />
              ):(
                <FaEye
               className="absolute top-25 right-3" 
               onClick={() => setToggleConfirmPassword(!toggleConfirmPassword)} 
               />
              )
              
              }
              </div>
              
              
              <div className="py-3 flex justify-between text-sm  text-white">
                <p>Already have an account?</p>
                <NavLink to="/auth/login" className="text-red-500">Login</NavLink>
              </div>
              <div className="flex justify-center p-3">
                <button
                  type="submit"
                  className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-900 hover:border-blue950 w-[100%] text-md font-semibold"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </main>
      </div>
      {isLoading === true && <Spinner />}
    </section>
  );
};

export default Register;
