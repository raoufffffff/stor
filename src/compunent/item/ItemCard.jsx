import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ({item}) => {
  return (
    <Link 
    to={`/`}
    className='w-5/12 flex flex-col md:w-4/12 lg:w-3/12 border bg-white border-gray-300 rounded-xl overflow-hidden max-h-[300px] min-h-[300px] hover:shadow-xl hover:scale-105'
    >
      <img 
      src={item.img}
      alt={item.name}
      className='h-4/6 w-full'
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
      className='bg-purple-600 text-white w-full flex justify-around'
      >
        <span>
            {Math.round(item.newprice * 100 / item.price)}% discount
        </span>
       <span> {item.newprice} DA</span>
       </div>}
      </div>
      </Link>
  )
}

export default ItemCard