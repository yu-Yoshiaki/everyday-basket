import Image from "next/image";
import type { FC } from "react";
import type { Shoes } from "src/libs/shoes";

export const ShoesCardlayout: FC<{ shoe: Shoes }> = (props) => {
  return (
    <div className="h-60 space-y-1 overflow-hidden rounded-md border bg-white py-3 shadow-md">
      <div className="relative h-28 w-full ">
        {props.shoe.image ? (
          <Image src={props.shoe.image} alt="" fill objectFit="contain" />
        ) : (
          <div className="h-full w-full animate-pulse bg-gray-300"></div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between px-2 text-xs">
        <span className="block whitespace-nowrap rounded-full bg-black px-2 text-white">
          {props.shoe.maker}
        </span>
        <span className="whitespace-nowrap">{props.shoe.model}年</span>
      </div>

      <div className="h-12 overflow-hidden px-2 font-bold ">
        {props.shoe.name}
      </div>
      <span className="px-2 text-xs">{props.shoe.color}</span>
    </div>
  );
};
