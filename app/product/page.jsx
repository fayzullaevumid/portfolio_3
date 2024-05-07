'use client'
import React from "react";
import './kids.css'
import { useRouter } from "next/navigation";

const Products = ({product}) => {
  const router = useRouter()
  return(
    <div>
      <div className="card-2">
    <div className="card-container">
      <img className="image" src={product?.image} alt="" />
        <h4>{product?.name}</h4>
        <p>Price: {product?.price}</p>
        <button  className="button44" onClick={() => router.push('./korzina')}>ADD TO CART</button>
        {/* <button  className="button44" onClick={() => router.push('./cardform') }>ADD</button>  */}
    </div>
    </div>
    </div>
  )
}

export default Products;