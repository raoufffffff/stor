import React from 'react'
import { motion } from 'motion/react'
const Checkout = () => {
  return (
    <motion.div
    initial={{scale: 0}}
    animate={{scale:1}}
    transition={{duration: 1, type: "spring"}}
    className='w-full'
    >
        <h1
        className='px-3 md:text-center my-5 text-2xl font-bold'
        >Contact Information</h1>
        <form
        className='w-full flex flex-col justify-center'
        >
            <input 
type='text'
placeholder='inter your name'
            className='w-10/12 px-5 py-1.5 md:w-6/12 rounded-2xl shadow-xl border border-gray-400 my-2 mx-auto'
            />
            <input 
type='tel'
placeholder='inter your phone number'
            className='w-10/12 px-5 py-1.5 md:w-6/12 rounded-2xl shadow-xl border border-gray-400 my-2 mx-auto'
            />
        </form>
    </motion.div>
  )
}

export default Checkout