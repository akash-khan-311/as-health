// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Import Auth From Firebase
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYHuj0qj1dE8CP3MD92_7dfVseS-efxck",
  authDomain: "as-event-management.firebaseapp.com",
  projectId: "as-event-management",
  storageBucket: "as-event-management.appspot.com",
  messagingSenderId: "500439189026",
  appId: "1:500439189026:web:35edea987d6ac073dc2c7b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
