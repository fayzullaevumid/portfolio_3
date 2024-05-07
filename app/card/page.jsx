'use client'
import React, { useEffect, useState } from "react";
import './card.css'
import Products from "../products/page";
import Navbar from "../navbar/page";
import { db } from "../config";
import {getDocs, doc, collection, setDoc } from "firebase/firestore";


const Card = () =>{
  const [products, setProducts]=useState([]);
  const market = collection(db, 'korzina')
  useEffect(() => {
  const getKorzina = async () => {
  const data = await getDocs(market)
  setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  // console.log(data.doc.map((doc) => ({...doc.data(), id: doc.id})))
  // bu yerda ma'lumotlar ikki funksiyani ichidan ko'rinmagani uchun useState ga qo'yib olindi
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

export default Card;