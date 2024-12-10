import React, { useState } from 'react'
import { motion } from 'motion/react'
import { FaCircleInfo, FaCircleMinus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const ItemCard = ({item}) => {
  const [animate, setAnimate] = useState(false);
const [n, setn] = useState(0)
  const handleClick = () => {
    setAnimate(true);

    // Remove the class after animation ends
    setTimeout(() => {
      setAnimate(false);
    }, 1000); // Adjust timeout to match the animation duration
  };
  return (
    <motion.div 
    onClick={()=>{
      handleClick()
      setn(p => p + 1)
    }}
    initial={{scale: 0}}
    animate={{scale: 1}}
    transition={{duration: 0.3, type: "spring"}}
    exit={{x: 1000}}
    className={` w-[45%] pb-1.5 relative my-2 mx-0.5 flex flex-col md:w-3/12 lg:w-[21%] md:mx-2 border bg-white border-gray-200 rounded-lg overflow-hidden max-h-[280px] min-h-[280px] hover:shadow-xl hover:scale-105`}
    > 
    {n > 0 &&<div
    className='absolute top-2  left-0 w-full flex justify-between px-1 '
    >
      <span
       onClick={()=> {
        setn(p => p - 2)
        handleClick()               
      }}
      >
      <FaCircleMinus
           
            className='text-red-600 mx-2 '
            size={30}
            />
      </span>
 
<span
className={`${animate && "jello-vertical"} rounded-full bg-green-800 py-1 px-3 text-white`}
>
{n}
</span>
    </div>}
      <img 
      src={item.img}
      alt={item.name}
      className=' min-h-[160px] max-h-[160px] w-full'
      />
      <p
      className='one-line mt-3 text-center font-medium px-5'
      >
        {item.name}
      </p>
      <div
            className='flex mt-auto flex-col'

      >
<div className='flex items-center px-3'>

      <span
      className={`ml-auto  font-normal  ${item.offer && "line-through text-sm text-gray-600 font-medium"}`}
      >{item.price} DA
     
      </span>
      {item.offer && <span
      className='ml-2 underline '
      >{item.newprice} DA</span>}
      </div>
     
      </div>
      <Link
 to={`/type/${item.type}/?item=${item.name}`}
       className='absolute right-1 top-[55%]'
       onClick={()=> setn(p => p - 1)}
      >
      <FaCircleInfo size={20} className='text-gray-700' />
      </Link>
      </motion.div>
  )
}

export default ItemCard