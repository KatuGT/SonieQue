// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "sonieque-8084b.firebaseapp.com",
  projectId: "sonieque-8084b",
  storageBucket: "sonieque-8084b.appspot.com",
  messagingSenderId: "853785102054",
  appId: "1:853785102054:web:2bc11afb59f90e949a5d27",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
