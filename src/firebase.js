// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "key comes here",
  authDomain: "realtor-clone-react-66af0.firebaseapp.com",
  projectId: "realtor-clone-react-66af0",
  storageBucket: "realtor-clone-react-66af0.firebasestorage.app",
  messagingSenderId: "714753438401",
  appId: "1:714753438401:web:96a1a86d9beb2ceeb9da40"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();