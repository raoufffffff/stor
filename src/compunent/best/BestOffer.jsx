import React from 'react'
import items from '../../constanst/items'
import BestOfferCard from './BestOfferCard'
const BestOffer = () => {
    const ourBest = items.filter(e => e.offer).map((e, i)=>(
        <BestOfferCard key={i} item={e}/>
    ))
  return (
    <div
    className='w-full overflow-x-scroll a flex pl-5 my-2.5'
    >{ourBest}</div>
  )
}

export default BestOffer