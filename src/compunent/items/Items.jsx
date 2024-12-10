import React from 'react'
import items from '../../constanst/items'
import ItemCard from '../item/ItemCard'
import { AnimatePresence } from 'motion/react'
const Items = ({id}) => {
  
  return (
    <div
    className=' w-full pb-5 md:w-9/12 ml-auto flex justify-center items-center flex-wrap '
    >
      <AnimatePresence>

        {id === "offer"
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