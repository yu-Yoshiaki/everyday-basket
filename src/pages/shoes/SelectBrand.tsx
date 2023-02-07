import { useRouter } from "next/router";
import { useState } from "react";
import { BackArrow } from "src/components/buttons/BackArrow";
import { NextArrow } from "src/components/buttons/NextArrow";
import { SubmitButton } from "src/components/buttons/SubmitButton";
import type { Shoes } from "src/libs/shoes";
import { ShoesCardlayout } from "src/pages/shoes/ShoesCardlayout";

const makers = ["NIKE", "asics", "UNDER ARMOUR", "adidas"];

const shoesDev: Shoes[] = [
  {
    id: "33MD2ZZr8ih2Xdfq58PY",
    name: "エア ジョーダン 37 PF",
    maker: "NIKE",
    model: "2023",
    image: "",
    url: "",
    color: "black",
  },
  {
    id: "GficLO7bE1Pa4BaE1Xa4",
    name: "エア ズーム G.T. カット 2",
    maker: "NIKE",
    model: "2023",
    image: "",
    url: "",
    color: "red",
  },
];

const RegisterCard = (props: { shoe?: Shoes }) => {
  // const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const { shoe } = props;

  if (!shoe) return <div></div>;

  // const handleSubmit = async () => {
  //   if (!user) return;
  //   await updateUserInfo(user?.uid, { shoes: ["33MD2ZZr8ih2Xdfq58PY"] });
  // };

  const handleOpen = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={handleOpen}>
        <ShoesCardlayout shoe={shoe} />
      </div>

      {isOpen && (
        <div className="fixed inset-8 bottom-20 z-20 flex flex-col justify-between border bg-white py-8 px-4 shadow-md">
          <span className="text-center font-semibold">
            使用シューズに登録しますか？
          </span>

          <div>
            {shoe.image ? (
              <div></div>
            ) : (
              <div className="h-[250px] bg-gray-300">No Image</div>
            )}

            <div className="mx-auto flex flex-col items-center justify-center gap-2 text-xs">
              <span className="rounded-full bg-black p-1 text-white">
                {shoe.maker}
              </span>
              <span>{shoe.model}年</span>
              <span className="text-sm font-bold">{shoe.name}</span>
              <span className="block text-xs">{shoe.color}</span>
            </div>
          </div>

          <SubmitButton label="登録する" />
        </div>
      )}
    </div>
  );
};

export const SelectBrand = () => {
  const { push } = useRouter();
  const [maker, setMaker] = useState<string | undefined>("NIKE");

  const handleBack = () => {
    if (maker) {
      setMaker(undefined);
    } else {
      push(`/user/id/info`);
    }
  };

  const handleSetBrand = (e: any) => {
    setMaker(e.target.value);
  };

  return (
    <div>
      <div className="grid grid-cols-3 bg-blue-900 p-4 text-white">
        <BackArrow onBack={handleBack} />
        <h2 className="text-lg font-bold">バッシュ作成</h2>
      </div>
      {maker ? (
        <div>
          <ul className="grid grid-cols-2 gap-5 p-4">
            {shoesDev?.map((shoe) => {
              return (
                <li key={shoe.id}>
                  <RegisterCard shoe={shoe} />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>
          <h3 className="border-b py-4 px-5 text-xs font-semibold">
            メーカーから探す
          </h3>
          <ul>
            {makers.map((name) => {
              return (
                <li
                  key={name}
                  onClick={handleSetBrand}
                  value={name}
                  className="flex items-center justify-between border-b py-4 px-5 text-sm font-bold"
                >
                  <span>{name}</span>
                  <NextArrow />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
