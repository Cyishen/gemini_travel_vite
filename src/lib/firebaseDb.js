import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_PUBLIC_FIREBASE_API_KEY,
  authDomain: "first-970fc.firebaseapp.com",
  projectId: "first-970fc",
  storageBucket: "first-970fc.appspot.com",
  messagingSenderId: "600473207743",
  appId: "1:600473207743:web:e0f57ea0622141e703570a",
  measurementId: "G-83WWWB11ZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app);