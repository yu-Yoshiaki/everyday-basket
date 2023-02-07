import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "src/libs/firebase";

export const getPhotoUrl = async (storagePath: string, newPhoto?: string) => {
  if (!storagePath || !newPhoto) return "";
  const reference = ref(storage, storagePath);
  return await getDownloadURL(reference);
};
