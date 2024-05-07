 'use client';
import {useRouter} from 'next/navigation'
import './page.css'

const Navbar = () => {
    const router = useRouter();
    return(
        <div className="navbar">
           <p className="text-1"><strong>Ecommercery</strong></p>
           <div className="navbar-2">
            <a className='a2' href="/">Home</a>
            <a className='a2' href="/card">All Products</a>
            <a className='a2' href="">Men</a>
            <a className='a2' href="/women">Women</a>
            <a className='a2' href="/kids">Kids</a>
            <a className='a2' href="/client">Client View</a>
           </div>
           <button className="button" onClick={() => router.push('./login')}>Sign Up</button>
        </div>
    )
}

export default Navbar