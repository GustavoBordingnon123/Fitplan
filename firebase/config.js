// firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz9IbDJTkHvuMyWK9Ik12R2g7KCXfTJ4U",
  authDomain: "fitplan-81dfa.firebaseapp.com",
  projectId: "fitplan-81dfa",
  storageBucket: "fitplan-81dfa.appspot.com",
  messagingSenderId: "39054978083",
  appId: "1:39054978083:web:5c88dd130a7973952d5596",
  measurementId: "G-1JN1TMLKBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { firebaseConfig };
