import React from 'react'
import items from '../../constanst/items'
import { Link } from 'react-router-dom'
import ItemCard from '../item/ItemCard'
const Items = ({id}) => {
  
  return (
    <div
    className=' w-full pb-5 md:w-10/12 ml-auto flex justify-around items-center flex-wrap '
    >
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
    </div>
  )
}

export default Items