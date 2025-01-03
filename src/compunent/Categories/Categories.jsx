import React from 'react'
import types from '../../constanst/types'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
const Categories = ({small}) => {
    const { t } = useTranslation(); // Get the translation function
  
    const ourTypes = types.map(e => (
        <Link to={`/type/${e.name}`} key={e.name}
        className={`${small ? "min-w-[15%]  flex flex-col items-center" : "min-w-[25%] lg:min-w-[15%]  flex flex-col items-center"}`}
        >
            <img 
            className='rounded-xl'
            src={e.img}
            />
           {!small && <span
            className='mt-2 text-xs font-semibold text-center'
            >{t(e.key)}</span>}
        </Link>
    )) 
  return (
    <div
    className='flex  w-full px-2 gap-3 overflow-x-scroll a mt-5 '
    >
        {ourTypes}
    </div>
  )
}

export default Categories