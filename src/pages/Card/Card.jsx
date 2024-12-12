import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../../stor/stor'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import CardaiatemCard from '../../compunent/CardItems/CardaiatemCard'
const Card = () => {
    const time = new Date().getHours()
    const snap = useSnapshot(state)
    const price = ()=>{
        let a = 0
        snap.items.map(e => {
            a += (e.q * (e.offer ? e.newprice : e.price))
        })
        return a
    }
   
    const ourCardItems = state.items.map((e, i)=>{
        return <CardaiatemCard e={e} key={i} i={i}/>
    })
  return (
    <motion.div
    initial={{scale: 0}}
    animate={{scale: 1}}
    transition={{duration: 0.5, type: "spring"}}
    className='min-h-screen'
    >
<h1
className='text-center md:text-start px-5 font-bold text-2xl my-2'
>Card</h1>
<div
className='flex flex-col mt-4 px-3 md:flex-row md:flex-wrap md:justify-center'
>
    {ourCardItems}
</div>
<div
className={`w-full border-t   border-t-gray-500 ${snap.items.length === 1 ? "mt-48" : snap.items.length === 2 ? "mt-28" : "mt-10"  } relative`}
>
    <div
    className='px-4 w-fit absolute -top-[15%] md:-top-[10%] z-50  rounded-lg bg-[#dd2a5b] text-white text-center left-[50%] translate-x-[-50%] border border-gray-500'
    >
        time of delevry {time > 17 ? "tomorrow evning" : "today evning"}
    </div>
    <div
    className='text-xl md:text-3xl md:text-center font-[600] px-5 mt-10'
    >
        total : <span
        className='font-bold'
        >{price()} DA</span>
    </div>
    <p
    className='my-5 text-center text-[#777]'
    >some prices may change</p>
    <Link
    className='w-9/12 flex mb-5 rounded-2xl justify-center py-2 mx-auto md:w-6/12 bg-[#dd2a5b] text-white'
    to={'/checkout'}
    >next</Link>
</div>
    </motion.div>
  )
}

export default Card