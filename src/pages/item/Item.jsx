import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import items from '../../constanst/items'
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6'
import { IoCloseSharp } from 'react-icons/io5'
import SadeItems from '../../compunent/SadeItems/SadeItems'
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
        className='bg-white relative flex flex-col w-10/12 h-5/6 overflow-y-scroll a rounded-xl'
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
            className='w-10/12 mx-auto h-3/6'
            />
            <p
            className='w-9/12 mx-auto text-center font-bold'
            >{myitem.name}</p>
            <div
            className='flex justify-center items-center mt-5'
            >
            <FaCircleMinus
            onClick={()=> {
                if(n > 1){
                    setn(p => p- 1)
                }
            }}
            className='text-purple-600 mx-2'
            size={30}
            />
<div
className='rounded-md bg-gray-200  py-3 px-5 mx-1'
>{n}</div>
            <FaCirclePlus
            onClick={()=> setn(p => p + 1)}
            className='text-purple-600 mx-2'
            size={30}
            />
            </div>
            <div
            className='absolute bg-white w-full bottom-0 left-0 border-t-2 border-t-gray-300 '
            >
                <div
                className='my-3 w-11/12 mx-auto font-bold py-2 text-white bg-purple-600 flex items-center justify-around rounded-3xl'
                >
<span>Add to basket</span>
<span>{myitem.offer ? myitem.newprice * n : myitem.price * n} DA</span>
                </div>
            </div>
            <h1
            className='font-bold text-lg mt-5 px-3'
            >Related products</h1>
                <SadeItems type={myitem.type} />
        </div>
    </div>
  )
}

export default Item