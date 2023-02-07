import Link from "next/link";
import type { FC } from "react";
import { SelectShoesLayout } from "src/pages/shoes/SelectShoesLayout";

export const Shoes: FC = () => {
  return (
    <div className="flex flex-col gap-5 p-4">
      <h2 className="text-2xl font-bold">バッシュ一覧</h2>
      <div>
        <Link
          href={"/shoes/createShoes"}
          className="rounded-md bg-green-500 p-3 py-2 font-semibold text-white"
        >
          バッシュ新規登録
        </Link>
      </div>
      {/* <div className="flex items-center rounded-full bg-gray-100 px-4">
        <FaSearch className="text-gray-600" />
        <input
          type="text"
          className="block w-full border-none bg-gray-100 focus:border-none focus:ring-0"
          placeholder="バッシュ名で検索"
        />
      </div> */}
      <SelectShoesLayout />
    </div>
  );
};
