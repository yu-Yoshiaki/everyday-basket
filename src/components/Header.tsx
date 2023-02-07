import Link from "next/link";
import type { FC } from "react";
import { UserMenu } from "src/components/UserMenu";
import { auth } from "src/libs/firebase";
import { getUserInfo } from "src/libs/user";
import useSWR from "swr";

export const Header: FC = () => {
  const user = auth.currentUser;
  const { data } = useSWR(user && `/court/${user.uid}/userInfo`, () => {
    return getUserInfo(user?.uid as string);
  });

  return (
    <header className="flex items-center justify-between px-4 pt-4 pb-2">
      <Link href="/">
        <h1 className="text-2xl font-bold md:text-3xl">
          <span className="inline-block">🏀</span>エブリデイバスケ
        </h1>
      </Link>

      {user ? (
        <UserMenu>{data?.name ?? "no name"}</UserMenu>
      ) : (
        <div className="flex gap-2">
          <Link href={"/auth/login"} className="text-blue-400">
            ログイン
          </Link>
          <Link href={"/auth/signup"} className="text-green-400">
            登録
          </Link>
        </div>
      )}
    </header>
  );
};
