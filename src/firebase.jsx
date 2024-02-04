// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc4V1SqZJj__WCvaYhZifglsmBkIdHlNQ",
  authDomain: "peer-support-f00db.firebaseapp.com",
  projectId: "peer-support-f00db",
  storageBucket: "peer-support-f00db.appspot.com",
  messagingSenderId: "526761497198",
  appId: "1:526761497198:web:2f09b2560f613c1d5a8c7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Add this line for authentication
const db = getDatabase(app);

export { app, auth, db as database };
