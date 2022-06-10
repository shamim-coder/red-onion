// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBchHWW9zrgZbDkFqwE8qDAvmUTuLjZSXU",
    authDomain: "red-onion-sk.firebaseapp.com",
    projectId: "red-onion-sk",
    storageBucket: "red-onion-sk.appspot.com",
    messagingSenderId: "314974402838",
    appId: "1:314974402838:web:88de490b8ea7d288d7f837",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
