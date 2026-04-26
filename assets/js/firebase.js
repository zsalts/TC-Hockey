// assets/js/firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// Sumamos deleteDoc acá 👇
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyATcet3YbvYcSJTPf8UpTbUtkkO31Bb-no",
  authDomain: "tc-hockey.firebaseapp.com",
  projectId: "tc-hockey",
  storageBucket: "tc-hockey.firebasestorage.app",
  messagingSenderId: "729751792324",
  appId: "1:729751792324:web:13aa7148445168ab133791",
  measurementId: "G-702089KQC6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Y lo exportamos acá 👇
export { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc };