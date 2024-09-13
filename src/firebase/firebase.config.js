// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoapvj6iI_2kDCxGvZKcqt9EQIbrPEM68",
    authDomain: "auth-fe8d4.firebaseapp.com",
    projectId: "auth-fe8d4",
    storageBucket: "auth-fe8d4.appspot.com",
    messagingSenderId: "380913890393",
    appId: "1:380913890393:web:43c18f366cc61854ac6d48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;