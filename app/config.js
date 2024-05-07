// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Auth } from "firebase/auth";
// import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyBsUfOlNpipAgDJQJaCNcvQs4kp5RQ-cB0",
  authDomain: "project-75d2e.firebaseapp.com",
  projectId: "project-75d2e",
  storageBucket: "project-75d2e.appspot.com",
  messagingSenderId: "525645799648",
  appId: "1:525645799648:web:538bba04a6ca03eaf9b085",
  measurementId: "G-2HFRNJRZK4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
// export const userProvider = createUserWithEmailAndPassword(app)