// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA68I2sYVHbq4woSREpAtA-ZZvxcBBj5pk",
  authDomain: "creditus-z.firebaseapp.com",
  databaseURL: "https://creditus-z-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "creditus-z",
  storageBucket: "creditus-z.appspot.com",
  messagingSenderId: "666675973592",
  appId: "1:666675973592:web:d19403b643df645d60b6ad"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Get a reference to database service
const database = getDatabase();

export default database;