import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../../stor/stor';
import { useTranslation } from 'react-i18next';
import dz from '../../constanst/dz';
import { IoPricetagOutline } from 'react-icons/io5';
import Promo from '../../compunent/Promo/Promo';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { logEvent } from 'firebase/analytics';
import analytics from '../../firebase';

const Checkout = () => {
  const navigation = useNavigate()
  const { t } = useTranslation();
  const snap = useSnapshot(state);
  const [show, setshow] = useState(false);

  const [info, setinfo] = useState({
    user: "",
    phone: "",
    position: { name: "", price: 0 }
  });
  const [promoCode, setpromoCode] = useState({})
  const changecoodes = (e) => setpromoCode(e)
  // Add an errors state to track which fields are empty
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    position: false,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    logEvent(analytics, `visit checkout`)

  }, [])



  const hide = () => setshow(false);

  const price = () => {
    let a = 0;
    snap.items.forEach((e) => {
      a += e.q * (e.offer ? e.newprice : e.price);
    });
    return a;
  };

  const finalprice = () => {
    return promoCode.type == "descouante" ? (price() * (1 - (promoCode.per / 100))) : price()
  };

  const total = () => {
    return promoCode.type == "free delevery" ? price() : promoCode.type == "descouante" ? (price() * (1 - (promoCode.per / 100))) + info.position.price : price() + info.position.price
  }


  const postOrder = async () => {
    try {
      await axios.post(`https://daily-api-tan.vercel.app/order`,
        {
          ...info,
          price: finalprice(),
          ride: info.position.price,
          promo: promoCode.type ? true : false,
          promotype: promoCode.type ? promoCode.type : "none",
          items: snap.items,
          location: info.position
        }
      )
        .then(res => {
          if (res.data.good) {
            navigation('/thanks')
            state.items = []
          }
        })
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for empty fields
    const newErrors = {
      name: info.user.trim() === "",
      phone: info.phone.trim() === "",
      position: info.position.name.trim() === ""
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (hasErrors) {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return;
    }
    postOrder()
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
      className='w-full bg-white pt-6 pb-8 rounded-xl shadow-lg max-w-lg mx-auto'
    >
      <h1 className='text-center text-3xl font-bold text-gray-800'>{t("conatct")}</h1>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center mt-6 w-11/12 mx-auto'
      >
        <input
          value={info.user}
          onChange={(e) => setinfo({ ...info, user: e.target.value })}
          type='text'
          placeholder={t("name")}
          className={`w-10/12 md:w-8/12 px-5 py-2 rounded-xl shadow-sm focus:ring-2 focus:outline-none mb-3 text-gray-700 border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#dd2a5b]'
            }`}
        />
        <input
          value={info.phone}
          onChange={(e) => setinfo({ ...info, phone: e.target.value })}
          type='text'
          placeholder={t("phone")}
          className={`w-10/12 md:w-8/12 px-5 py-2 rounded-xl shadow-sm focus:ring-2 focus:outline-none mb-3 text-gray-700 border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#dd2a5b]'
            }`}
        />
        <select
          className={`w-10/12 md:w-8/12 px-5 py-2 rounded-xl shadow-sm focus:ring-2 focus:outline-none mb-3 bg-white text-gray-700 border ${errors.position ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#dd2a5b]'
            }`}
          value={info.position.name}
          onChange={(e) => {
            const selectedPosition = dz.find(item => item.name === e.target.value);
            setinfo({ ...info, position: selectedPosition });
            // Remove error when a valid option is selected
            setErrors({ ...errors, position: false });
          }}
        >
          <option value="" disabled>{t("SelectPosition")}</option>
          {dz.map(e => (
            <option key={e.name} value={e.name}>{e.name}</option>
          ))}
        </select>
        <p
          onClick={() => setshow(true)}
          className='bg-green-400 flex items-center text-white w-10/12 px-2 rounded-xl py-1 cursor-pointer my-5'
        >
          <IoPricetagOutline className='mx-3' />
          {t("promo")}
        </p>
        <div className='flex w-10/12 my-1 justify-between'>
          <p>{t("frais")}</p>
          <p className={`${promoCode.type == "free delevery" && "line-through"} py-2 px-4 rounded-xl bg-[#3337]`}>{info.position.price} DA</p>
        </div>
        <div className='flex w-10/12 my-1 justify-between'>
          <p>{t("fproduits")}</p>
          <div
            className='flex'
          >

            <p
              className={`${promoCode.type == "descouante" && "line-through"} `}
            >{price()} DA</p>
            {promoCode.type == "descouante" && <p
              className='ml-4 text-green-700'
            >{finalprice()} DA</p>}
          </div>
        </div>

        <div className='flex w-10/12 my-1 justify-between'>
          <p>{t("all")}</p>
          <p className='text-green-600'>{total()} DA</p>
        </div>
        <button
          type='submit'
          className={`w-8/12 bg-[#dd2a5b] mt-5 flex justify-center rounded-xl text-center py-2 text-white text-lg font-semibold transition-all duration-300 `}
        >
          {t("Confirm")}
        </button>
      </form>
      {show && <Promo hide={hide} changecoodes={changecoodes} />}
    </motion.div>
  );
};

export default Checkout;
