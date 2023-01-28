// import Image from "next/image";

const user = {
  name: "好明",
  birth: 1992,
  sex: "男性",
  level: "初心者",
  shoesId: "a",
};

export const UserInfo = () => {
  const getAge = Math.floor((2023 - user.birth) / 10) * 10;
  return (
    <div>
      <div className="flex items-center justify-center pt-5 pb-2">
        <div className="h-40 w-40 rounded-full bg-gray-300 "></div>
      </div>
      <div className="mb-4 text-center text-xl font-bold">{user.name}</div>
      <div className="flex justify-center divide-x-2 px-5">
        <div className="px-4 text-center">
          <div className="text-lg font-bold">{getAge}代</div>
          <div className="text-sm font-semibold text-gray-400">年代</div>
        </div>
        <div className="px-4 text-center">
          <div className="text-lg font-bold">{user.sex}</div>
          <div className="text-sm font-semibold text-gray-400">性別</div>
        </div>
        <div className="px-4 text-center">
          <div className="text-lg font-bold">{user.level}</div>
          <div className="text-sm font-semibold text-gray-400">レベル</div>
        </div>
      </div>
      <div className="space-y-5 p-5">
        <div>
          <div className="mb-2 text-lg font-bold">使用バッシュ</div>
          <div className="flex items-center justify-between gap-2">
            {user.shoesId ? (
              <div className="flex h-40 flex-1 items-center rounded-md border px-4 text-gray-300"></div>
            ) : (
              <div className="flex h-40 flex-1 items-center rounded-md border px-4  text-gray-300">
                まだ登録されていません。
              </div>
            )}

            <button className="rounded-md border p-2 text-gray-300">
              ＋登録する
            </button>
          </div>
        </div>
        <div>
          <div className="mb-2 text-lg font-bold">自己紹介</div>
          <div className="rounded-md border p-2 text-gray-300">
            まだ自己紹介文が作成されていません。
          </div>
        </div>
      </div>
    </div>
  );
};
