import React from "react";
import Product from "../product/page";
import Navbar from "../navbar/page";
import './ooo.css'

const products = [
  { id: 1,
    name: 'Product-1',
    price: '$32',
    image: 'https://www.oneills.com/media/wysiwyg/cms-category-landing/kids-subcat/kids-landing-all-clothing-september-23.jpg'
  },
  { id: 1, 
    name: 'Product-2',
    price: '$28', 
    image: 'https://thumbs.nosto.com/quick/oneillsirelandnew/8/867164/262a5d9c0ccba02196512e9c0d09d1f599876e37a7a2765abb95478b4b3c3172/A'
  },
  { id: 1, 
    name: 'Product-3',
    price: '$25', 
    image: 'https://thumbs.nosto.com/quick/oneillsusanew/8/848858/4aa375aefad60857fb87126a73fa601da1bc75e4a4f47d0a5e8aa3346df0e4c6/A'
  },
  { id: 1, 
    name: 'Product-4',
    price: '$28', 
    image: 'https://www.oneills.com/media/catalog/product/cache/7c0093f75f453d86e7d165133c528de2/a/m/am3a9082.jpg'
  },

 
]

const Card = () =>{

      return(
        <div className="card-con">
          <Navbar/>
         {products.map(product => (
          <Product key={product.id}
           product={product}
           />
         ))}
        </div>
      )
}

export default Card;