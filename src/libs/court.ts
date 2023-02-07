import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "src/libs/firebase";

export type CreateUpdateCourt = {
  name?: string;
  images?: string[];
  usecase?: {
    everyone: boolean;
    rental: boolean;
    createCard: boolean;
    memberShip: boolean;
  };
  location?: {
    postalCode: string;
    prefecture: string;
    city: string;
    address: string;
  };
  homepage?: string;
  tel?: string;
  openToClose?: string;
  horiday?: string;
  address?: string;
  access?: string;
  latitude?: number;
  longitude?: number;
  price?: {
    citizens?: number;
    outCitizens?: number;
    detail?: string;
    paymentMethods?: {
      money: boolean;
      card: boolean;
      ic: boolean;
      qr: boolean;
    };
  };
  facility?: {
    changingRoom: boolean;
    shower: boolean;
    toilet: boolean;
    parking: boolean;
  };
};

export type ReadCourt = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name?: string;
  images?: string[];
  usecase?: {
    everyone: boolean;
    rental: boolean;
    createCard: boolean;
    memberShip: boolean;
  };
  location?: {
    postalCode: string;
    prefecture: string;
    city: string;
    address: string;
  };
  homepage?: string;
  tel?: string;
  openToClose?: string;
  horiday?: string;
  address?: string;
  access?: string;
  latitude?: number;
  longitude?: number;
  price?: {
    citizens?: number;
    outCitizens?: number;
    detail?: string;
    paymentMethods?: {
      money: boolean;
      card: boolean;
      ic: boolean;
      qr: boolean;
    };
  };
  facility?: {
    changingRoom: boolean;
    shower: boolean;
    toilet: boolean;
    parking: boolean;
  };
};

export type SSGReadCourt = {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  name?: string;
  images?: string[];
  usecase?: {
    everyone: boolean;
    rental: boolean;
    createCard: boolean;
    memberShip: boolean;
  };
  location?: {
    postalCode: string;
    prefecture: string;
    city: string;
    address: string;
  };
  homepage?: string;
  tel?: string;
  openToClose?: string;
  horiday?: string;
  address?: string;
  access?: string;
  latitude?: number;
  longitude?: number;
  price?: {
    citizens?: number;
    outCitizens?: number;
    detail?: string;
    paymentMethods?: {
      money: boolean;
      card: boolean;
      ic: boolean;
      qr: boolean;
    };
  };
  facility?: {
    changingRoom: boolean;
    shower: boolean;
    toilet: boolean;
    parking: boolean;
  };
};

export const getAllCourts = async () => {
  const ref = collection(db, "courts");
  const q = query(ref, orderBy("createdAt"));
  const snapShot = await getDocs(q);
  return snapShot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
      createdAt: new Date(doc.data().createdAt.toDate()),
      updatedAt: new Date(doc.data().updatedAt.toDate()),
    } as ReadCourt;
  });
};

export const getCourtsSelect = async (maker: string) => {
  const ref = collection(db, "courts");
  let q = query(ref);

  if (maker !== "all") {
    q = query(q, where("maker", "==", maker));
  }

  const snapShot = await getDocs(q);

  return snapShot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    } as ReadCourt;
  });
};

export const getAllCourtOnSnapshot = async () => {
  const ref = collection(db, "courts");
  const q = query(ref, orderBy("createdAt"));
  return onSnapshot(q, (snapShot) => {
    return snapShot.docs.map((doc) => {
      return {
        ...doc.data(),
      };
    });
  });
};

export const getCourt = async (courtId: string) => {
  const ref = doc(db, "courts", courtId);
  const snapShot = await getDoc(ref);
  return {
    id: snapShot.id,
    ...snapShot.data(),
    createdAt: new Date(snapShot.data()?.createdAt.toDate()),
    updatedAt: new Date(snapShot.data()?.updatedAt.toDate()),
  } as ReadCourt;
};

export const createCourt = async (data: CreateUpdateCourt) => {
  const ref = doc(collection(db, "courts"));
  const id = ref.id;
  const newData = {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    id,
  };

  await setDoc(ref, newData);
};
export const updateCourt = async (courtId: string, data: CreateUpdateCourt) => {
  const ref = doc(db, "courts", courtId);
  const newData = {
    ...data,
    updatedAt: serverTimestamp(),
  };

  await updateDoc(ref, newData);
};
