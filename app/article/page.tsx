import { Card } from "app/article/Card";
import { Container } from "app/Container";
import { microcms } from "app/libs/microcms";
import type { BlogField, Microcms } from "app/types/microcms";
import Link from "next/link";

const getBlogs = async () => {
  const datas = await microcms.get<Microcms<BlogField>>({ endpoint: "blogs" });
  return datas;
};

const ArticlePage = async () => {
  const datas = await getBlogs();

  return (
    <Container title={"BLOG"}>
      <div className="grid gap-5 md:grid-cols-3">
        {datas.contents.map((item) => {
          return (
            <Link href={`/article/${item.id}`} key={item.id}>
              <Card
                title={item.title}
                eyecatch={item.eyecatch}
                category={item.category.name}
                publishedAt={item.createdAt}
              />
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

export default ArticlePage;
