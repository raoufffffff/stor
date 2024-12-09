import React from 'react'
import items from '../../constanst/items'
const Items = ({id}) => {
    const ouritems = id === "offer" ? items.filter(e => e.offer).map(e => (
        <div
        className='w-[44%]  border border-[#aaa7]  lg:w-[32%] overflow-hidden bg-white  rounded-xl '
        key={e.name}
        >
<img 
className='w-full h-[170px]'
src={e.img}/>
<p
className='px-2 one-line h-[48px]  overflow-hidden text-center w-8/12 mx-auto font-semibold'
>{e.name}</p>
<h6
className='mt-7 w-full text-end text-gray-500 line-through px-2'
>{e.price} DA</h6>
<h6
className=' bg-purple-600 text-sm font-normal  py-1 px-2 mt-1 flex justify-between items-center text-white w-ful '
>
  <span
  className=''
  >{Math.round(e.newprice * 100 / e.price)}% discount</span>
  <span>{e.newprice} DA</span>
  </h6>
        </div>
    )) : items.filter(e => e.type === id).map(e => (
        <div
        className='w-[44%]  border border-[#aaa7]  lg:w-[32%] overflow-hidden bg-white  rounded-xl '
        key={e.name}
        >
<img 
className='w-full h-[170px]'
src={e.img}/>
<p
className='px-2 one-line  h-[48px]  overflow-hidden text-center w-8/12 mx-auto font-semibold'
>{e.name}</p>
<h6
className={`'mt-7 w-full text-end ${e.offer && "text-gray-500 line-through px-2"}'`}
>{e.price} DA</h6>
{e.offer && <h6
className=' bg-purple-600 text-sm font-normal  py-1 px-2 mt-1 flex justify-between items-center text-white w-ful '
>
  <span
  >{Math.round(e.newprice * 100 / e.price)}% discount</span>
  <span>{e.newprice} DA</span>
  </h6>}
        </div>
    ))
  return (
    <div
    className=' w-full pb-5 md:w-9/12 ml-auto flex justify-center flex-wrap gap-3'
    >
        {ouritems}
    </div>
  )
}

export default Items