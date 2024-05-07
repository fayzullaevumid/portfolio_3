'use client'
import React from "react";
import './product.css'
import { useRouter } from "next/navigation";
import { db } from "../config";
import { doc, setDoc } from "firebase/firestore";

const Products = ({product}) => {
  const router = useRouter()

  return(
    <div>
      <div className="card-2">
    <div className="card-container">
      <img className="image" src={product?.image} alt="" />
        <h4>{product?.name}</h4>
        <p>Price: {product?.price}</p>
        <button className="button44" onClick={async () => {
          const cityRef = doc(db, 'korzina', product.id) // bu yerda product id har bir ishlatilayotgan product uchun addtoCart vazifasini bajaradi
          await setDoc(cityRef, {...product,card: true},) 
          router.push('./korzina')     
        }} >ADD TO CART</button>
        {/* <button className="button44" onClick={() => router.push('./cardform')}>ADD</button> */}
    </div>
    </div>
    </div>
  )
}

export default Products;