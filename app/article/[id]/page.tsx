import { DomToHtml } from "app/article/DomToHtml";
import { Title } from "app/article/Title";
import { microcms } from "app/libs/microcms";
import type { BlogField, Microcms } from "app/types/microcms";
import dayjs from "dayjs";
import { Suspense } from "react";

type Params = {
  id: string;
};

/* eslint-disable*/
export const dynamicParams = true;
/* eslint-disable*/

export const generateStaticParams = async () => {
  const datas = await microcms.get<Microcms<BlogField>>({ endpoint: "blogs" });
  return datas.contents.map((d) => {
    return { id: d.id };
  });
};

const getBlogDetail = async (params: Params) => {
  const datas = await microcms.get<BlogField>({
    endpoint: "blogs",
    contentId: params.id,
  });
  return datas;
};

const ArticleDetail = async (props: { params: Params }) => {
  const detail = await getBlogDetail(props.params);

  return (
    <div className="space-y-10 bg-gray-100 px-[10px] pb-[64px] text-center md:px-0">
      <Suspense fallback={<p className="mt-4">読み込み中...</p>}>
        <Title title={detail.title} />
        <div className="mx-auto flex max-w-[740px] flex-col gap-8 rounded-xl bg-white py-[60px] px-[20px] text-left shadow-md">
          <p className="text-right">
            {dayjs(detail.publishedAt).format("YYYY/MM/DD")}
          </p>
          <div>{DomToHtml(detail.content)}</div>
        </div>
        {/* <SocialShare
        title={detail.title}
        id={detail.id}
        hashtag={["αRelease企画", detail.category.name]}
      /> */}
      </Suspense>
    </div>
  );
};

export default ArticleDetail;
