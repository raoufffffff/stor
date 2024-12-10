import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ({item}) => {
  return (
    <Link 
    to={`/type/${item.type}/?item=${item.name}`}
    className='w-[47%] my-2 flex flex-col md:w-4/12 lg:w-[23%] md:mx-2 border bg-white border-gray-300 rounded-xl overflow-hidden max-h-[300px] min-h-[300px] hover:shadow-xl hover:scale-105'
    >
      <img 
      src={item.img}
      alt={item.name}
      className='h-4/6 min-h-[66.666667%] w-full'
      />
      <p
      className='one-line text-center font-medium'
      >
        {item.name}
      </p>
      <div
            className='flex mt-auto flex-col'

      >

      <strong
      className={`ml-auto px-3 ${item.offer && "line-through text-gray-600 font-medium"}`}
      >{item.price} DA</strong>
      {item.offer &&<div
      className='bg-purple-600 py-0.5 mt-1 text-white w-full flex justify-around'
      >
        <span>
            {Math.round(item.newprice * 100 / item.price)}% 
            <span
            className='hidden md:flex'
            >discount</span>
        </span>
       <span> {item.newprice} DA</span>
       </div>}
      </div>
      </Link>
  )
}

export default ItemCard