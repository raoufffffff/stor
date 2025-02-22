import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PlaceholderList from '../../compunent/Loading/BestPlaceHoleder'
import BestOfferCard from '../../compunent/best/BestOfferCard'
import { AnimatePresence } from 'motion/react'
import VieCard from '../../compunent/Add/VieCard'
import { useSnapshot } from 'valtio'
import state from '../../stor/stor'

const Search = () => {
  const [Loading, setLoading] = useState(true)
  const snap = useSnapshot(state);

  const [searchParams] = useSearchParams()
  const [items, setitems] = useState([])
  useEffect(() => {
    const getItem = async () => {
      try {
        const res = await axios.get("https://daily-api-tan.vercel.app/item")
        setitems(res.data.result)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getItem()
  }, [])
  const filteredItems = items.filter(e => e.name.includes(searchParams.get("to").toUpperCase()))
  const ourBest = filteredItems.map((e, i) => (
    <BestOfferCard key={i} item={e} />
  ))
  return (
    <div
      className='w-full'
    >
      <h1
        className='font-bold text-xl my-3 px-5'
      >search for {`"`}{searchParams.get("to")}{`"`}</h1>
      <div
        className='w-full  flex justify-center items-center flex-wrap  my-2.5'
      >{Loading ?
        <PlaceholderList />
        : ourBest}</div>
      <AnimatePresence>{snap.items.length > 0 && <VieCard />}</AnimatePresence>
    </div>
  )
}

export default Search