import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAVH6OoifUPKb-VYvWE63nrJIUq2qyxiGM",
    authDomain: "profile-builder-ace.firebaseapp.com",
    projectId: "profile-builder-ace",
    storageBucket: "profile-builder-ace.appspot.com",
    messagingSenderId: "981481036224",
    appId: "1:981481036224:web:460b17a47a83a2bc4e5025",
    measurementId: "G-QNQBHB55DD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
getAnalytics(app);