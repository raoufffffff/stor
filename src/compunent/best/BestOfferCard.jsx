import React, { useState } from 'react'
import { motion } from "motion/react";
import { FaCircleInfo, FaCircleMinus } from "react-icons/fa6";
import { Link, useNavigate,   } from "react-router-dom";
import { useSnapshot } from "valtio";
import state from "../../stor/stor";

const BestOfferCard = ({item}) => {
    const snap = useSnapshot(state);
    const [animate, setAnimate] = useState(false);
    let navigate = useNavigate();

    const handleAnimation = () => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000);
    };
  
    const handleAddItem = () => {
      handleAnimation();
  
      const existingItem = snap.items.find((e) => e.name === item.name);
  
      if (existingItem) {
        // Update the quantity for an existing item
        state.items = state.items.map((e) =>
          e.name === item.name ? {...e, q: e.q + 1 } : e
        );
      } else {
        // Add the new item with quantity 1
        let n = {...item, q: 1}
        state.items = [...state.items, n];
      }
      navigate(`/type/${item.type}`)
    };
  
    const handleRemoveItem = (event) => {
      event.stopPropagation();
  
      const existingItem = state.items.find((e) => e.name === item.name);
  
      if (existingItem) {
        if (existingItem.q > 1) {
          state.items = state.items.map((e) =>
            e.name === item.name ? { ...e, q: e.q - 1 } : e
          );
        } else {
          // Remove the item entirely if quantity reaches 0
          state.items = state.items.filter((e) => e.name !== item.name);
        }
        handleAnimation();
      }
    };
  
    const existingItem = state.items.find((e) => e.name === item.name);
  
  return (
    <motion.div
    onClick={handleAddItem}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1, type: "spring" }}
    className="min-w-[38%] pb-1.5 relative my-2 mx-0.5 flex flex-col md:min-w-[15%]  md:mx-2 border bg-white border-gray-200 rounded-lg overflow-hidden max-h-[210px] min-h-[210px] hover:shadow-xl hover:scale-105"
  >
    {existingItem?.q > 0 && (
      <div className="absolute top-2 left-0 w-full flex justify-between px-1">
        <button onClick={handleRemoveItem} aria-label="Remove Item">
          <FaCircleMinus className="text-red-600 mx-2" size={30} />
        </button>
        <motion.span
          animate={animate ? { scale: [1, 1.25, 0.75, 1] } : {}}
          transition={{ duration: 1 }}
          className="rounded-full bg-green-800 py-1 px-3 text-white"
        >
          {existingItem.q}
        </motion.span>
      </div>
    )}
    <img
      src={item.img}
      alt={item.name}
      className="min-h-[80px] max-h-[100px] w-full"
    />
    <p className="one-line mt-3 text-center font-medium px-5">{item.name}</p>
    <div className="flex mt-auto flex-col">
      <div className="flex items-center px-3">
        <span
          className={`ml-auto font-normal ${
            item.offer ? "line-through text-xs text-gray-600 font-medium" : ""
          }`}
        >
          {item.price} DA
        </span>
        {item.offer && (
          <span className="ml-2 underline">{item.newprice} DA</span>
        )}
      </div>
    </div>
    <Link
      to={`/type/${item.type}/?item=${item.name}`}
      className="absolute right-1 top-[55%]"
      onClick={(event) => event.stopPropagation()}
      aria-label="View Item Details"
    >
      <FaCircleInfo size={20} className="text-gray-700" />
    </Link>
  </motion.div>
  )
}

export default BestOfferCard
