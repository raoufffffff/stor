import React from 'react'
import img1 from '../../assets/img-1.jpg'
import img2 from '../../assets/img-2.jpg'


const Adds = () => {
  return (
    <div
    className='w-full h-[200px] px-10 a md:justify-center flex overflow-x-auto gap-8 mt-5'
    >
   
        <img
        className='rounded-xl w-12/12'
        src={img1}/>
        <img
        className='rounded-xl w-12/12'
        src={img2}/>
      
  </div>
  )
}

export default Adds