import type { GetStaticProps } from "next";
import { microcms } from "src/libs/microcms";
import { Article } from "src/pages/article";
import type { BlogField, Microcms } from "src/types/microcms";

const ArticlePage = ({ datas }: { datas: Microcms<BlogField> }) => {
  return <Article datas={datas} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const datas = await microcms.get<Microcms<BlogField>>({ endpoint: "blogs" });
  return {
    props: { datas },
  };
};
export default ArticlePage;
