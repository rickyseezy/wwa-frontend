// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwGuVuV0AmPhL3g1RifiTJboSEnUOVQ_s",
  authDomain: "world-we-act.firebaseapp.com",
  projectId: "world-we-act",
  storageBucket: "world-we-act.appspot.com",
  messagingSenderId: "18183419183",
  appId: "1:18183419183:web:42c36e27f788d45f02ddda",
  measurementId: "G-S877YX8RCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);