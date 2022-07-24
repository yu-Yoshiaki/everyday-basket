import Image from "next/image";
import type { ServiceField } from "src/type/microcms";

import { Content } from "./Content";

export const Card = (props: ServiceField) => {
  return (
    <div className="flex overflow-hidden rounded-xl bg-white pt-4 pb-10 text-center shadow-md">
      <div className="relative h-[140px] w-[80%]">
        {props.imageUrl ? (
          <Image
            src={props.imageUrl}
            alt={props.title}
            layout="fill"
            objectFit="contain"
          />
        ) : (
          <div className="flex h-full items-center justify-center ">
            <h3 className="text-center text-4xl text-gray-700">
              {props.title}
            </h3>
          </div>
        )}
      </div>

      <p className="px-5 text-left text-gray-600">{props.description}</p>
      <Content contents={props.points} />
    </div>
  );
};
