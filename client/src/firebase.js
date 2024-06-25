// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ_yPqyP1cBQqwcxdhZkoKUoIjZsaW4uE",
  authDomain: "mern-estate-131bc.firebaseapp.com",
  projectId: "mern-estate-131bc",
  storageBucket: "mern-estate-131bc.appspot.com",
  messagingSenderId: "134466525930",
  appId: "1:134466525930:web:a9a256074bd9221cef9593",
  measurementId: "G-NNH37Z1PCZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);