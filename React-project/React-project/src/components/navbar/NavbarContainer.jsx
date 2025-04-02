import React from 'react'
import Menu from '../../pages/Menu'
import Logo from '../Logo'
import { AuthContextAPI } from '../../context/AuthContext'
const NavbarContainer = () => {
  
  return (
    <>
    <header className='h-[70px]  sticky top-0 z-10 w-[100%] bg-slate-900 shadow-2xl'>
        <article className='w-[95%] m-auto h-[100%] flex items-center justify-between'>
            <Logo/>
            <Menu/>
        </article>
    </header>
    </>
  )
}

export default NavbarContainer