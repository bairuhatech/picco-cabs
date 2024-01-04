// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHmPWAHcq2CozZVyRwSMKPuo3f8UnOOvU",
  authDomain: "picco-cabs.firebaseapp.com",
  projectId: "picco-cabs",
  storageBucket: "picco-cabs.appspot.com",
  messagingSenderId: "612165638871",
  appId: "1:612165638871:web:7efc798ff7e79c5f612e92",
  measurementId: "G-KD1PJ408DN"
};
// Initialize Firebase

const app:any = initializeApp(firebaseConfig);
export const auth:any = getAuth(app);
// const analytics = getAnalytics(app);





