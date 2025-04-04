import { useContext } from 'react'
import { AuthContextAPI } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import { UserContextAPI } from '../context/UserContext'

const PrivateRoutes = (props) => {
    let { userProfile } = useContext(UserContextAPI)
    let {authUser} = useContext(AuthContextAPI)

    if(authUser){
        if(userProfile?.role === "admin"){
        
            return props.children
        }else{
            return <Navigate to="/"/>
        }
    }else{
        return <Navigate to = "/auth/login" />
    }
}

export default PrivateRoutes