import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-eb502.firebaseapp.com",
  projectId: "reactchat-eb502",
  storageBucket: "reactchat-eb502.appspot.com",
  messagingSenderId: "592132967849",
  appId: "1:592132967849:web:380b2f8571fac09e6a08b8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
