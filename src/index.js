import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc2TA3h_Vdq4rw5hphtV7-yd3vPipcw2M",
  authDomain: "e-commerce-faef1.firebaseapp.com",
  projectId: "e-commerce-faef1",
  storageBucket: "e-commerce-faef1.appspot.com",
  messagingSenderId: "36196659788",
  appId: "1:36196659788:web:e82fc0393510f3d0f73ae9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


