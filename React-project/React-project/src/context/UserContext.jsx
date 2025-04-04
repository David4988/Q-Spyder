import { doc, onSnapshot } from 'firebase/firestore'
import { createContext, useContext, useEffect, useState } from 'react'
import { __AUTH, __DB } from '../backend/firebaseConfig'
import { AuthContextAPI } from './AuthContext'

export let UserContextAPI = createContext()
const UserProvider = (props) => {
    const [userProfile, setUserProfile] = useState(null)
    
    const {authUser} = useContext(AuthContextAPI)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchProfile = () =>{

            const user_collection = doc(__DB, "user_profile", authUser?.uid); //! We are selection the "user_profile collection" and from it, we r selecting the data using "uid"
            
            console.log(authUser)
            console.log(userProfile)

            onSnapshot(user_collection, (data) =>{
                // console.log(data.data())
                
                setUserProfile(data.data())

            })
        }
        if(authUser){
            fetchProfile()
        }
        setIsLoading(false)
    },[authUser])

  return (
    <UserContextAPI.Provider value={{userProfile, isLoading}}>
        {props.children}
    </UserContextAPI.Provider>
  )
}

export default UserProvider