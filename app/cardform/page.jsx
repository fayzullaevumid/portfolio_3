'use client'
import React, { useEffect, useState } from "react";
import CardJs from "../cardjs/page";
import './cardform.css'
import Navbar from "../navbar/page";
import { db } from "../config";
import {getDocs, doc , collection } from "firebase/firestore";
import { useRouter } from "next/navigation";

const CardForm = () => {
    const router = useRouter()
    const [inputText, setInputText] = useState('');
    const [inputPrice, setInputPrice] = useState('');
    const [inputImage, setInputImage] = useState('');
    const [cards, setCards] = useState([]);
    const [kos, setKos] = useState([])


    const handleTextChange = (e) => {
        setInputText(e.target.value);
    }
    const handleImageChange = (e) => {
        setInputImage(e.target.value);
    }
    const handlePriceChange = (e) => {
        setInputPrice(e.target.value);
    }
   const handleSubmit = () => {
    if(inputText.trim() !== '' && inputImage.trim() !== '' && inputPrice.trim()){
        const newCard = {
            id: Date.now().toString(),
            text: inputText,
            image: inputImage,
            price: inputPrice,
        }
        setCards([newCard])
        setCards([...cards, {text: inputText, image: inputImage,price: inputPrice}]);
        setInputText('');
        setInputImage('');
    }
   }
   


   const handleDelete = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards)
   }

   const cardInput = collection(db, 'inputCard')
   useEffect(() => {
    const getInfo = async () => {
        const data = await getDocs(cardInput);
        const fetched = data.docs.map(doc => ({...doc.data(), id: doc.id}))
        setKos(fetched)
    }
    getInfo();
   }, [])
   



    return(
        <div className="cardsss">
            <Navbar/>
            <p className="text-9">Available sizes</p>
                <div className="buttonss">
<label className="cyberpunk-checkbox-label">
    <input type="checkbox" className="cyberpunk-checkbox" />
L</label>
<label className="cyberpunk-checkbox-label">
    <input type="checkbox" className="cyberpunk-checkbox" />
M</label>
<label className="cyberpunk-checkbox-label">
    <input type="checkbox" className="cyberpunk-checkbox" />
S</label>
            </div>
    <input type="text"
    className="input"
    value={inputText}
    onChange={handleTextChange}
    placeholder="Description"
    />
    <input type="text"
    className="input"
    value={inputPrice}
    onChange={handlePriceChange}
    placeholder="Price"
    />
    <input type="text"
    className="input"
     value={inputImage}
     onChange={handleImageChange}
     placeholder="Image"
    />
    <select  id="select">
        <option >Men</option>
        <option >Women</option>
        <option >Kids</option>
    </select>
    <input type="text" className="input" placeholder="Delivery Info"/>
    <select  id="select">
        <option >Sale</option>
        <option >No Sale</option>
    </select>
    <button onClick={handleSubmit} className="button-1">ADD A CARD</button>
    <div className="card-container">
        {cards.map((card, index)=>(
         <CardJs key={index}
         text={card.text}
         image={card.image}
         price={card.price} 
         id={card.id}
         onDelete={handleDelete}
         />
        ))}
    </div>
        </div>
    )
}

export default CardForm