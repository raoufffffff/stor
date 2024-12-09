import React from 'react'
import Categories from '../../compunent/Categories/Categories'

const Home = () => {
  return (
    <div
    className='w-full'
    >
      <h1
      className='font-bold text-xl mt-3'
      >Categories</h1>
      <Categories />
    </div>
  )
}

export default Home