import React, { useContext, useState } from 'react'
import { AuthContextAPI } from '../context/AuthContext'
import { __DB } from '../backend/firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'
import toast from 'react-hot-toast'
import { UserContextAPI } from '../context/UserContext'
import Spinner from '../helpers/Spinner'

const UpdateProfile = () => {

  let {authUser} =useContext(AuthContextAPI)
  const {userProfile, isLoading} = useContext(UserContextAPI)
  let [data, setData] = useState({
    phoneNo: userProfile?.phone , //! Here, we R setting the previous data here and updating only the required part of data.
    DOB: userProfile?.dateOfBirth ,
    lang: userProfile?.languages ,
    gender: userProfile?.gender ,
    addr: userProfile?.address ,
  })
  let {phoneNo, DOB, lang, gender, addr} = data

  const handleChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;

    setData({...data, [key]:value})

  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(data)
    console.log(authUser)
    let {displayName, email, photoURL, uid} = authUser

    let  payload = {
      name:displayName,
      email:email,
      photo:photoURL,
      Id:uid,
      phone: phoneNo,
      dateOfBirth: DOB,
      gender:gender,
      languages:lang,
      address:addr,
      role:"user"
    }
    console.log(payload)
    try{
      let user_collection = doc(__DB, "user_profile", uid)

      await setDoc(user_collection,payload)

      toast.success("Profile Updated")
    }catch(e){
      console.log(e)
      toast.error(e.message)
    }
  }

  return (
    <section className='h-[100%] w-[100%] flex items-center justify-center text-white'>
      <article className='min-h-[400px] w-[60%] bg-slate-900 rounded-xl p-8'>
        <h2 className='text-center text-2xl font-semibold'>Upload Profile Data</h2>
        <form className='mt-8 flex flex-col gap-2' onSubmit={handleSubmit}>
          <article className='flex gap-2'>
            <div className='w-1/2 p-2 flex flex-col gap-3'>
              <label htmlFor="phoneNo">Phone No : </label>
              <input type="tel" id = "phoneNo" name='phoneNo' value={phoneNo} onChange={handleChange} placeholder='Enter phone number' className='block text-[18px] bg-white text-black rounded-lg outline-none placeholder:text-gray-600 placeholder:px-3= p-2'/>
            </div>
            <div className='w-1/2 p-2 flex flex-col gap-3'>
              <label htmlFor="DOB">Date Of Birth : </label>
              <input type="date" id = "DOB" name="DOB" value={DOB} onChange={handleChange} className='block text-[18px] bg-white text-gray-600 rounded-lg outline-none placeholder:text-gray-600 placeholder:px-3 p-2'/>
            </div>
          </article>

          <article className='flex gap-2'>
            <div className='w-1/2 p-2 flex flex-col gap-3'>
              <label htmlFor="lang">Language : </label>
              <input type="text" id = "lang" name='lang' value={lang} onChange={handleChange} placeholder='Enter Languages' className='block text-[18px] bg-white text-black rounded-lg outline-none placeholder:text-gray-600 placeholder:px-3= p-2'/>
            </div>
            <div className='w-1/2 p-2 flex flex-col gap-3'>
              <label htmlFor="gender">Gender : </label>
              <div className='flex gap-5'>
                <input type="radio" id = "gender" name="gender" checked={gender == "Male"} value="Male" onChange={handleChange} className=' h-9'/><span className='text-lg'>Male</span>
                <input type="radio" id = "gender" name="gender" checked={gender == "Female"} value="Female" onChange={handleChange} className=' h-9'/><span className='text-lg'>Female</span>
              </div>
            </div>
          </article>

          <article className='flex gap-2'>
            <div className='w-full p-2 flex flex-col gap-3'>
              <label htmlFor="addr">Address : </label>
              <textarea type="text" id = "addr" name='addr' placeholder='' value={addr} onChange={handleChange} className='block text-[18px] bg-white text-black rounded-lg outline-none placeholder:text-black placeholder:px-3= p-2'/>
            </div>
          </article>
          <button className='bg-blue-600 hover:bg-blue-800  px-4 py-2 rounded'>Submit</button>
        </form>
      </article>
      {isLoading && <Spinner />}
    </section>
  )
}

export default UpdateProfile