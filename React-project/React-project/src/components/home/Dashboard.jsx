import React, { useContext } from 'react'
import { AlbumContextAPI } from '../../context/AlbumContext'
import Spinner from '../../helpers/Spinner'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {
    const {albums, isLoading} = useContext(AlbumContextAPI)
    console.log(albums)
  return (
    <div className='p-5 pl-8'>
        <h2 className='font-semibold text-3xl px-5 pb-6'>Albums</h2>
        <section className='flex gap-14 overflow-x-auto scrollbar-hide'>
            {albums.map((album)=>{
                return <NavLink state={{album}} to="/album-details"  key={album.albumId} className='bg-slate-600 p-3 rounded-xl shrink-0'> {/* //! We are using URL state to send URL data which can be fetched using the "useLocation" hook*/}
                    <img src={album.albumPoster} alt="" className='h-[150px] w-[150px] rounded-xl'/>
                    <h3 className='mt-2 text-center text-xl font-semibold'>{album.albumTitle}</h3>
                </NavLink >
            })}
        </section>
        {isLoading && <Spinner />}
    </div>
  )
}

export default Dashboard