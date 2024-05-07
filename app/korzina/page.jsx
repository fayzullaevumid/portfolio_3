'use client'
import React, { useEffect, useState } from "react";
import Products from "../products/page";
import Navbar from "../navbar/page";
import { db } from "../config";
import {getDocs, doc, collection, setDoc } from "firebase/firestore";


const Korzina = () =>{
  const [products, setProducts]=useState([]);
  const market = collection(db, 'korzina')
  useEffect(() => {
  const getKorzina = async () => {
  const data = await getDocs(market)
  // setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  setProducts(() => {
    const aray = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
    return aray.filter(product => {
      return product.card?product.card:false
    })
    
  })
  // console.log(data.doc.map((doc) => ({...doc.data(), id: doc.id})))
};
getKorzina();
},[] )
      return(
        <div>
          <Navbar/>
          <div className="card-con">
         {products.map(product => (
          <Products key={product.id}  
           product={product}
           />
         ))}
         </div>
        </div>
      )
}

export default Korzina;