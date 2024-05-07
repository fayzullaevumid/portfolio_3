import React from "react";
import Produc from "../product/page";
import Navbar from "../navbar/page";
import './bbb.css'

const products = [
  { id: 1,
    name: 'Product-1',
    price: '$42',
    image: 'https://terrapro.uz/upload/resize_cache/iblock/5e1/wtr88ijmbz8ngpso788l5ox3f0giq5p0/435_544_1/SS24WES-21100-1%2010.jpg'
  },
  { id: 1, 
    name: 'Product-2',
    price: '$40', 
    image: 'https://terrapro.uz/upload/resize_cache/iblock/bc9/8mzmumnsy72rcaf6b3yb1jlnny112o5m/435_544_1/SS24WES-21100%201.jpg'
  },
  { id: 1, 
    name: 'Product-3',
    price: '$35', 
    image: 'https://terrapro.uz/upload/resize_cache/iblock/c42/0n97k45uxtgvlcm6j1gnnczexuijr4ha/435_544_1/SS24WES-21109%201.jpg'
  },
  { id: 1, 
    name: 'Product-3',
    price: '$35', 
    image: 'https://terrapro.uz/upload/resize_cache/iblock/100/n79dbdlgab5xrnzh5l10qs6ay6o9coz6/435_544_1/SS24WES-21106%201.jpg'
  },
]

const Card = () =>{

      return(
        <div>
          <div className="card-con">
          <Navbar/>
         {products.map(product => (
          <Produc key={product.id}
           product={product}
           />
         ))}
         </div>
        </div>
      )
}

export default Card;