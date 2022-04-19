// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBYj-U40S6nQW1aalAivvvqQadKMIR3PM",
  authDomain: "doctor-vai-64802.firebaseapp.com",
  projectId: "doctor-vai-64802",
  storageBucket: "doctor-vai-64802.appspot.com",
  messagingSenderId: "897859802939",
  appId: "1:897859802939:web:da59b2fee399e430d7091e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
