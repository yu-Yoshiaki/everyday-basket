import Image from "next/image";

type BlogContent = {
  tag: string[];
  title: string;
  description: string;
  imageSrc: string | null;
};

export const BlogCard = (props: BlogContent) => {
  return (
    <div className="flex w-full max-w-[400px] p-4">
      <div className="overflow-hidden rounded-xl bg-white p-6 shadow-md">
        <div className="relative -mx-6 -mt-6 h-[200px]">
          <Image
            src={props.imageSrc ?? "/noimage.jpg"}
            layout="fill"
            width="4240"
            height="2832"
            alt="アイキャッチ"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            {props.tag.map((tag, index) => {
              return (
                <p
                  className="mr-1 text-xs font-[800px] tracking-wide text-blue-500"
                  key={index}
                >
                  #{tag}
                </p>
              );
            })}
          </div>
          <h1 className="text-lg text-gray-700">{props.title}</h1>
          <p className="text-sm text-gray-500">{props.description}</p>
        </div>
      </div>
    </div>
  );
};
