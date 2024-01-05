
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAUCoW6-ujWg1Z-g_CJhsezpdhp9POTd1U",
  authDomain: "movie-world-37c31.firebaseapp.com",
  projectId: "movie-world-37c31",
  storageBucket: "movie-world-37c31.appspot.com",
  messagingSenderId: "714867152189",
  appId: "1:714867152189:web:9b9a6d386dffc50b496154"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const movieRef=collection(db, "movies");
export default app;