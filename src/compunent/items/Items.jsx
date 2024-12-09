import React from 'react'
import items from '../../constanst/items'
const Items = ({id}) => {
    const ouritems = id === "offer" ? items.filter(e => e.offer).map(e => (
        <div
        className='w-[32%] bg-white rounded-xl h-56'
        key={e.name}
        >
<img src={e.img}/>
<p
className='px-2 max-h-14 overflow-hidden'
>{e.name}</p>
        </div>
    )) : items.filter(e => e.type === id).map(e => (
        <div
        className='w-[32%] bg-white rounded-xl h-56'
        key={e.name}
        >
<img src={e.img}/>
<p
className='px-2  max-h-14 overflow-hidden'
>{e.name}</p>
        </div>
    ))
  return (
    <div
    className='w-full flex flex-wrap gap-1'
    >
        {ouritems}
    </div>
  )
}

export default Items