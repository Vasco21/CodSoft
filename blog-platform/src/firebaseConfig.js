// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAWob_uU9K_WbqDVZ4o5jm2D4ykS6CXiLU",
  authDomain: "blog-platform-2097a.firebaseapp.com",
  projectId: "blog-platform-2097a",
  storageBucket: "blog-platform-2097a.appspot.com",
  messagingSenderId: "420503504294",
  appId: "1:420503504294:web:c4010184d85b4e5933fb67",
  measurementId: "G-ECYXW080WX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
