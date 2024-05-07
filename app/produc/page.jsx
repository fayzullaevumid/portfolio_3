import React from "react";
import './women.css'
import { useRouter } from "next/navigation";

const Produc = ({product}) => {
  const router = useRouter()
  return(
    <div>
      <div className="card-2" >
    <div className="card-container">
      <img className="image" src={product?.image} alt="" />
      <div className="product">
        <h4>{product?.name}</h4>
        <p>Price: {product?.price}</p>
        <button className="button-cart" onClick={() => router.push('./korzina')}>ADD TO CART</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Produc;