import React from 'react'
import {  useParams } from 'react-router-dom'
import TyoeLinks from '../../compunent/typelinks/TyoeLinks'
import Items from '../../compunent/items/Items'
import Item from '../item/Item'

const Type = () => {
    const {id} = useParams()
  return (
        <div
        className='flex flex-col md:flex-row w-full gap-1 mt-5'
        >
           <Item />
            <TyoeLinks id={id} />
           <Items id={id}/>
        </div>
  )
}

export default Type