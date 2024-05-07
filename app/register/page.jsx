'use client'
import React, { useState } from "react";
import './register.css'
import Navbar from "../navbar/page";
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../config";

const Login = () => {
    const [name, setName ]= useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [open, setOpen] = useState('');

    
    const handleLogin = async () => {
      // const auth = Auth();
        createUserWithEmailAndPassword(auth, name, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log('User registered succesfuly:', user.email)
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log('Error:', errorMessage)
          });
        }
        
    return(
        <div>
            <Navbar/>   
            <div className="login-card">
          <div>
            <p className="text">Sign In</p>
              </div>
          <div>
          <input
             className="input"
             type="text" 
             placeholder="Email"
             value={name}
             onChange={(e) => setName(e.target.value)}/>
              <input
              className="input"
             type="password" 
             placeholder="Password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}/>
             <button className="button22" onClick={() => {handleLogin(); setOpen(true)}}>Sign In</button>
          </div>
          </div>
          <div className="open" style={{display: open ? "flex" : 'none' }} onMouseOut={() => {setOpen(false)}}>
  <div className="loader">
    <span className="loader-text">Loading..99%</span>
      <span className="load"></span>
  </div>
          </div>
        </div>
    )
}

export default Login;