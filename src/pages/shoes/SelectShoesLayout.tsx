import type { Dispatch, FC, SetStateAction } from "react";
import { useState } from "react";
import { ShoesList } from "src/pages/shoes/ShoesList";

export type Maker = "all" | "NIKE" | "asics" | "adidas" | "UNDER ARMOUR";

const makers: Maker[] = ["asics", "NIKE", "adidas", "UNDER ARMOUR"];

const SelectButton: FC<{
  text: Maker;
  setSelectMaker: Dispatch<SetStateAction<Maker>>;
}> = (props) => {
  const [isSelect, setIsSelect] = useState(false);

  const handleIsSelect = () => {
    if (isSelect) {
      props.setSelectMaker("all");
      setIsSelect(false);
    } else {
      props.setSelectMaker(props.text);
      setIsSelect(true);
    }
  };

  return (
    <button
      onClick={handleIsSelect}
      className={`rounded-full border px-3 font-semibold ${
        isSelect
          ? "border-white bg-green-500 text-white"
          : "border-green-500 text-gray-600"
      }`}
    >
      {props.text}
    </button>
  );
};

const SelectMaker: FC<{
  selectMaker: Maker;
  setSelectMaker: Dispatch<SetStateAction<Maker>>;
}> = (props) => {
  return (
    <div className="space-y-2">
      <span className="text-sm font-semibold">メーカーで絞る</span>
      <ul className="flex flex-wrap items-center gap-1">
        {makers.map((text) => {
          if (props.selectMaker === "all" || text === props.selectMaker) {
            return (
              <li key={text}>
                <SelectButton
                  text={text}
                  setSelectMaker={props.setSelectMaker}
                />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export const SelectShoesLayout: FC = () => {
  const [selectMaker, setSelectMaker] = useState<Maker>("all");

  return (
    <div className="space-y-5">
      <SelectMaker selectMaker={selectMaker} setSelectMaker={setSelectMaker} />
      <ShoesList select={selectMaker} />
    </div>
  );
};
