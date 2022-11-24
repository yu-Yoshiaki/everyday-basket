import { microcms } from "app/libs/microcms";
import { Meta } from "app/Meta";
import type { BlogField } from "app/types/microcms";

const getBlogs = async (id: string) => {
  const datas = await microcms.get<BlogField>({
    endpoint: "blogs",
    contentId: id,
  });
  return datas;
};

const Head = async (props: { params: { id: string } }) => {
  const detail: BlogField = await getBlogs(props.params.id);

  return (
    <Meta
      title={`${detail.title}｜A-Release企画`}
      description={detail.content}
      ogImage={detail.eyecatch?.url}
    />
  );
};

export default Head;
