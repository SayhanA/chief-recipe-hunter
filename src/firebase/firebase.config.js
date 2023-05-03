// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqrXzLoc8iEnj7scHisA0ezAvSYqavs7M",
  authDomain: "b7a10-chef-recipe-hunter-466b2.firebaseapp.com",
  projectId: "b7a10-chef-recipe-hunter-466b2",
  storageBucket: "b7a10-chef-recipe-hunter-466b2.appspot.com",
  messagingSenderId: "302697876126",
  appId: "1:302697876126:web:7791bd73f4d5f405ba898f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;