import { useContext } from 'react'
import { AuthContextAPI } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = (props) => {
    let {authUser} = useContext(AuthContextAPI)
    if(!authUser){
        return <Navigate to="/auth/login"/>
    }else{
        return props.children
    }
}

export default PrivateRoutes