import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyATukeezujQwE7FxD16eArXkq1vJuaxtKE",
  authDomain: "everyday-basket-106a3.firebaseapp.com",
  projectId: "everyday-basket-106a3",
  storageBucket: "everyday-basket-106a3.appspot.com",
  messagingSenderId: "201750414762",
  appId: "1:201750414762:web:1bcf538c458020bf7ed7d3",
  measurementId: "G-E4B2HS35PJ",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
