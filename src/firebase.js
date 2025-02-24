// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoy4G6h8a2_REQZkx5XVuZwooH9egDJsc",
    authDomain: "dailyshoop-ad838.firebaseapp.com",
    projectId: "dailyshoop-ad838",
    storageBucket: "dailyshoop-ad838.firebasestorage.app",
    messagingSenderId: "865214461536",
    appId: "1:865214461536:web:d4ae09d7c33024eff9f505",
    measurementId: "G-49F8VRJKZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics