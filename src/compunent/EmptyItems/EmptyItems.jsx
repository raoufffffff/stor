import React from 'react'
import sho from '../../assets/shop.png'
const EmptyItems = () => {
  return (
    <div
    className='w-full'
    >
        <img 
        className='w-4/12 mx-auto'
        src={sho}
        />
        <h2
        className='text-xl text-center font-bold mt-7'
        >empty card</h2>
    </div>
  )
}

export default EmptyItems