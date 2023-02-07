import Link from "next/link";
import type { FC } from "react";
import { UserMenu } from "src/components/UserMenu";
import { useAuth } from "src/libs/auth";
import { getUserInfo } from "src/libs/user";
import useSWR from "swr";

export const Header: FC = () => {
  const { user } = useAuth();
  const { data } = useSWR(user && `/court/${user.uid}/userInfo`, () => {
    return getUserInfo(user?.uid as string);
  });

  return (
    <header className="flex items-center justify-between p-5">
      <Link href="/">
        <h1 className="py-2 text-2xl font-bold md:text-3xl">
          <span className="inline-block">🏀</span>エブリデイバスケ
        </h1>
      </Link>

      {user ? (
        <UserMenu>
          <div className="">{data?.name ?? "no name"}</div>
        </UserMenu>
      ) : (
        <div>
          <Link href={"/auth/login"}>ログイン</Link>
          <Link href={"/auth/signup"}>登録</Link>
        </div>
      )}
    </header>
  );
};
