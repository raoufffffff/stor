import React from 'react'
import Categories from '../../compunent/Categories/Categories'
import BestOffer from '../../compunent/best/BestOffer'
import Adds from '../../compunent/adds/Adds'

const Home = () => {
  return (
    <div
    className='w-full'
    >
      <Adds />
      <h1
      className='font-bold text-xl mt-3 px-5'
      >Best Offer</h1>
      <BestOffer />
      <h1
      className='font-bold text-xl mt-3 px-5'
      >Categories</h1>
      <Categories />
    </div>
  )
}

export default Home