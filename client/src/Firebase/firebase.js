// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj7W-rQD0Rt-3Drj07wnUulWd1_IdGEak",
  authDomain: "spare-parts-832f5.firebaseapp.com",
  projectId: "spare-parts-832f5",
  storageBucket: "spare-parts-832f5.firebasestorage.app",
  messagingSenderId: "220144058616",
  appId: "1:220144058616:web:66696183eaf793c8927b0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const Db = getFirestore(app)

export {auth,app,Db}