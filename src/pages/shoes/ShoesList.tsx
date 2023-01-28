import Image from "next/image";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { getShoesSelect } from "src/libs/shoes";
import useSWR from "swr";

const brand = [
  {
    id: "asics",
    text: "asics",
  },
  {
    id: "NIKE",
    text: "NIKE",
  },
  {
    id: "underArmour",
    text: "Under Armour",
  },
  {
    id: "adidas",
    text: "adidas",
  },
];

export const ShoesList = () => {
  const [selectMaker, setSelectMaker] = useState<string>("all");
  const { data: shoes } = useSWR(["/shoes", selectMaker], ([_, key]) => {
    return getShoesSelect(key);
  });

  const handleSetMaker = (e: any) => {
    setSelectMaker(e.target.value);
  };

  return (
    <div className="space-y-3 p-4">
      <h2 className="text-2xl font-bold">バッシュ一覧</h2>
      <button className="rounded-md bg-green-500 p-3 py-2 font-semibold text-white">
        バッシュ新規登録
      </button>
      <div className="flex items-center rounded-full bg-gray-100 px-4">
        <FaSearch className="text-gray-600" />
        <input
          type="text"
          className="block w-full border-none bg-gray-100 focus:border-none focus:ring-0"
          placeholder="バッシュ名で検索"
        />
      </div>

      <div className="space-y-1">
        <span className="font-semibold ">メーカーで絞る</span>
        <ul className="flex items-center gap-2">
          {brand.map(({ id, text }) => {
            return (
              <li
                key={id}
                className="rounded-full border border-green-500 p-1 px-3"
              >
                <button onClick={handleSetMaker} value={id}>
                  {text}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <ul className="grid grid-cols-2 gap-2">
          {shoes?.map((shoe) => {
            return (
              <li
                key={shoe.id}
                className="space-y-1 rounded-md border p-2 pb-6 shadow-md"
              >
                <Image
                  src={"/basket_shoes.jpg"}
                  alt=""
                  width={400}
                  height={400}
                />
                <div className="flex gap-2">
                  <div>{shoe.maker}</div>
                  <div>{shoe.model}</div>
                </div>
                <div className="text-xl font-bold">{shoe.name}</div>
                {shoe.color}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
