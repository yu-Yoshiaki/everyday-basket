import Image from "next/image";
import type { ServiceField } from "src/type/microcms";

import { Content } from "./Content";

export const Card = (props: ServiceField) => {
  return (
    <div className="mx-auto flex w-[90%] flex-col divide-y overflow-hidden rounded-xl bg-white p-4 pb-10 text-center shadow-md">
      <div className="relative h-[140px]">
        {props.imageUrl ? (
          <Image
            src={props.imageUrl}
            alt={props.title}
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center ">
            <h3 className="text-center text-4xl font-bold text-gray-700">
              {props.title}
            </h3>
          </div>
        )}
      </div>

      <div className="space-y-2 p-5 text-left">
        <p className="font-semibold text-blue-400">特徴</p>
        <p className="text-gray-600">{props.description}</p>
      </div>

      <Content contents={props.points} />
    </div>
  );
};
