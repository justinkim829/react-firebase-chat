import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);