import { Box, Flex, Text } from "@chakra-ui/react";
import type { CustomNextPage, GetStaticPaths, GetStaticProps } from "next";
import { Top } from "src/component/Top";
import { BlogLayout } from "src/layout";
import { domToHtml } from "src/lib/domToHtml";
import { microcms } from "src/lib/microcms";

import type { MicroCMS } from "./index.page";

type Content = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  category: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    name: string;
  };
};

const Index: CustomNextPage<{ datas: Content }> = (props) => {
  return (
    <Box textAlign="center" bg={"whtie"} pb={"64px"}>
      <Top title={props.datas.title} />
      <Flex
        flexDirection={"column"}
        maxW={"740px"}
        mx={"auto"}
        gap={8}
        py={"60px"}
        px={"40px"}
        rounded={"xl"}
        boxShadow={"base"}
        textAlign={"left"}
        bg={"white"}
        mt={16}
      >
        <Text textAlign="right">{props.datas.publishedAt.toString()}</Text>
        <Box>{domToHtml(props.datas.content)}</Box>
      </Flex>
    </Box>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const datas = await microcms.get<MicroCMS>({ endpoint: "blogs" });
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
  const datas = await microcms.get<MicroCMS>({
    endpoint: "blogs",
    contentId: id,
  });

  return {
    props: {
      datas,
    },
    revalidate: 5,
  };
};

Index.getLayout = BlogLayout;

export default Index;
