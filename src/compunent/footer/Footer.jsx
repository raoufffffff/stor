import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import { HiShoppingCart } from 'react-icons/hi'

const Footer = () => {
    const { t } = useTranslation(); // Get the translation function
  
  return (
    <div
    className='bg-[#fefefe] border-t mt-10 border-t-slate-600 shadow-stone-500  py-3 flex flex-col'
    >
      <div
      className='px-5'
      >

      <span
      className='text-[#dd2a5b]  flex justify-center mb-2 mx-auto font-bold'
      >
      <HiShoppingCart color='#dd2a5b' className='mr-1' size={30}/>
    
    DailySphope
      </span>
      <p
      className='text-center'
      >{t("footertext")}</p>
        </div>
        <div
        className='flex justify-center items-center mt-5'
        >
          <FaFacebookF size={24}
          className='mx-2'
          />
          <FaInstagram size={24}
          className='mx-2'
          />
          <FaTiktok size={24}
          className='mx-2'
          />

        </div>
    </div>
  )
}

export default Footer