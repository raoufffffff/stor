import React from 'react'
import sho from '../../assets/shop.png'
import { useTranslation } from 'react-i18next';
const EmptyItems = () => {
      const { t } = useTranslation();

  return (
    <div
    className='w-full'
    >
        <img 
        className='w-[50px]  md:w-[100px] mx-auto'
        src={sho}
        />
        <h2
        className='text-xl text-center font-bold mt-7'
        >{t("empty")}</h2>
    </div>
  )
}

export default EmptyItems