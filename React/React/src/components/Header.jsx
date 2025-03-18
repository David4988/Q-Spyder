import React from 'react'

const Header = () => {
  return (
    <header className='bg-slate-400 h-12 flex items-center justify-between px-5 sticky top-0 rounded-b-lg'>
        <h1 className='text-3xl'>Header</h1>
        <ul className='flex gap-5 font-semibold'>
            <a href ="#"><li>Home</li></a>
            <a href ="#"><li>About</li></a>
            <a href ="#"><li>Contact</li></a>
            <a href ="#"><li>Services</li></a>
        </ul>
    </header>
  )
}

export default Header