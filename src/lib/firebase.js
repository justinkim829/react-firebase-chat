// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-6df08.firebaseapp.com",
  projectId: "reactchat-6df08",
  storageBucket: "reactchat-6df08.appspot.com",
  messagingSenderId: "247076924671",
  appId: "1:247076924671:web:a530a7868970d33dcdf0ca",
  measurementId: "G-5GN7Q3R2FZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);