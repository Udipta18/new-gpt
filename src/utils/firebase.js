// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsPNhCmPP5RibIMY0Ro3QtA04GZpX89vY",
  authDomain: "udipta-gpt.firebaseapp.com",
  projectId: "udipta-gpt",
  storageBucket: "udipta-gpt.appspot.com",
  messagingSenderId: "631981407068",
  appId: "1:631981407068:web:fcee5b2fa9bfd40c68df99",
  measurementId: "G-KT1KB4EQW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();


