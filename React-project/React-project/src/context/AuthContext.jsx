import { onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { __AUTH } from '../backend/firebaseConfig'

export const AuthContextAPI = createContext()

const AuthProvider = (props) => {
    let [authUser, setAuthUser] = useState(null)  

    useEffect(() =>{
    onAuthStateChanged(__AUTH,(userInfo)=>{ //! We are using it because, the same account may change some details later

        if(userInfo?.emailVerified === true){
            setAuthUser(userInfo) //! If the email is verified, we are updating the userInfo using setAuthUser()

            window.localStorage.setItem("TOKEN", userInfo.accessToken) //! Here, we are saving the accessToken in the localStorage of Browser so we dont need to login every time
        }
        else{
            setAuthUser(null) //! Else, logout the user

            window.localStorage.removeItem("TOKEN") 
        }
    })
    },[__AUTH]) //! Updation happens when __AUTH variable changes

  return (  //! Providing Auth values authUser, setAuthUser 
    <AuthContextAPI.Provider value={{authUser, setAuthUser}}>
            {props.children}
    </AuthContextAPI.Provider>
  )
}

export default AuthProvider