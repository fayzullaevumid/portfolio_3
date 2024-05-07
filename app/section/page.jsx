'use client'
import React,{useState} from "react";
import './section.css'
import Mapping from '../mapping/page'
import { useRouter } from "next/navigation";

const arrray = [
    { id: 1,
        name: 'Product-1',
        price: '$32',
        image: 'https://terrapro.uz/upload/resize_cache/iblock/450/oqa12lcacbs8o7b3hkf8zewvqq94xdg6/435_544_1/SS24CR3-2-20040%201.jpg'
      },
      { id: 1, 
        name: 'Product-2',
        price: '$28', 
        image: 'https://terrapro.uz/upload/resize_cache/iblock/891/qeuqd8y8gzjirwqgt13u88pw35e446fx/435_544_1/SS24CR3-2-19932%20%201.jpg'
      },
      { id: 1, 
        name: 'Product-3',
        price: '$25', 
        image: 'https://terrapro.uz/upload/resize_cache/iblock/1dd/z2md5d20o9uveu9uvuxicnv6vy0wdnge/435_544_1/SS24CR3-2-19932%201.jpg'
      },
      { id: 1, 
        name: 'Product-4',
        price: '$28', 
        image: 'https://terrapro.uz/upload/resize_cache/iblock/f14/qad085t1ccq4ayjvo2bbj5orclr086uh/435_544_1/SS24CR2-19-20092%201.jpg'
      },
      { id: 1, 
        name: 'Product-3',
        price: '$25', 
        image: 'https://terrapro.uz/upload/resize_cache/iblock/f14/qad085t1ccq4ayjvo2bbj5orclr086uh/435_544_1/SS24CR2-19-20092%201.jpg'
      },
    
]

const Section = () => {
    const router = useRouter()
    return(
        <div>
            <div className="divv">
        <div className="div-1">
            <p className="text">
                <strong>Best Fashion Collection</strong>
            </p>
            <p className="text-1">
            A brand of minimalist urban  clothing for men,  using exclusively natural  fabrics and materials.
 <br />
            </p>
            <button className="button33" onClick={() => router.push('./card')}>explore shop collection</button>
        </div>
        <img className="image-11" src="https://nypost.com/wp-content/uploads/sites/2/2018/06/men-shopping-masculine.jpg?quality=75&strip=all" alt="" />
        </div>
        <div className="icons">
            <div className="dd">
                <img className="icone" src="https://www.svgrepo.com/show/482520/clothes-hanger.svg" alt="" />
                <p className="pp">покупка товаров в рассрочку <br />и без комиссии</p>
                </div>
                <div className="dd">
                <img className="icone" src="https://www.svgrepo.com/show/447761/return.svg" alt="" />
                <p className="pp">легкий возврат товаров</p>
                </div>
                <div className="dd">
                <img className="icone" src="https://www.svgrepo.com/show/509169/money.svg" alt="" />
                <p className="pp">бесплатная доставка</p>
                </div>
                <div className="dd">
                <img className="icone" src="https://www.svgrepo.com/show/480999/delivery.svg" alt="" />
                <p className="pp">доставка по всему Узбекистану</p>
                </div>
                <div className="dd"> 
                <img className="icone" src="https://www.svgrepo.com/show/485886/sale.svg" alt="" />
                <p className="pp">доступные цены</p>
                </div>
        </div>
    <div className="div-2">
        <p className="text-2">Clothing categories</p>
        <p className="text-3">Minimalism, uniqueness, quality and exclusively <br /> natural materials</p>
        <div className="div-3">
            <a className="a1" href="/card">
            <img className="image-1" src="https://terrapro.uz/upload/resize_cache/iblock/7c9/5s4uvfblybuwrthq5th55la86pqkmt45/399_548_1/D4F62D07-14A1-415A-999A-DB050C2736E9.webp" alt="" />
            <img className="image-1" src="https://terrapro.uz/upload/resize_cache/iblock/cb5/hdy39517c4vz0kwej0023exx0kkujlzf/399_548_1/AF2EF25A-3590-4AE8-9740-14A4C8CF1D59.webp" alt="" />
            <img className="image-1" src="https://terrapro.uz/upload/resize_cache/iblock/bd4/wgeorshjgmbq3pgdstyeo5ejb5iofuzh/399_548_1/F8B595DB-965D-4438-8C99-923FB4A5CF2E.webp" alt="" />
            </a>
        </div>
        <div className="div-3">
            <a className="a1" href="/card">
            <img className="image-1" src="https://terrapro.uz/upload/resize_cache/iblock/aed/z7f4o17tujyhsogxwgqsp3wdjx1lxerl/399_548_1/08184-208186208190208191208184209143.webp" alt="" />
            <img className="image-1" src="https://terrapro.uz/upload/resize_cache/iblock/829/rhnyrtec7j8p4s5xjjc4n650ngki2n00/399_548_1/09139-208186208190208191208184209143.webp" alt="" />
            <img className="image-1" src="https://terrapro.uz/upload/resize_cache/iblock/e85/fo046jfjq7a0tq4r9eoxqhbstpyjywc6/399_548_1/940C3283-10DA-4419-A6DE-2B85C0FF7E11.webp" alt="" />
            </a>
        </div>
    </div>
    <div className="card-con">
    {arrray.map(map => (
        <Mapping key={map.id}
        map={map}
        />
    ))}
    </div>
    <div className="dic">
    <div className="div-4">
        <p className="tex-5">О нас </p>
        <p className="tex-6"><br />
        Мы - команда энтузиастов моды, объединенных <br /> стремлением создать неповторимый стиль каждому нашему клиенту. <br />
         В нашем интернет-магазине вы найдете не только <br /> качественную одежду, но и вдохновение для создания своего <br />
         собственного образа. Наша миссия - помочь вам выразить <br /> свою индивидуальность через 
        моду и сделать ваш шопинг незабываемым и <br /> удобным. Добро пожаловать в мир стиля и красоты!
     <img className="img-3" src="https://terrapro.uz/images/about-new.webp" alt="" />
</p>
    </div>
    </div>
    <div className="footer">
        <h6 id="h6">+998 90 000 00 07 <br />
        hello@test.com
        </h6>
        <p id="tt">
            г.Ташкент, улица Кушбеги, 54
        </p>
        <div className="iconsss">
            <div id="gg">
            <img id="iconss" src="https://www.svgrepo.com/show/512399/instagram-167.svg" alt="" />
            </div>
            <div id="gg">
            <img id="iconss" src="https://www.svgrepo.com/show/506477/facebook.svg" alt="" />
            </div>
            <div id="gg">
            <img id="iconss" src="https://www.svgrepo.com/show/473804/telegram.svg" alt="" />
            </div>
        </div>
    </div>
        </div>
    )
}

export default Section;