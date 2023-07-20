// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "react-shop-dbe8b.firebaseapp.com",
  projectId: "react-shop-dbe8b",
  storageBucket: "react-shop-dbe8b.appspot.com",
  messagingSenderId: "443301445342",
  appId: "1:443301445342:web:e7e0dc59610ec3ee35cc4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);