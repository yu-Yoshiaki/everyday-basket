import dayjs from "dayjs";
import Image from "next/image";
import type { BlogContent } from "src/types/microcms";

export const Card = (props: BlogContent) => {
  const publishedAt = dayjs(props.publishedAt).format("YYYY/MM/DD");
  return (
    <div className="p-4 shadow-xl">
      <div className="relative h-[180px] ">
        {!props.eyecatch ? (
          <Image
            src={"/arelease.png"}
            alt=""
            style={{ objectFit: "contain" }}
            fill
            className="rounded-lg bg-white"
          />
        ) : (
          <Image
            src={props.eyecatch.url}
            alt=""
            style={{ objectFit: "contain" }}
            fill
            className="rounded-lg bg-white"
          />
        )}
      </div>

      <h3 className="overflow-hidden text-xl font-bold">{props.title}</h3>
      <p>{publishedAt}</p>
      <p className="font-bold tracking-wide text-blue-500">
        #<span>{props.category}</span>
      </p>
    </div>
  );
};
