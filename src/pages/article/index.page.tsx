import { Center, GridItem, SimpleGrid } from "@chakra-ui/react";
import type { CustomNextPage, GetStaticProps } from "next";
import Link from "next/link";
import { Top } from "src/component/Top";
import { BlogLayout } from "src/layout";
import { microcms } from "src/lib/microcms";

import { Card } from "./component/Card";

// const blogContent = [
//   {
//     id: "A0001",
//     tag: "BLOG",
//     title: "Next.js + ChakraUI Dashboard",
//     description:
//       "Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.",
//     imageSrc: null,
//   },
//   {
//     id: "A0002",
//     tag: "BLOG",
//     title: "Next.js + ChakraUI Dashboard",
//     description:
//       "Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.brary that gives you the building blocks you need to build your React applications.",
//     imageSrc: null,
//   },
//   {
//     id: "A0003",
//     tag: "BLOG",
//     title: "Next.js + ChakraUI Dashboard",
//     description: "Chakra UI is a simple, modular and accessible ",
//     imageSrc: null,
//   },
// ];

export type MicroCMS = {
  contents: any[];
  totalCount: number;
  offset: number;
  limit: number;
};

const Blog: CustomNextPage<{ datas: MicroCMS }> = (props) => {
  return (
    <div>
      <Top title={"ブログ"} />
      <Center>
        <SimpleGrid columns={{ md: 3 }} gap={{ base: 8, md: 8 }} py={8}>
          {props.datas.contents.map((item) => {
            return (
              <Link href={`/article/${item.id}`} key={item.id} passHref>
                <GridItem as="a">
                  <Card {...item} />
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
  const datas = await microcms.get<MicroCMS>({ endpoint: "blogs" });
  return {
    props: {
      datas,
    },
    revalidate: 5,
  };
};

Blog.getLayout = BlogLayout;

export default Blog;
