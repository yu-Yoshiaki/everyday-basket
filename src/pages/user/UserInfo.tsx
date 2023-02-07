// import Image from "next/image";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { useAuth } from "src/libs/auth";
import { getUserUseShoes } from "src/libs/shoes";
import { getUserInfo } from "src/libs/user";
import useSWR from "swr";

export const UserInfo: FC = () => {
  const { user } = useAuth();
  const { data } = useSWR(user && `/court/${user.uid}/userInfo`, () => {
    return getUserInfo(user?.uid as string);
  });

  const { data: userUseShoes } = useSWR(
    data && `/court/${user?.uid}/userInfo/shoes`,
    () => {
      if (!data || !data.shoes) return;
      return getUserUseShoes(data.shoes);
    }
  );

  if (!user || !data) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex items-center justify-center pt-5 pb-2">
        <div className="relative h-32 w-32">
          {data.image ? (
            <Image
              src={data.image}
              alt={""}
              fill
              className="rounded-full bg-gray-300"
            />
          ) : (
            <div className="h-40 w-40 rounded-full bg-gray-300 "></div>
          )}
        </div>
      </div>
      <div className="mb-4 text-center text-xl font-bold">
        {data.name ?? "No name"}
        <Link
          href={`/user/${user}/edit`}
          className="ml-2 text-xs text-blue-400"
        >
          編集する
        </Link>
      </div>
      <div className="flex justify-center divide-x-2 px-5">
        <div className="px-4 text-center">
          <div className="text-lg font-bold">{data.age ?? "未登録"}</div>
          <div className="text-sm font-semibold text-gray-400">年代</div>
        </div>
        <div className="px-4 text-center">
          <div className="text-lg font-bold">
            {!data ? "未登録" : data.sex === "male" ? "男性" : "女子"}
          </div>
          <div className="text-sm font-semibold text-gray-400">性別</div>
        </div>
        <div className="px-4 text-center">
          <div className="text-lg font-bold">{data.level ?? "未登録"}</div>
          <div className="text-sm font-semibold text-gray-400">レベル</div>
        </div>
      </div>
      <div className="space-y-5 p-5">
        <div>
          <div className="mb-2 text-lg font-bold">使用しているシューズ</div>
          <div className="flex w-full items-center justify-between gap-2 overflow-x-auto">
            {userUseShoes &&
              userUseShoes.map((shoe) => {
                return (
                  <div
                    key={shoe.id}
                    className="h-40 w-60 flex-none items-center rounded-md border px-4 text-gray-300"
                  >
                    {shoe.name}
                  </div>
                );
              })}
            <div className="flex h-40 w-60 flex-none items-center justify-center rounded-md border border-blue-300 p-10">
              <Link
                href={`/user/${user.uid}/shoes/selectBrand`}
                className="rounded-md p-2 text-blue-300"
              >
                ＋登録する
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-2 text-lg font-bold">自己紹介</div>

          {data.pr ? (
            <div className="rounded-md border p-2 text-gray-700">{data.pr}</div>
          ) : (
            <div className="rounded-md border p-2 text-gray-300">
              まだ自己紹介文が作成されていません。
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
