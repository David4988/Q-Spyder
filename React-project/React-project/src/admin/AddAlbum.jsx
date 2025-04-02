import React, { useState } from 'react'
import toast from 'react-hot-toast';
import Spinner from '../helpers/Spinner';

const AddAlbum = () => {
  const [album, setAlbum] = useState({
    albumTitle: "",
    albumPoster: null,
    albumReleaseDate: "",
    albumLanguages: "",
    albumDescription: "",
  });

  const [isLoading, setIsLoading] = useState(false)

  const {albumTitle, albumPoster, albumReleaseDate,albumLanguages,albumDescription} = album;

  const initSongStateObj={
    songName:"",
    songFile:null,
    songThumbnail:null,
    songSingers:"",
    songMood:"",
    songDirector:"",
  }
  
  const [songs, setSongs] = useState([initSongStateObj])

  const addSong =() => {
    setSongs([...songs,{...initSongStateObj}]) 
    console.log(songs)
  }
  const removeSong = (index) =>{
    if(index>0){ //! Because, we need to upload atleast 1 song in the album
    const newSongs = songs.filter((value,ind)=>ind!==index)
    setSongs(newSongs)
    }
  }

  const handleSongChange = (e,index) => {
    const value = e.target.value;
    const key = e.target.name;
    
    let copy = [...songs]
    copy[index][key] = value
    setSongs(copy)
  }

  const handleSongFileChange = (e,index) => {
    const file = e.target.files[0];
    const key = e.target.name;
    let copy = [...songs]
    copy[index][key] = file
    setSongs(copy)
  }

  const handleAlbumChange = (e) =>{
    const value = e.target.value;
    const key = e.target.name;
    setAlbum({...album,[key]:value})
  }

  const handlePosterChange = (e) =>{
    const file = e.target.files[0]
    setAlbum({...album, albumPoster:file})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setIsLoading(true)
    console.log(album);
    console.log(songs)
    try{
      let albumPosterData = new FormData()

      albumPosterData.append("file", albumPoster)
      albumPosterData.append("upload_preset", "Innovators hub music")

      let response =await fetch(
        `https://api.cloudinary.com/v1_1/djv7apqom/image/upload`,
        {
          method: "POST",
          body:albumPosterData
        }
      )

      let posterResult= await response.json()
      console.log(posterResult)

      const albumId = posterResult.asset_id;
      const albumPosterURL = posterResult.url;

      let albumData = {
        albumId:albumId,
        albumTitle:albumTitle,
        albumPoster:albumPosterURL,
        albumReleaseDate: albumReleaseDate,
        albumLanguages: albumLanguages,
        albumDescription: albumDescription
      }
      console.log(albumData);
      songs.map( async (value, index) =>{
        const songThumbnailData = new FormData()
        songThumbnailData.append("file", value.songThumbnail)

        songThumbnailData.append("upload_preset", "Innovators hub music")

        const songThumbnailResponse = await fetch(
            `https://api.cloudinary.com/v1_1/djv7apqom/image/upload`,
            {
              method: "POST",
              body:songThumbnailData
            }
          )
        const songThumbnailResult = await songThumbnailResponse.json()
        
        const songThumbnailURL = songThumbnailResult.url

        const songFileData = new FormData()

        songFileData.append("file", value.songFile)
        songFileData.append("upload_preset", "Innovators hub music")
        
        const songFileResponse = await fetch(`https://api.cloudinary.com/v1_1/djv7apqom/upload`,
          {
            method: "POST",
            body:songFileData
          }
        )

        const songFileResult = await songFileResponse.json()
        
        const songFileURL = songFileResult.url

        const songFileFormat = songFileResult.format

        const songFileBytes = songFileResult.bytes

        const songFileId = songFileResult.asset_id

        const songFileDuration = songFileResult.duration

        console.log(songThumbnailURL)
        console.log(songFileURL)
        console.log(songFileFormat)
        console.log(songFileBytes)
        console.log(songFileId)
        console.log(songFileDuration);
        

      })
      toast.success("Album uploaded")

    }catch(e){
      toast.error(e.message)
    }finally{
      setIsLoading(false)
    }
    
  }
  return (
    <section className='h-[100%] w-[100%] p-6 flex justify-center text-white'>
      <article className='min-h-[400px] w-[70%] bg-slate-900 rounded-xl p-8 '>
        <h2 className='text-center text-2xl font-bold'>Add Album</h2>
        <form action="" className='mt-1' onSubmit={handleSubmit}>
          <h3>Album Details</h3>
          <article className='mt-3 flex flex-wrap'>
          <div className='w-1/2 p-2 flex flex-col gap-3'>
              <label htmlFor="albumTitle">Album title : </label>
              <input type="text" id = "albumTitle" onChange={handleAlbumChange} value={albumTitle} name='albumTitle'  placeholder='Enter album title' className='block text-[18px] bg-white text-black rounded-lg outline-none placeholder:text-gray-600 px-2 py-1'/>
          </div>
          <div className='w-1/2 p-2 flex flex-col gap-3'>
              <label htmlFor="albumPoster">Album poster : </label>
              <input type="file" id = "albumPoster" onChange={handlePosterChange} name='albumPoster'  placeholder='Enter album title' className='block text-[18px] bg-white text-black rounded-lg outline-none placeholder:text-gray-600 px-2 py-1 file:bg-slate-700 file:rounded-sm file:text-white file:px-2'/>
          </div>
          <div className='w-1/2 p-2 flex flex-col gap-3'>
              <label htmlFor="releaseDate">Release date : </label>
              <input type="date" id = "releaseDate" onChange={handleAlbumChange} value={albumReleaseDate} name='albumReleaseDate'  placeholder='Enter album title' className='block text-[18px] bg-white text-black rounded-lg outline-none placeholder:text-gray-600 px-2 py-1'/>
          </div>
          <div className='w-1/2 p-2 flex flex-col gap-3'>
              <label htmlFor="albumTitle">Languages : </label>
              <input type="text" id = "languages" onChange={handleAlbumChange} value={albumLanguages} name='albumLanguages'  placeholder='Enter languages' className='block text-[18px] bg-white text-black rounded-lg outline-none placeholder:text-gray-600 px-2 py-1'/>
          </div>
          <div className='w-full p-2 flex flex-col gap-3'>
              <label htmlFor="albumDescription">Album description : </label>
              <textarea type="text" id = "albumDescription" onChange={handleAlbumChange} value={albumDescription} name='albumDescription'  placeholder='Enter album description' className='block text-[18px] w-full bg-white text-black rounded-lg outline-none placeholder:text-gray-600 px-2 py-1'/>
          </div>
          </article>
          <h3 className='mt-3 text-xl'>Song details : </h3>
          <article className='mt-3 flex flex-col gap-4'>

            {songs.map((value, index)=>{

              return (

                <section className='bg-slate-700 rounded-lg p-2' key={index}>
                  <h4 className='text-center text-lg'>Song {index+1}</h4>
                  <main className='flex flex-wrap gap-2'>
                    <div className='w-[32%] p-2 flex flex-col gap-3'>
                      <label htmlFor="songName">Song name : </label>
                      <input type="text" id = "songName"   placeholder='Enter album title' onChange={(e)=>handleSongChange(e,index)} name='songName' value={value.songName} className='block text-[18px] bg-white text-black rounded-lg outline-none placeholder:text-gray-600 placeholder:text-sm px-2 py-1'/>
                    </div>

                    <div className='w-[32%] p-2 flex flex-col gap-3'>
                      <label htmlFor="SongFile">Song file : </label>
                      <input type="file" id = "songFile"  placeholder='Enter song file' onChange={(e)=>handleSongFileChange(e,index)} name='songFile' className='block text-[18px] bg-white text-black rounded-lg outline-none placeholder:text-gray-600 placeholder:text-sm px-2 py-1 file:bg-slate-700 file:rounded-sm file:text-white file:text-sm file:px-2'/>
                    </div>

                    <div className='w-[32%] p-2 flex flex-col gap-3'>
                      <label htmlFor="albumTitle">Song Thumbnail : </label>
                      <input type="file" id = "songThumbnail"  placeholder='Enter song thumbnail' onChange={(e)=>handleSongFileChange(e,index)} name='songThumbnail' className='block text-[18px] bg-white text-black rounded-lg outline-none placeholder:text-gray-600 placeholder:text-sm px-2 py-1 file:bg-slate-700 file:rounded-sm file:text-white file:text-sm file:px-2'/>
                    </div>

                    <div className='w-[32%] p-2 flex flex-col gap-3'>
                      <label htmlFor="albumTitle">Singer name : </label>
                      <input type="text" id = "songSingers"  placeholder='Enter album title' onChange={(e)=>handleSongChange(e,index)} name='songSingers'  value={value.songSingers} className='block text-[18px] bg-white text-black rounded-lg outline-none placeholder:text-gray-600 placeholder:text-sm px-2 py-1'/>
                    </div>

                    <div className='w-[32%] p-2 flex flex-col gap-3'>
                      <label htmlFor="albumTitle">Mood : </label>
                      <input type="text" id = "mood"  placeholder='Enter song mood' onChange={(e)=>handleSongChange(e,index)} name='songMood' value={value.songMood} className='block text-[18px] bg-white text-black rounded-lg outline-none placeholder:text-gray-600 placeholder:text-sm px-2 py-1'/>
                    </div>

                    <div className='w-[32%] p-2 flex flex-col gap-3'>
                      <label htmlFor="albumTitle">Director : </label>
                      <input type="text" id = "director"  placeholder='Enter director name' onChange={(e)=>handleSongChange(e,index)} name='songDirector' value={value.songDirector} className='block text-[18px] bg-white text-black rounded-lg outline-none placeholder:text-gray-600 placeholder:text-sm px-2 py-1'/>
                    </div>
                    <div className='flex justify-between w-full px-4'>
                      <div>
                      {songs.length-1 === index &&(
                      <input 
                        type='button'
                        className ='bg-green-500 px-4 py-1 m-2 cursor-pointer rounded-sm'
                        onClick={addSong}
                        value='Add'
                      />
                      )}
                      </div>
                      <div>
                      {songs.length > 1 && (
                        <input type='button'
                          className=' bg-red-500 px-4 py-1 m-2 cursor-pointer rounded-sm '
                          onClick={()=>removeSong(index)}
                          value="Remove"
                        />
                      )}
                      </div>
                    
                      
                    </div>

                  </main>
                  
                </section>
              )
              
            })}
          
          </article>
          <button className='w-full py-2 cursor-pointer rounded-lg bg-purple-600 mt-5'>Upload Album</button>
        </form>
      </article>
      {isLoading && <Spinner />}
      </section>
  )
}

export default AddAlbum