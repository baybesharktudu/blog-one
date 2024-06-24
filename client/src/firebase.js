// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: 'blog-7eff3.firebaseapp.com',
    projectId: 'blog-7eff3',
    storageBucket: 'blog-7eff3.appspot.com',
    messagingSenderId: '671401883941',
    appId: '1:671401883941:web:1681631fbb43babb5302cc',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
