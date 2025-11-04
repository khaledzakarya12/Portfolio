import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJql9nFS6ycEMiCS4LOBXTtPuAbrL9J4U",
  authDomain: "protfolio-b1e22.firebaseapp.com",
  projectId: "protfolio-b1e22",
  storageBucket: "protfolio-b1e22.firebasestorage.app",
  messagingSenderId: "243313499375",
  appId: "1:243313499375:web:648040cad999592a400f1a",
  measurementId: "G-3PQQHP775E"
};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const database = getFirestore(app);