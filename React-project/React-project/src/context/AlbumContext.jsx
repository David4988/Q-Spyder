import { collection, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { __DB } from "../backend/firebaseConfig";

export const AlbumContextAPI = createContext()  

const AlbumProvider = (props) =>{
    const [albums, setAlbums] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    //! react-pro-audio-player
    const [songs, setSongs] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(null);

    useEffect(()=>{
        const fetchAlbums = async () =>{
            try{
                setIsLoading(true)
                const album_collection = collection(__DB, "album_collection")

                let albumSnapshot= await getDocs(album_collection)

                const albumList = albumSnapshot.docs.map(doc=>doc.data())
                // setAlbums(albumList)
                setAlbums([...albumList])
            }catch(e){
                toast.error(e)
            }
            finally{
                setIsLoading(false)
            }
        }
        fetchAlbums()
    },[])
    return(
        <AlbumContextAPI.Provider 
        value={{
            albums,
            isLoading,
            songs,
            setSongs,
            isPlaying,
            setIsPlaying,
            currentSongIndex,
            setCurrentSongIndex
        }}>
            {props.children}
            
        </AlbumContextAPI.Provider>
    )
}

export default AlbumProvider