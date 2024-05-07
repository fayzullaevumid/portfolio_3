'use client'
import React from "react";
import './header.css'
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter()
    return(
        <div className="header">
            <p><strong>Ecommercery</strong></p>
            <div className="header-1">
            <a href="">Manage All Products</a>
            <a href="/card">All Porducts</a>
            </div>
            <div className="header-2">
            <button className="button55" onClick={() => router.push('/')}>Client View</button>
            <button className="button55" onClick={() => router.push('/login')}>Logout</button>
            </div>
        </div>
    )
}

export default Header