import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import items from '../../constanst/items'
import { IoCloseSharp } from 'react-icons/io5'
const Item = () => {
    
   const [searchParams, setSearchParams] = useSearchParams()
   const [n, setn] = useState(1)
   if(!searchParams.get("item")) return
const myitem = items.find(e => e.name === searchParams.get("item"))
  return (
    <div
    className='fixed z-50 flex justify-center items-center w-full h-screen left-0 top-0 bg-[#0007]'
    >
       
        <div
        className='bg-white relative flex flex-col w-10/12 h-4/6 overflow-y-scroll a rounded-xl'
        >
             <IoCloseSharp
onClick={()=>   setSearchParams(e => e.set('item', null))
}             
size={30}
        className='text-purple-600 left-5 absolute top-5'
        />
            <img 
            src={myitem.img}
            alt={myitem.name}
            className='w-10/12 mx-auto h-4/6'
            />
            <p
            className='w-9/12 mx-auto text-center font-bold'
            >{myitem.name}</p>
          
         
            
        </div>
    </div>
  )
}

export default Item