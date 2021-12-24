import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { UserContextProvider } from './context/userContext';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6aCrmqN4EplcJe7qRhQ24qJ9FS8M5bAw",
  authDomain: "final-assignment-3e1d7.firebaseapp.com",
  projectId: "final-assignment-3e1d7",
  storageBucket: "final-assignment-3e1d7.appspot.com",
  messagingSenderId: "372222998667",
  appId: "1:372222998667:web:20185fb41ab30b6267fc8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
