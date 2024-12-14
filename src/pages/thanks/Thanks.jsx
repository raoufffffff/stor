import React from 'react'
import s from '../../assets/sh.png'
import { Link } from 'react-router-dom'
const Thanks = () => {
  return (
    <div
    className='w-full '
    >
        <img 
        className='w-2/12 mt-3 mx-auto '
        src={s}
        />
        <h1
        className='text-[#dd2a5b] text-xl text-center px-5'
        >Your order has been sent successfully</h1>
        <h2
        className='text-center mt-5 px-5 text-sm'
        >We will contact you as soon as possible to confirm the order.</h2>
        <h3
        className='text-gray-500 text-sm text-center mt-10'
        >Thank you for choosing Daily Shop</h3>
        <Link
        to={'/'}
        className='bg-[#dd2a5b] text-white flex mt-5 w-9/12 mx-auto rounded-2xl justify-center capitalize py-1'
        >
            back home
        </Link>
    </div>
  )
}

export default Thanks