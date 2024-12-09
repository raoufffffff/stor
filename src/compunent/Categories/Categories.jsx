import React from 'react'
import types from '../../constanst/types'
import { Link } from 'react-router-dom'
const Categories = () => {
    const ourTypes = types.map(e => (
        <Link to={`type/${e.name}`} key={e.name}
        className='w-[30%] lg:w-[19%]  flex flex-col items-center'
        >
            <img 
            className='rounded-xl'
            src={e.img}
            />
            <span
            className='mt-2 font-semibold text-center'
            >{e.name}</span>
        </Link>
    ))
  return (
    <div
    className='flex  w-full justify-center gap-3 overflow-x-hidden mt-5 flex-wrap'
    >
        {ourTypes}
    </div>
  )
}

export default Categories