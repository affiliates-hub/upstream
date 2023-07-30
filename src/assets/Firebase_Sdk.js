// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyQEzB2xPtdNnQIT48qR_ScIIGziTO39I",
  authDomain: "upstream-7ba7d.firebaseapp.com",
  projectId: "upstream-7ba7d",
  storageBucket: "upstream-7ba7d.appspot.com",
  messagingSenderId: "470728619765",
  appId: "1:470728619765:web:e7167ad2e819cfb31077bc",
  measurementId: "G-8Q179VPTRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app