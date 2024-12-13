import React, { useState } from 'react'
import { motion } from 'motion/react'
import DraggableMarkerMap from '../../compunent/map/Map'
const Checkout = () => {
    const [show, setshow] = useState(false)
    const [info, setinfo] = useState({
        name: "",
        phone: "",
        position: ""
    })
    const getpotion = (a)=> {
        setinfo({...info, position: a})
    }
    const hide = ()=> setshow(false)
    console.log(info);
    
  return (
    <motion.div
    initial={{scale: 0}}
    animate={{scale:1}}
    transition={{duration: 1, type: "spring"}}
    className='w-full bg-[#fefefe]'
    >
        <h1
        className='px-3 md:text-center my-5 text-2xl font-bold'
        >Contact Information</h1>
        <form
        className='w-full flex flex-col justify-center'
        >
            <input 
            value={info.name}
            onChange={(e)=> setinfo({...info,name: e.target.value })}
type='text'
placeholder='inter your name'
            className='w-10/12 bg-white px-5 py-1.5 md:w-6/12 rounded-2xl shadow-xl border border-gray-400 my-2 mx-auto'
            />
            <input 
              value={info.phone}
              onChange={(e)=> setinfo({...info, phone: e.target.value })}
type='tel'
placeholder='inter your phone number'
            className='w-10/12 bg-white px-5 py-1.5 md:w-6/12 rounded-2xl shadow-xl border border-gray-400 my-2 mx-auto'
            />
        </form>
        <div
        onClick={()=> setshow(true)}
        >Delivery location</div>
       {show && <DraggableMarkerMap getpotion={getpotion} hide={hide} />}
    </motion.div>
  )
}

export default Checkout