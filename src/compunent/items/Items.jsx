import React, { useEffect, useState } from 'react'
import items from '../../constanst/items'
import ItemCard from '../item/ItemCard'
import { AnimatePresence } from 'motion/react'
import PlaceholderList from '../Loading/BestPlaceHoleder'
import axios from 'axios'
const Items = ({id}) => {
  const body = id == "offer" ? {offer: true} : {type: id}
  const [loading, setLoading] = useState(true)
    const [BestOffer, setBestOffer] = useState([])
  useEffect(()=>{
const getItems = async ()=>{
  try {
    await axios.put('https://daily-api.onrender.com/item/type',
      {
        offer: (id === "offer"),
        type: id
      }
    )
    .then(res => {
      console.log(res.data, id);
      
      setBestOffer(res.data.result)
      setLoading(false)
    })

  } catch (error) {
    console.log(error);
  }
}
  getItems()
  },[id])
  
  return (
    <div
    className=' w-full pb-5 md:w-9/12 ml-auto flex justify-center items-center flex-wrap '
    >
      <AnimatePresence>

        {
        loading ? <PlaceholderList /> : 
        BestOffer.map((e, i )=> (
          <ItemCard key={i} item={e}/>
         ))  
         }
        </AnimatePresence>
    </div>
  )
}

export default Items