import React from 'react'
import Categories from '../../compunent/Categories/Categories'
import BestOffer from '../../compunent/best/BestOffer'
import Adds from '../../compunent/adds/Adds'
import { AnimatePresence } from 'motion/react'
import VieCard from '../../compunent/Add/VieCard'
import state from '../../stor/stor'
import { useSnapshot } from 'valtio'

const Home = () => {
  const snap = useSnapshot(state)

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
      <AnimatePresence>
            {snap.items.length > 0 && <VieCard />}
           </AnimatePresence>
    </div>
  )
}

export default Home