import type { CustomNextPage, GetStaticPaths, GetStaticProps } from "next";
import { Meta } from "src/component";
import { BlogLayout } from "src/layout";
import { microcms } from "src/lib/microcms";
import type { BlogField, Microcms } from "src/type/microcms";

import { DomToHtml, SocialShare, Title } from "./component";

const Index: CustomNextPage<{ datas: BlogField }> = (props) => {
  const content = props.datas.content.replace(/\n/g, "<br />");
  return (
    <div className="space-y-10 bg-gray-100 px-[10px] pb-[64px] text-center md:px-0">
      <Meta title={`${props.datas.title}｜A-Release企画`} />
      <Title title={props.datas.title} />
      <div className="mx-auto flex max-w-[740px] flex-col gap-8 rounded-xl bg-white py-[60px] px-[20px] text-left shadow-md">
        <p className="text-right">{props.datas.publishedAt.toString()}</p>
        <div>{DomToHtml(content)}</div>
      </div>
      <SocialShare
        title={props.datas.title}
        id={props.datas.id}
        hashtag={["αRelease企画", props.datas.category.name]}
      />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const datas = await microcms.get<Microcms<BlogField>>({ endpoint: "blogs" });
  const paths = datas.contents.map((content) => {
    return { params: { id: content.id } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};
export const getStaticProps: GetStaticProps = async (paths) => {
  const { id } = paths.params as { id: string };
  const datas = await microcms.get<BlogField>({
    endpoint: "blogs",
    contentId: id,
  });

  return {
    props: {
      datas,
    },
  };
};

Index.getLayout = BlogLayout;

export default Index;
