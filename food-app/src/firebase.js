// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgm-4wZLgFq38O01bh2cWUCU7kFHgYQBQ",
  authDomain: "movielab-de120.firebaseapp.com",
  projectId: "movielab-de120",
  storageBucket: "movielab-de120.appspot.com",
  messagingSenderId: "687659644065",
  appId: "1:687659644065:web:0d4027a3c7b04d3037ace0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
