import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "src/libs/firebase";

export type CreateUpdateUserInfo = {
  id?: string;
  image?: string;
  name?: string;
  age?: number;
  sex?: "male" | "female";
  level?: string;
  shoes?: string[];
  pr?: string;
};

export type ReadUserInfo = {
  id: string;
  createdAt: Date;
  updateAt: Date;
  name?: string;
  age?: number;
  sex?: "male" | "female";
  level?: string;
  shoes: string[];
  pr?: string;
  image?: string;
};

export const getAllUser = async () => {
  const ref = collection(db, "user");
  const q = query(ref, orderBy("createdAt"));
  const snapShot = await getDocs(q);
  return snapShot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    } as ReadUserInfo;
  });
};

export const getUserInfo = async (userId: string) => {
  const ref = doc(db, "user", userId);
  const snapShot = await getDoc(ref);
  return {
    id: snapShot.id,
    ...snapShot.data(),
  } as ReadUserInfo;
};

export const getUserName = async (userId: string) => {
  const ref = doc(db, "user", userId);
  const snapShot = await getDoc(ref);
  return {
    id: snapShot.id,
    ...snapShot.data(),
  } as ReadUserInfo;
};

export const createUserInfo = async (
  id: string,
  data: CreateUpdateUserInfo
) => {
  const ref = doc(collection(db, "user"), id);
  await setDoc(ref, {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
};

export const updateUserInfo = async (
  id: string,
  data: CreateUpdateUserInfo
) => {
  const ref = doc(collection(db, "user"), id);

  await updateDoc(ref, {
    ...data,
    updatedAt: serverTimestamp(),
  });
};
