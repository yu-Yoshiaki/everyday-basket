import { Center, GridItem, SimpleGrid } from "@chakra-ui/react";
import type { CustomNextPage, GetStaticProps } from "next";
import Link from "next/link";
import { Top } from "src/component/Top";
import { BlogLayout } from "src/layout";
import { microcms } from "src/lib/microcms";
import type { Microcms } from "src/type/microcms";

import { Card } from "./component";

const Blog: CustomNextPage<{ datas: Microcms }> = (props) => {
  return (
    <div>
      <Top title={"ブログ"} />
      <Center>
        <SimpleGrid columns={{ md: 3 }} gap={{ base: 8, md: 8 }} py={8}>
          {props.datas.contents.map((item) => {
            return (
              <Link href={`/article/${item.id}`} key={item.id} passHref>
                <GridItem as="a">
                  <Card
                    title={item.title}
                    eyecatch={item.eyecatch}
                    category={item.category.name}
                  />
                </GridItem>
              </Link>
            );
          })}
        </SimpleGrid>
      </Center>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const datas = await microcms.get<Microcms>({ endpoint: "blogs" });
  return {
    props: {
      datas,
    },
  };
};

Blog.getLayout = BlogLayout;

export default Blog;
