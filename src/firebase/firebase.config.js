// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8Eegsqgz2I26C_pr2fY7dEOIjg5QaXJU",
  authDomain: "dragon-news-5d5e0.firebaseapp.com",
  projectId: "dragon-news-5d5e0",
  storageBucket: "dragon-news-5d5e0.firebasestorage.app",
  messagingSenderId: "1060141354853",
  appId: "1:1060141354853:web:b2006a2a32520434259b8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
