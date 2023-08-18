// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig:any = {
  apiKey: "AIzaSyAo9bfm5xxux3CDiIv0MbBdNqVlDElZYu0",
  authDomain: "piccocabs-9e73d.firebaseapp.com",
  projectId: "piccocabs-9e73d",
  storageBucket: "piccocabs-9e73d.appspot.com",
  messagingSenderId: "223371683911",
  appId: "1:223371683911:web:853e1994c994490567a962",
  measurementId: "G-8RNM9EC131",
};

// Initialize Firebase
const app:any = initializeApp(firebaseConfig);
export const auth:any = getAuth(app);
// const analytics = getAnalytics(app);
