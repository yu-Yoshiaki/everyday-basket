import Link from "next/link";
import { Container } from "src/components/Container";
import { Meta } from "src/components/Meta";
import { Card } from "src/pages/article/Card";
import type { BlogField, Microcms } from "src/types/microcms";

export const Article = ({ datas }: { datas: Microcms<BlogField> }) => {
  return (
    <>
      <Meta title={"BLOG"} />
      <Container title={{ en: "BLOG", ja: "ブログ" }}>
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
    </>
  );
};
