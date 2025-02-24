import { useEffect } from 'react'
import s from '../../assets/sh.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import analytics from '../../firebase';
import { logEvent } from 'firebase/analytics';
const Thanks = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    logEvent(analytics, `Complete the purchase process`)

  }, [])
  return (
    <div
      className='w-full '
    >
      <img
        className='w-2/12 mt-3 mx-auto '
        src={s}
      />
      <h1
        className='text-[#dd2a5b] text-xl text-center px-5'
      >{t("successfully")}</h1>
      <h2
        className='text-center mt-5 px-5 text-sm'
      >{t('will')}</h2>
      <h3
        className='text-gray-500 text-sm text-center mt-10'
      >{t("thanks")}</h3>
      <Link
        to={'/'}
        className='bg-[#dd2a5b] text-white flex mt-5 w-9/12 mx-auto rounded-2xl justify-center capitalize py-1'
      >
        {t("back")}
      </Link>
    </div>
  )
}

export default Thanks