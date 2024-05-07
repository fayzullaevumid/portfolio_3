'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../navbar/page";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './login.css'
import { auth } from "../config";

const Login = () => {
    const router = useRouter();
    const [email, setEmail ]= useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [open, setOpen] = useState('')

    const handleLogin = async () => {
    // const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
    console.log('User succesfully created:' , user)
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error:', errorMessage)
      });
    }

    // console.log('User succesfully created', user)
        // console.log('Error:')

    return(
        <div>
            <Navbar/>   
            <div className="login-card">
          <div>
            <p className="text-4">Sign Up</p>
          </div>
          <div>
            <form action="">
          <input
          className="input"
          placeholder="Email"
             type="text" 
             value={email}
             onChange={(e) => setEmail(e.target.value)}/>  
              <input
              className="input"
              placeholder="Password"
             type="password" 
             value={password}
             onChange={(e) => setPassword(e.target.value)}/>
       
             <button className="button22" onClick={() => {handleLogin(); setOpen(true)}}>Sign Up</button>
             </form>
          </div>
    <button className="button1" onClick={() => router.push('./register')}>Sign In</button>
          </div>
          <div className="open"  style={{display: open ? 'flex' : 'none' }}  onMouseOut={() => {setOpen(true)}}>
          <div className="loader" >
    <span className="loader-text">Loading..99%</span>
      <span className="load"></span>
  </div>
  </div>
        </div>
    )
}

export default Login;