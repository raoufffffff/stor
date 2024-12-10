import React, { useEffect, useState } from 'react'
import { HiShoppingCart } from 'react-icons/hi'
import { MdOutlineSearch } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
   <header
   className={`flex px-5 py-1.5 lg:py-3  flex-col items-center lg:flex-row bg-[#a600FF] ${scrollY > 90 && "fixed top-0 left-0 z-50"} w-full`}
   >
    <Link
    to={'/'}
    className='flex items-center text-2xl font-bold text-white'
    >
    <HiShoppingCart color='#fff' className='mr-1' size={30}/>
    
    InstaSphope
    </Link>
    <label
    htmlFor='shearch'
    className='rounded-xl bg-white h-10 w-8/12 lg:w-6/12  mt-1.5 mx-auto flex items-center px-2'
    >
<MdOutlineSearch color='#000' size={25} />
<input 
name='shearch'
id='shearch'
className='w-10/12 focus:outline-none ml-2'
placeholder='shearch for products'
/>
    </label>
   </header>
  )
}

export default Header