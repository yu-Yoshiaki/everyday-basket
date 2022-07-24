import Image from "next/image";
import type { BlogContent } from "src/type/microcms";

export const Card = (props: BlogContent) => {
  return (
    <div className="w-[300px]">
      <div className="space-y-4 overflow-hidden rounded-xl border border-gray-200 bg-white pb-6 hover:translate-y-[5px]">
        <div className="relative h-52">
          {!props.eyecatch ? (
            <p className="text-4xl font-[800] tracking-wide text-white">
              {props.category}
            </p>
          ) : (
            <Image
              src={props.eyecatch.url}
              layout="fill"
              objectFit="contain"
              alt={"アイキャッチ"}
            />
          )}
        </div>

        <p className="px-6 text-xs font-[800] tracking-wide text-blue-500">
          {props.category}
        </p>
        <h3 className="h-[65px] overflow-hidden px-6 text-lg text-gray-700">
          {props.title}
        </h3>
        {/* <Text color="gray.500" fontSize="sm" h={"80px"} overflow={"hidden"}>
              {props.description}
            </Text> */}
      </div>
    </div>
  );
};
