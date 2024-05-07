'use client'
import React, { useEffect, useState } from "react";
import './cardjs.css'
import { db } from "../config";
import {getDocs, doc, collection, addDoc} from "firebase/firestore"
import Navbar from "../navbar/page";
import Card from "../card/page";

const CardJs = ({id, text, image, price, onDelete}) => {
    const [data, setData] = useState([])
    const handleClick = () => {
        onDelete(id);
    }
    
    useEffect(() => {
    const Cards = collection(db, 'inputCard')
        const getCard = async () => {
            const data = await getDocs(Cards)
            const fetchedData = data.docs.map(doc => ({...doc.data(), id: doc.id}))
            setData(fetchedData)
        };
        getCard();
    }, [])

    return(
        <div>
            {/* <Navbar/> */}
            <div className="flex">
              {data.map(item => (
                 <div className="cardss">
                  <div key={item.id}>
                  <img src={item.image} alt="" />
             <h4>{item.price}</h4>
            <p>{item.text}</p>
            <button onClick={handleClick} className="button44">DELETE</button>
               </div>
               </div>
              ))}      
            </div>

        </div>
    )
}

export default CardJs;