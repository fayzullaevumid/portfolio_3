'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import './map.css'


const Map = ({map}) => {
  const router = useRouter()
  return (
    <div>
      <div className='card-2'>
     <div className="card-container">
      <img className="image" src={map?.image} alt="" />
        <h4>{map?.name}</h4>
        <p>Price: {map?.price}</p>
        <button  className="button44" onClick={() => router.push('./korzina')}>ADD TO CART</button>
        {/* <button  className="button44" onClick={() => router.push('./cardform') }>ADD</button>  */}
    </div>
    </div>
    </div>
  )
}

export default Map;