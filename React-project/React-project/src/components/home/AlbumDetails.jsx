import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { AlbumContextAPI } from '../../context/AlbumContext'

const AlbumDetails = () => {
    let data = useLocation() //! getting the location object which has -> pathName, search, hash and state
    let {state:{album}} = data //! from the state, we are performing nested destructuring and extracting the album object
    console.log(album)

    const {
        songs,
        setSongs,
        isPlaying,
        setIsPlaying,
        currentSongIndex,
        setCurrentSongIndex
    }=useContext(AlbumContextAPI)

    const handleClick = (index) =>{
        setSongs(album.songs)
        setCurrentSongIndex(index)

         //! We r checking if we have clicked the same song or a different song

        if(currentSongIndex === index) { //! If same song is clicked
            setIsPlaying(!isPlaying)
        }else{ //! If different song is clicked
            setIsPlaying(true)
        }
    }

  return (
    <section className='m-5 bg-gray-700 rounded '>
        <article className='w-full p-6 flex gap-6'>
        <aside className=''>
            <img src={album.albumPoster} className='rounded-md min-h-[370px] min-w-[320px]' alt="" />
        </aside>
        <aside>
            <h2 className='text-3xl font-semibold'>{album.albumTitle}</h2>
            <ul className='flex mt-4 flex-col gap-4 text-lg'>
                <li className=' flex gap-20 '>
                    <span className=''>
                        Title
                    </span>
                    <span className=''>
                        {album.albumTitle}
                    </span>
                </li>
                <li className=' flex gap-20 '>
                <span>
                        Number of Tracks
                    </span>
                    <span>
                        {album.songs.length}
                    </span>
                </li>
                <li className=' flex gap-20 '>
                <span>
                        Release Date
                    </span>
                    <span>
                        {album.albumReleaseDate}
                    </span>
                </li>
                <li className=' flex gap-20 '>
                <span>
                        Language
                    </span>
                    <span>
                        {album.albumLanguages}
                    </span>
                </li>
                <li className=' gap-10 flex '>
                <span>
                        Description
                    </span>
                    <span>
                        {album.albumDescription}
                    </span>
                </li>
            </ul>
        </aside>
    </article>
    <main className={`text-white p-2 mt-4 rounded-lg w-full ${currentSongIndex !== null && "mb-14"}`}>
        <h3 className='text-xl px-4'>Song List</h3>
        <table className='w-full mt-3 text-left bg-slate-900 uppercase rounded-lg overflow-hidden'>
            <thead className='w-full'>
                <tr className=''>
                    <th className='text-center px-3 py-2'></th>
                    <th className='text-center px-3 py-2'>Track</th>
                    <th className='text-center px-3 py-2'>Song Name</th>
                    <th className='text-center px-3 py-2'>Singers</th>
                    <th className='text-center px-3 py-2'>Director</th>
                    <th className='text-center px-3 py-2'>Duration</th>
                </tr>
            </thead>
            <tbody className='w-full bg-slate-900'>
                {album.songs.map((song, index)=>{

                    
                    const songM = Math.floor(song.songDuration/60)
                    const songS = Math.floor(song.songDuration%60)

                    return <tr className='p-4 bg-slate-800 cursor-pointer hover:bg-slate-700' onClick={()=>handleClick(index)}>
                        <td className='text-center text-sm font-semibold'>{index+1}</td>
                        <td className='flex justify-center pl-10 py-4'><img src={song.songThumbnail} className='w-20 rounded' alt="" /></td>
                        <td className={`text-center text-sm font-semibold ${(currentSongIndex === index && isPlaying) ? `text-green-500` : ``}`}>{song.songName}</td>
                        <td className='text-center text-sm font-semibold '>{song.songSingers}</td>
                        <td className='text-center text-sm font-semibold '>{song.songDirector}</td>
                        <td className='text-center text-sm font-semibold'>{`${songM}:${songS.toString().padStart(2,'0')}`}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </main>
    </section>
  )
}

export default AlbumDetails