import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../../stor/stor'

const VieCard = () => {
    const snap = useSnapshot(state)
    const q = ()=>{
        let a = 0
        snap.items.map(e => {
            a += e.q
        })
        return a
    }
    const price = ()=>{
        let a = 0
        snap.items.map(e => {
            a += (e.q * (e.offer ? e.newprice : e.price))
        })
        return a
    }
  return (
    <div
    className='fixed z-[1000] py-1.5 px-2.5 flex items-center justify-between bg-[#43ae3e] text-white rounded-3xl w-9/12  bottom-5 left-[50%] translate-x-[-50%]'
    >
        <span
        className='bg-[#0d0d0d40] px-3 py-1 rounded-full'
        >{q()}</span>
        <span>View Basket ({price()} DA)</span>
         </div>
  )
}

export default VieCard