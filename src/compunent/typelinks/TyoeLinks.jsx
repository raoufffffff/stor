import React, { useEffect, useState } from 'react'
import types from '../../constanst/types'
import { NavLink } from 'react-router-dom'
const TyoeLinks = ({id}) => {
  
  

    const ourTypes = types.map(e=> (
        <NavLink 
        to={`/type/${e.name}`}
        key={e.name}
        className={`${id === e.name && "font-bold text-purple-600  underline border-b-purple-600 border-purple-400 md:text-black"}  flex items-center px-5 py-2   flex-1 mx-1 min-w-fit md:border-none`}
        >
            <div
            className={`hidden mr-2 md:flex w-5 h-5  justify-center items-center p-1 border ${id === e.name ? "border-2 border-purple-300" :"border-[#7777]"} rounded-full`}
            >
                {id === e.name && <div
                className='bg-purple-400 w-2 h-2 rounded-full'
                ></div>}
            </div>
            {e.name}</NavLink>
    ))
  return (
    <ul
    className={`w-full md:w-2/12 a pb-3 flex md:flex-col md:fixed md:h-5/6 md:left-0  md:top-[94px]  overflow-x-scroll md:overflow-hidden`}
    >
{ourTypes}
    </ul>
  )
}

export default TyoeLinks