import { Box, Flex, Text } from "@chakra-ui/react";
import type { CustomNextPage, GetStaticPaths, GetStaticProps } from "next";
import { BlogLayout } from "src/layout";
import { microcms } from "src/lib/microcms";
import type { MicroCMS, MicrocmsField } from "src/type/microcms";

import { DomToHtml, SocialShare, Top } from "./component";

const Index: CustomNextPage<{ datas: MicrocmsField }> = (props) => {
  return (
    <Box
      textAlign="center"
      bg={"gray.100"}
      pb={"64px"}
      px={{ base: "10px", md: "0px" }}
    >
      <Top title={props.datas.title} eyecatch={props.datas.eyecatch} />
      <Flex
        flexDirection={"column"}
        maxW={"740px"}
        mx={"auto"}
        gap={8}
        py={"60px"}
        px={"20px"}
        rounded={"xl"}
        boxShadow={"base"}
        textAlign={"left"}
        bg={"white"}
      >
        <Text textAlign="right">{props.datas.publishedAt.toString()}</Text>
        <Box>{DomToHtml(props.datas.content)}</Box>
      </Flex>
      <SocialShare title={props.datas.title} id={props.datas.id} />
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
