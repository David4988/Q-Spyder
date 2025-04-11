import { updateProfile } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { AuthContextAPI } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Spinner from '../helpers/Spinner'

const UpdatePicture = () => {
  let {authUser}=useContext(AuthContextAPI)

  let navigate = useNavigate()

  const [picture, setPicture] = useState(null)
  const [preview, setPreview] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) =>{
    // console.dir(e.target.files[0])
    let file = e.target.files[0]

    setPicture(file)

    if(file){

      let url =URL.createObjectURL(file)

      console.log(url)

      setPreview(url)
    }
  }
  const handleSubmit = async (e) =>{
    e.preventDefault()
    setIsLoading(true)
    try{
      if(!picture){
        toast.error("Select a photo");

        return;
    }else{

      const data = new FormData()
      

      data.append("file",picture)
      data.append("upload_preset", "Innovators hub music")
      let response =await fetch(
        `https://api.cloudinary.com/v1_1/djv7apqom/image/upload`,
        {
          method: "POST",
          body:data
        }
      )
      let result= await response.json()
      console.log(result)
      updateProfile(authUser,{photoURL:result.url})
      toast.success("Photo updated")


      navigate("/user-profile")
    }
    }catch(e){
      toast.error(e.message)
    }finally{
      setIsLoading(false)
    }
  }
  return (
    <section className='h-[100%] w-[100%] flex items-center justify-center text-white'>
      <article className='min-h-[300px] w-[40%] bg-slate-900 rounded-xl p-4'>
        <h2 className='text-center text-2xl font-semibold'>Upload Profile Picture</h2>
        <form onSubmit={handleSubmit} className='flex flex-col m-4 gap-5'>
          <div className='w-32 h-32 m-auto bg-gray-700 rounded-full flex justify-center items-center'>
            {(preview)
              ?
                <img src={preview} className='h-32 w-32 rounded-full'/>
              : 
              <div className='text-center rounded-full bg-slate-700'>No image Selected</div>
            }
          </div>
          <label htmlFor="picture" className='block h-[100px] py-2 w-full text-center rounded-lg border border-dashed border-white'>Select a Photo</label>
          <input type='file' id = 'picture' name='picture' className='hidden' accept="image/*" onChange={handleChange}/> {/* //! We are hidding the input field and design the label */ }
          <button className='py-2 w-full bg-purple-700 rounded-lg cursor-pointer hover:bg-purple-800 '>Upload</button>
          
        </form>
        {isLoading && <Spinner />}
      </article>
      
    </section>
  )
}

export default UpdatePicture