import React from 'react'
import types from '../../constanst/types'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
const Categories = () => {
    const { t } = useTranslation(); // Get the translation function
  
    const ourTypes = types.map(e => (
        <Link to={`type/${e.name}`} key={e.name}
        className='w-[20%] lg:w-[15%]  flex flex-col items-center'
        >
            <img 
            className='rounded-xl'
            src={e.img}
            />
            <span
            className='mt-2 text-xs font-semibold text-center'
            >{t(e.key)}</span>
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