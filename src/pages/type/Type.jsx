import React from 'react'
import {  useParams } from 'react-router-dom'
import TyoeLinks from '../../compunent/typelinks/TyoeLinks'
import Items from '../../compunent/items/Items'
import Item from '../item/Item'
import { useSnapshot } from 'valtio'
import state from '../../stor/stor'
import { AnimatePresence } from 'motion/react'
import VieCard from '../../compunent/Add/VieCard'

const Type = () => {
  const snap = useSnapshot(state)
    const {id} = useParams()
  return (
        <div
        className='flex flex-col md:flex-row w-full gap-1 mt-5'
        >
           <Item />
            <TyoeLinks id={id} />
           <Items id={id}/>
           <AnimatePresence>
            {snap.items.length > 0 && <VieCard />}
           </AnimatePresence>
        </div>
  )
}

export default Type