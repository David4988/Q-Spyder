import React, { useContext } from 'react'
import NavbarContainer from '../components/navbar/NavbarContainer'
import { Outlet } from 'react-router-dom'
import { AuthContextAPI } from '../context/AuthContext'

const Layout = () => {
  const {authUser} = useContext(AuthContextAPI)
  return (
    <div>
        {(authUser) && <NavbarContainer/>}
        <Outlet/>
    </div>
  )
}

export default Layout