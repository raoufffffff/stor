import React, { useState } from 'react'
import { motion } from 'motion/react'
import DraggableMarkerMap from '../../compunent/map/Map'
import { Link } from 'react-router-dom'
import { useSnapshot } from 'valtio'
import state from '../../stor/stor'
const Checkout = () => {
  const snap = useSnapshot(state)
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
    console.log(info.position[0]);
    
  return (
    <>
    <div
    className='w-full fixed bg-[#0009] top-0 left-0 h-screen z-50 flex justify-center items-center'
    >
 <motion.div
    initial={{scale: 0}}
    animate={{scale:1}}
    transition={{duration: 1, type: "spring"}}
    className='w-10/12 bg-[#fefefe] pt-4 pb-8  rounded-xl'
    >
        <h1
        className='px-3 text-center my-5 text-2xl font-bold'
        >Contact Information</h1>
        <div
        className='w-full flex mt-5 flex-col justify-center'
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
        </div>
        <div
className='w-9/12 bg-[#dd2a5b] rounded-2xl mx-auto text-center py-1 mt-5 text-white'
onClick={()=> setshow(true)}
>Delivery location</div>
{info.name && info.phone && info.position && <Link
        to={'/card/#cc'}
        className='w-9/12 bg-[#dd2a5b] mt-5 flex justify-center jello-horizontal rounded-2xl mx-auto text-center py-1  text-white'
        onClick={()=> {
          state.user.name = info.name
          state.user.phone = info.phone
          state.user.position = info.position
        }}
        >Confirm</Link>
     }
       {show && <DraggableMarkerMap getpotion={getpotion} hide={hide} />}
      
    </motion.div>
    </div>
   
     </>
  )
}

export default Checkout