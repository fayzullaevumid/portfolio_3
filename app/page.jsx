import React from "react";
import Navbar from "./navbar/page";
import Section from "./section/page";
// import Footer from './Footer/page'
import './global.css'

const images = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg',
  ];

const Page = () => {
    return(
        <div>
            <Navbar/>
            <Section />
            {/* <Footer/> */}
        </div>
    )
}

export default Page;