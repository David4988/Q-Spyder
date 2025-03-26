// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgC6h7jZlgj3Xv0djhF83ihwcs2BVQHwI",
  authDomain: "innovators-hub-music-1bc35.firebaseapp.com",
  projectId: "innovators-hub-music-1bc35",
  storageBucket: "innovators-hub-music-1bc35.firebasestorage.app",
  messagingSenderId: "153520677821",
  appId: "1:153520677821:web:f67395dde0db135b99e8d4",
  measurementId: "G-KNC1CTXCBQ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const __AUTH = getAuth(firebaseApp)
export const __DB = getFirestore(firebaseApp)