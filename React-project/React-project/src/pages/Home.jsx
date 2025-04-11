
import { useContext } from 'react'
import SideBar from '../components/home/SideBar'
import { Outlet } from 'react-router-dom'
import { AlbumContextAPI } from '../context/AlbumContext'
// import CustomAudioPlayer from "react-pro-audio-player";
import CustomAudioPlayer from '../audioPlayer/CustumAudioPlayer'

const Home = () => {
  const {
          songs,
          // setSongs,
          isPlaying,
          setIsPlaying,
          currentSongIndex,
          setCurrentSongIndex
      }=useContext(AlbumContextAPI)
  return (
    <>
      <div className='flex flex-col bg-slate-950 min-h-[calc(100vh-70px)]'>
        <div className='flex text-white'>
          <SideBar />
          <Outlet />
          
        </div>
        <div className="sticky bottom-0 w-full z-10">
        {currentSongIndex !== null && (
        <CustomAudioPlayer
          songs={songs}
          isPlaying={isPlaying}
          currentSongIndex={currentSongIndex}
          onPlayPauseChange={setIsPlaying}
          onSongChange={setCurrentSongIndex}
          songUrlKey="songURL"
          songNameKey="songName"
          songThumbnailKey="songThumbnail" 
          songSingerKey="songSingers"
          
        />
      )}
        </div>
      </div>
      
      
    </>
  )
}

export default Home