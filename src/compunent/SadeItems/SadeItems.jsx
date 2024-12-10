import React from 'react'
import items from '../../constanst/items'
import { Link } from 'react-router-dom'
const SadeItems = ({type}) => {
const myItems = items.filter(e => e.type == type).map((e, i)=>(
    <Link
    to={`/type/${e.type}/?item=${e.name}`}
        className='min-w-[20%]'
    key={i}>
        <img 
        alt={e.name}
        src={e.img}
        />
    </Link>
))
  return (
    <div
            className='a w-full  flex items-center overflow-x-auto'
            >
                {myItems}
            </div>
  )
}

export default SadeItems