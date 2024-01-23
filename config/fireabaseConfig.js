// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF7uPrLh-aUVFZvd3fxDVEuTh6_mWbwys",
  authDomain: "sales-proposal-e0f62.firebaseapp.com",
  databaseURL: "https://sales-proposal-e0f62-default-rtdb.firebaseio.com",
  projectId: "sales-proposal-e0f62",
  storageBucket: "sales-proposal-e0f62.appspot.com",
  messagingSenderId: "352872765769",
  appId: "1:352872765769:web:5c45abab1cb3d4d0f9a298",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
