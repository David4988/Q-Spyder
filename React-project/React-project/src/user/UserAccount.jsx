import React, { useContext} from 'react'
import { AuthContextAPI } from '../context/AuthContext'
import ProfileNotFound from './Profile/ProfileNotFound'
import { UserContextAPI } from '../context/UserContext'
import UserData from './UserData'

const UserAccount = () => {
  let{authUser}=useContext(AuthContextAPI)
  const {userProfile} = useContext(UserContextAPI)
  return (
    <section className='h-[100%] w-[100%] flex items-center justify-center'>
      <article className='min-h-[300px] w-[40%] bg-slate-900 rounded-xl p-4'>
        <header className='h-[110px] w-[100%] bg-slate-700 rounded-t-xl flex flex-col justify-center items-center '>
          <img src={authUser?.photoURL} className="h-22 w-22 rounded-full -mt-14" /> {/* //! We are using Optional Chaining(?.) because, we get a null error when we reload the webpage */}
          <h2 className='text-white'>{authUser?.displayName}</h2>
          <h2 className='text-[#877EFF]'>{authUser?.email}</h2>
        </header>
        {userProfile ? <UserData /> : < ProfileNotFound/>}
      </article>
    </section>
  )
}

export default UserAccount