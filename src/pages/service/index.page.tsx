import { Box, Center, HStack, VStack } from "@chakra-ui/react";
import type { CustomNextPage } from "next";
import { BlogCard } from "src/component/BlogCard";
import { Top } from "src/component/Top";
import { useGetWindowSize } from "src/hook/useGetWindowSize";
import { BlogLayout } from "src/layout";

import { Content } from "./component/Content";
import { Price } from "./component/Price";

const serviceList = [
  {
    tag: ["STUDIO"],
    title: "STUDIO",
    description: "STUDIOを用いたWEB制作サービス（ランディングページ、ブログ）",
    imageSrc: null,
    price: 100000,
    contents: [
      "管理がしやすい",
      "ブログ機能",
      "費用が安い",
      "デザイン変更が簡単",
    ],
  },
  {
    tag: ["WordPress"],
    title: "WordPress",
    description: "WordPressを用いたWEB制作サービス(ブログ、コーポレート等)",
    imageSrc: null,
    price: 150000,
    contents: [
      "管理が少し大変（慣れが必要）",
      "ブログ機能",
      "費用が安い",
      "ブログ更新が簡単",
      "機能追加が可能（WordPressプラグイン限定）",
    ],
  },
  {
    tag: ["Next.js", "microCMS"],
    title: "Next.js + microCMS",
    description:
      "Next.js + microCMSを用いたWEB制作サービス(ブログ、ニュース、コーポレート等)",
    imageSrc: null,
    price: 400000,
    contents: [
      "管理が難しい（専門が必要）",
      "ブログ機能",
      "費用が安い",
      "高パフォーマンス",
      "機能追加が可能（API等。様々な外部サービス）",
    ],
  },
];

const Service: CustomNextPage = () => {
  const { windowSize } = useGetWindowSize();
  return (
    <VStack bg={"gray.100"} color={"#2b2c30"}>
      <Top title={"サービス"} />
      <Center>
        <Box>
          {windowSize.width > 480 ? (
            <HStack alignItems="start">
              {serviceList.map((data) => {
                return (
                  <VStack key={data.title}>
                    <BlogCard {...data} />
                    <Price price={data.price} />
                    <Content contents={data.contents} />
                  </VStack>
                );
              })}
            </HStack>
          ) : (
            <div>
              {serviceList.map((data) => {
                return (
                  <div key={data.title}>
                    <BlogCard {...data} />
                    <Price price={data.price} />
                    <Content contents={data.contents} />
                  </div>
                );
              })}
            </div>
          )}
        </Box>
      </Center>
    </VStack>
  );
};

Service.getLayout = BlogLayout;

export default Service;
