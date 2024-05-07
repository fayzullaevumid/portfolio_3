'use client'
import React, { useState } from "react";
import CardForm from "../cardform/page";
import CardForma from "../cardjs/page";

const Index = () => {
    const [cards, setCards] = useState([]);
    const addCard = (cardData) => {
        setCards([cards, cardData]);
    };
    return(
        <div>
       <CardForm onCard={addCard}/>
       <div>
        {cards.map((cards,) => (
            <CardForma  imageSrc={imageSrc} title={title} description={description}/>
        ))}
       </div>
        </div>
    )
}

export default Index;