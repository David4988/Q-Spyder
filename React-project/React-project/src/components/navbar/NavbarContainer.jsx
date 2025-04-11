import React from 'react'
import Menu from './Menu'
import Logo from '../Logo'
const NavbarContainer = () => {
  
  return (
    <>
    <header className='sticky top-0 z-10 h-[70px] w-[100%] bg-black shadow-2xl'>
        <article className='w-[95%] m-auto h-[100%] flex items-center justify-between'>
            <Logo/>
            <Menu/>
        </article>
    </header>
    </>
  )
}

export default NavbarContainer