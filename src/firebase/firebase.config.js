// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMRypNBhCi2TtNYf5xZYmLWVU3CXzubRw",
  authDomain: "dragon-news-e2c50.firebaseapp.com",
  projectId: "dragon-news-e2c50",
  storageBucket: "dragon-news-e2c50.appspot.com",
  messagingSenderId: "355451359412",
  appId: "1:355451359412:web:dd3102024cd1f3cf6047e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); 

export default auth; 