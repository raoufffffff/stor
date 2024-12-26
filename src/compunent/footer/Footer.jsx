import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa6';
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
    
    DailyShoop
      </span>
      <h3
      className='text-center my-2'
      >{t("footerhaed")} !</h3>
      <p
      className='text-center'
      >{t("footertext")}</p>
        </div>
        <div
        className='flex justify-center items-center mt-5'
        >
          <a
          href='https://www.facebook.com/profile.php?id=61570542254337&mibextid=ZbWKwL'
          target='_blank'
          >
          <FaFacebookF size={24}
          className='mx-2'
          />
          </a>
          <a
          href='https://www.instagram.com/deliverydailyshop/profilecard/?igsh=Nml3aWkwZmFiYmpv'
          target='_blank'
          >
          <FaInstagram size={24}
          className='mx-2'
          />
          </a>
          <a
            href="https://wa.me/213798888642" 
            target="_blank" 
            rel="noopener noreferrer"
          >
          <FaWhatsapp size={24}
          className='mx-2'
          />
          </a>

        </div>
    </div>
  )
}

export default Footer
