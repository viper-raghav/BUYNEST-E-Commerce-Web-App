// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "e-com-web-app-be633.firebaseapp.com",
  projectId: "e-com-web-app-be633",
  storageBucket: "e-com-web-app-be633.firebasestorage.app",
  messagingSenderId: "200215845080",
  appId: "1:200215845080:web:67c78fee6622840f2a9fad",
  measurementId: "G-FDPJ6B7T63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);