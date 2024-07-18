import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJF_kkYhjiwFjFZq4fz-gDXnmVOZXkf_U",
  authDomain: "expenses-app-4ae87.firebaseapp.com",
  projectId: "expenses-app-4ae87",
  storageBucket: "expenses-app-4ae87.appspot.com",
  messagingSenderId: "5902554327",
  appId: "1:5902554327:web:4ef6405d83c6ccf8610c92",
  measurementId: "G-99X7ZLKH7M",
};

initializeApp(firebaseConfig);

const db = getFirestore();

export { db };