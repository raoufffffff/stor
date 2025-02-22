import types from '../../constanst/types'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
const Categories = ({ id }) => {
  const { t } = useTranslation(); // Get the translation function

  const ourTypes = types.map(e => (
    <Link to={`/type/${e.name}`} key={e.name}
      className={`min-w-[28%] sm:min-w-[100px] mx-1 h-[150px]  flex flex-col items-center border ${id == e.name && "bg-[#dd2a5b]"} border-[#dd2a5b] rounded-xl px-2 pt-1`}
    >
      <img
        className='h-[80px] w-full'
        src={e.img}
      />
      <span
        className={` ${id == e.name && "text-white"} text-xs  flex mt-3 font-semibold text-center`}
      >{t(e.key)}</span>
    </Link>
  ))
  return (
    <div
      className='flex  w-full px-2 gap-3 overflow-x-scroll a mt-5 '
    >
      {ourTypes}
    </div>
  )
}

export default Categories