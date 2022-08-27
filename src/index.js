import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4t0BgmdOyvvEd_8zXDG9nOpHd7tpjJeI",
  authDomain: "react-dividend-tracker.firebaseapp.com",
  databaseURL: "https://react-dividend-tracker-default-rtdb.firebaseio.com",
  projectId: "react-dividend-tracker",
  storageBucket: "react-dividend-tracker.appspot.com",
  messagingSenderId: "872270568578",
  appId: "1:872270568578:web:5bcb08df4af72961a4a89b",
  measurementId: "G-74612CYQCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
