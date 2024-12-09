import React from 'react'
import { useParams } from 'react-router-dom'
import TyoeLinks from '../../compunent/typelinks/TyoeLinks'
import Items from '../../compunent/items/Items'

const Type = () => {
    const {id} = useParams()
  return (
    <div>
        <h1
        className='font-bold text-xl mt-3'
        >{id}</h1>
        <div
        className='flex flex-col md:flex-row w-full gap-1 mt-5'
        >
            <TyoeLinks id={id} />
           <Items id={id}/>
        </div>
    </div>
  )
}

export default Type