import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../../stor/stor'

const Card = () => {
    const snap = useSnapshot(state)
  return (
    <div>Card</div>
  )
}

export default Card