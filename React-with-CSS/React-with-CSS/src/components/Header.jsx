import React from 'react'
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <nav className='bg-white h-20 flex gap-10 border'>
        <article className=' h-full pl-20 pt-2 flex items-center'><img src={logo} alt="" className='h-12 w-12'/></article>
        <article className='h-full flex'>
            <ul className='flex items-center justify-center gap-16'>
                <li>Home</li>
                <li>Gift</li>
                <li>Order</li>
                <li>Pay</li>
                <li>Store</li>
            </ul>
        </article>
        <article className='flex justify-center items-center'>
          <input type="text" placeholder='Looking for something specific?'className='border rounded-xl px-5 py-1  placeholder:text-sm'/>
        </article>
        <article></article>
    </nav>
  )
}

export default Header