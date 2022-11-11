import dayjs from "dayjs";
import Image from "next/image";
import type { BlogContent } from "src/type/microcms";

export const Card = (props: BlogContent) => {
  const publishedAt = dayjs(props.publishedAt).format("YYYY/MM/DD");
  return (
    <div>
      <div>
        {!props.eyecatch ? (
          <Image
            src={"/arelease.png"}
            alt=""
            layout="responsive"
            objectFit="contain"
            width={213}
            height={116}
            className="rounded-lg bg-white"
          />
        ) : (
          <Image
            src={props.eyecatch.url}
            alt=""
            layout="responsive"
            objectFit="contain"
            width={213}
            height={116}
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
