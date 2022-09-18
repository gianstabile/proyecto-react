// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi5kNq9ysYOvWi2SZrETAICOVd7mW0aN8",
  authDomain: "greed-sexshop.firebaseapp.com",
  projectId: "greed-sexshop",
  storageBucket: "greed-sexshop.appspot.com",
  messagingSenderId: "732830421933",
  appId: "1:732830421933:web:f0867d0275051a2c838724",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
