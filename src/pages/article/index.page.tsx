import type { CustomNextPage, GetStaticProps } from "next";
import Link from "next/link";
import { Meta, Top } from "src/component";
import { BlogLayout } from "src/layout";
import { microcms } from "src/lib/microcms";
import type { BlogField, Microcms } from "src/type/microcms";

import { Card } from "./component";

const Blog: CustomNextPage<{ datas: Microcms<BlogField> }> = (props) => {
  return (
    <div>
      <Meta title={"BLOG｜A-Release企画"} />
      <Top title={"BLOG"} />
      <div className="flex items-center justify-center">
        <div className="grid gap-8 py-8 md:grid-cols-3">
          {props.datas.contents.map((item) => {
            return (
              <Link href={`/article/${item.id}`} key={item.id} passHref>
                <a>
                  <Card
                    title={item.title}
                    eyecatch={item.eyecatch}
                    category={item.category.name}
                  />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const datas = await microcms.get<Microcms<BlogField>>({ endpoint: "blogs" });
  return {
    props: {
      datas,
    },
  };
};

Blog.getLayout = BlogLayout;

export default Blog;
