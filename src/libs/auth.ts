import type { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth } from "src/libs/firebase";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const { push } = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        push("/auth/login");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [push]);

  return { user };
};
