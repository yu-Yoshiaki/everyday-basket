import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 自分のプロジェクトのConfigデータを貼る
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
