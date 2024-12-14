import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { HiShoppingCart } from 'react-icons/hi'
import { MdOutlineSearch } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation();
console.log(location.pathname);

  return (
   <header
   className={`flex px-5 py-1.5 lg:py-3  flex-col items-center lg:flex-row bg-[#dd2a5b] transition-all  fixed jello-vertical top-0 left-0 z-50 w-full`}
   >
    <Link
    to={'/'}
    className='flex items-center text-2xl font-bold text-white'
    >
    <HiShoppingCart color='#fff' className='mr-1' size={30}/>
    
    DailySphope
    </Link>
    <label
    htmlFor='shearch'
    className='rounded-xl shadow-xl bg-white h-10 w-8/12 lg:w-6/12  mt-1.5 mx-auto flex items-center px-2'
    >
<MdOutlineSearch color='#000' size={25} />
<input 
name='shearch'
id='shearch'
className='w-10/12 focus:outline-none ml-2 '
placeholder='shearch for products'
/>
    </label>
   {location.pathname != '/' && <Link
    to={`${location.pathname[1] === 't' ? "/" : "/type/offer"}`}
    className='absolute left-5 bottom-4'
    >
    <FaArrowLeft 
    size={22}
    color='#fff' />
    </Link>}
   </header>
  )
}

export default Header