import React, { useEffect, useState } from 'react';
import { useSnapshot } from 'valtio';
import state from '../../stor/stor';
import { motion } from 'motion/react';
import { Link, useSearchParams } from 'react-router-dom';
import CardaiatemCard from '../../compunent/CardItems/CardaiatemCard';
import EmptyItems from '../../compunent/EmptyItems/EmptyItems';
import Checkout from '../checkout/Checkout';
import { getDistance } from 'geolib';
import Thanks from '../thanks/Thanks';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Card = () => {
  const { t } = useTranslation();
  const [searchparams, setsearchparams] = useSearchParams();
  const time = new Date().getHours();
  const snap = useSnapshot(state);
  const [animate, setAnimate] = useState(false);

  const des = (a) => {
    let d = 0;
    d = getDistance(
      {
        latitude: 36.679716,
        longitude: 3.096574,
      },
      {
        latitude: a[0],
        longitude: a[1],
      }
    );
    return Math.round(d / 1000) * 40 + 300;
  };

  const handleAnimation = () => {
    if (snap.items.length === 0) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000);
    }
  };

  const price = () => {
    let a = 0;
    snap.items.map((e) => {
      a += e.q * (e.offer ? e.newprice : e.price);
    });
    return a;
  };

  const ourCardItems = state.items.map((e, i) => {
    return <CardaiatemCard e={e} key={i} i={i} />;
  });

  // const sendOrder = async () => {
  //   try {
  //     await axios
  //       .post('https://daily-api.onrender.com/order', {
  //         user: state.user.name,
  //         price: price(),
  //         ride: des(state.user.position),
  //         phone: state.user.phone,
  //         location: { location: state.user.position },
  //         items: state.items,
  //       })
  //       .then(() => {
  //         state.items = [];
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const scroold = () => {
      window.scrollTo({
        behavior: 'smooth',
        top: 0,
      });
    };
    scroold();
  }, []);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className=''
    >
      <h1 className='text-center md:text-start px-5 font-bold text-2xl my-2'>
        {t('text')}
      </h1>
      <div className='flex pt-5 min-h-[45vh] max-h-[45vh] overflow-y-auto flex-col mt-4 px-3 md:flex-row md:flex-wrap md:justify-center'>
        {snap.items.length > 0 ? ourCardItems : <EmptyItems />}
      </div>
      <div className={`w-full border-t mt-10 border-t-gray-500 relative`}>

        <div className='px-4 w-fit absolute -top-[15%] md:-top-[10%] z-40 rounded-lg bg-[#dd2a5b] text-white text-center left-[50%] translate-x-[-50%] border border-gray-500'>
          {t('deliveryTime', {
            time: time > 17 ? t('tomorrowEvening') : t('todayEvening'),
          })}
        </div>
        <div className='text-xl md:text-3xl flex items-center justify-between md:text-center font-[600] px-5 mt-10'>
          {t('total')}: <span className='font-bold'>{price()} DA</span>
        </div>
        {state.user.position && (
          <>
            <div className='text-xl md:text-3xl flex items-center justify-between md:text-center font-[600] px-5 mt-2'>
              {t('deliveryCost')}: <span className='font-bold'>{des(state.user.position)} DA</span>
            </div>
            <div className='text-xl md:text-3xl flex items-center justify-between md:text-center font-[600] px-5 mt-2'>
              {t('serviceCost')}: <span className='font-bold'>0 DA</span>
            </div>
            <div className='text-xl md:text-3xl flex items-center justify-between md:text-center font-[600] px-5 mt-2'>
              {t('finalTotal')}: <span className='font-bold'>{price() + des(state.user.position)} DA</span>
            </div>
          </>
        )}
        <p className='my-5 text-center text-[#777]'>{t('priceChangeNote')}</p>

        <motion.div
          animate={
            animate
              ? {
                x: [0, -10, 10, -10, 10, -8, 8, -8, 8, 0],
              }
              : {}
          }
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
        >
          <Link
            onClick={handleAnimation}
            className={`w-9/12 flex mb-5 text-white rounded-2xl justify-center py-2 mx-auto md:w-6/12 bg-[#dd2a5b]`}
            to={`/${snap.items.length > 0 ? 'checkout' : 'card'}`}
          >
            {t('next')}
          </Link>
        </motion.div>

      </div>
      {searchparams.get('checkout') && <Checkout />}
    </motion.div>
  );
};

export default Card;
