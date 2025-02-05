import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration (replace with your own values)
const firebaseConfig = {
    apiKey: "AIzaSyCSO76W5xtuSe8Y-mRzPg_LQKXcfOkHb5w",
    authDomain: "kandglobal-52c0b.firebaseapp.com",
    projectId: "kandglobal-52c0b",
    storageBucket: "kandglobal-52c0b.firebasestorage.app",
    messagingSenderId: "506320128304",
    appId: "1:506320128304:web:94af42f80c2a791cbaa0f5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth and Firestore instances
export const auth = getAuth(app);
export const db = getFirestore(app);
