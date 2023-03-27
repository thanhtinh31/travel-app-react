// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfsSBdIOhFpDNFrv0zUJoHi43osy5jSAc",
  authDomain: "test-chat-cca5c.firebaseapp.com",
  projectId: "test-chat-cca5c",
  storageBucket: "test-chat-cca5c.appspot.com",
  messagingSenderId: "631736806131",
  appId: "1:631736806131:web:4deebedcb03259d493e586",
  measurementId: "G-RP7QJVFC61"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const storage = getStorage(app);