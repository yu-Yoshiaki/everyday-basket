import type { GetStaticPaths, GetStaticProps } from "next";
import { microcms } from "src/libs/microcms";
import { ArticleDetail } from "src/pages/article/ArticleDetail";
import type { BlogField, Microcms } from "src/types/microcms";

export const getStaticPaths: GetStaticPaths = async () => {
  const datas = await microcms.get<Microcms<BlogField>>({ endpoint: "blogs" });
  const paths = datas.contents.map((data) => {
    return { params: { id: data.id } };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await microcms.get<Microcms<BlogField>>({
    endpoint: "blogs",
    contentId: params?.id as string,
  });
  return {
    props: { data },
  };
};

const BlogDetail = ({ data }: { data: BlogField }) => {
  return <ArticleDetail data={data} />;
};

export default BlogDetail;
