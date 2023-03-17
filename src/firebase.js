// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKSKvBUEvhvFDGfNDw-e1F08hrb3OliZA",
  authDomain: "travel-app-5a749.firebaseapp.com",
  projectId: "travel-app-5a749",
  storageBucket: "travel-app-5a749.appspot.com",
  messagingSenderId: "852491567644",
  appId: "1:852491567644:web:1a4a78caccdf95916ad5d9",
  measurementId: "G-BEQZD4C22R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const storage = getStorage(app);