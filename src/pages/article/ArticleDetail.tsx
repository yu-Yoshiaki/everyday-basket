import dayjs from "dayjs";
import { Meta } from "src/components/Meta";
import { DomToHtml } from "src/pages/article/DomToHtml";
import { Title } from "src/pages/article/Title";
import type { BlogField } from "src/types/microcms";

export const ArticleDetail = ({ data }: { data: BlogField }) => {
  return (
    <>
      <Meta
        title={`${data.title}｜A-Release企画`}
        description={data.content}
        ogImage={data.eyecatch?.url}
      />
      <div className="space-y-10 bg-gray-100 px-[10px] pb-[64px] text-center md:px-0">
        <Title title={data.title} />
        <div className="mx-auto flex max-w-[740px] flex-col gap-8 rounded-xl bg-white py-[60px] px-[20px] text-left shadow-md">
          <p className="text-right">
            {dayjs(data.publishedAt).format("YYYY/MM/DD")}
          </p>
          <div>{DomToHtml(data.content)}</div>
        </div>
        {/* <SocialShare
        title={data.title}
        id={data.id}
        hashtag={["αRelease企画", data.category.name]}
      /> */}
      </div>
    </>
  );
};
