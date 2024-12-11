import React, { useEffect, useState } from 'react'
import items from '../../constanst/items'
import ItemCard from '../item/ItemCard'
import { AnimatePresence } from 'motion/react'
const Items = ({id}) => {
  const [loading, setllouding] = useState(false)
  useEffect(()=>{
    setllouding(true);
    setTimeout(() => setllouding(false), 150);
  },[id])
  return (
    <div
    className=' w-full pb-5 md:w-9/12 ml-auto flex justify-center items-center flex-wrap '
    >
      <AnimatePresence>

        {
        loading ? null :
        id === "offer"
         ? 
         items.filter(e => e.offer).map((e, i )=> (
           <ItemCard key={i} item={e}/>
          ))  
          :
          items.filter(e => e.type === id).map((e, i )=> (
            <ItemCard key={i} item={e}/>
          ))  
        }
        </AnimatePresence>
    </div>
  )
}

export default Items