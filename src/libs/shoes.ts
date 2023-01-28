import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "src/libs/firebase";

export type Shoes = {
  id?: string;
  maker: string;
  image: string;
  name: string;
  model?: string;
  color?: string;
};

export const getAllShoes = async () => {
  const ref = collection(db, "shoes");
  const q = query(ref, orderBy("createdAt"));
  const snapShot = await getDocs(q);
  return snapShot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    } as Shoes;
  });
};

export const getShoesSelect = async (maker: string) => {
  const ref = collection(db, "shoes");
  let q = query(ref);

  if (maker !== "all") {
    q = query(q, where("maker", "==", maker));
  }

  const snapShot = await getDocs(q);

  return snapShot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    } as Shoes;
  });
};

export const getOneShoe = async (shoesId: string) => {
  const ref = doc(db, "shoes", shoesId);
  const snapShot = await getDoc(ref);
  return {
    id: snapShot.id,
    ...snapShot.data(),
  } as Shoes;
};

export const createOneShoe = async (data: Shoes) => {
  const ref = doc(collection(db, "shoes"));
  const id = ref.id;
  const newData = {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    id,
  };
  await setDoc(ref, newData);
};
