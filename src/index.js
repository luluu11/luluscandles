
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC8qYHBnlzpXcxw7MiA0MQjOCnF8NSfTs",
  authDomain: "luluscandles-170b2.firebaseapp.com",
  projectId: "luluscandles-170b2",
  storageBucket: "luluscandles-170b2.appspot.com",
  messagingSenderId: "376191842227",
  appId: "1:376191842227:web:dbc68932bbcc4bf4243dc6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


