import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAi0yhvBY9lz_-Lc3GXVSzcq4596d0zEao",
  authDomain: "odev-takip-sistemi-bf3fb.firebaseapp.com",
  projectId: "odev-takip-sistemi-bf3fb",
  storageBucket: "odev-takip-sistemi-bf3fb.firebasestorage.app",
  messagingSenderId: "1029015236060",
  appId: "1:1029015236060:web:7f54d0770aea5768bb7319"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);