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
    tag: "STUDIO",
    title: "STUDIO",
    description: "STUDIOを用いたWEB制作サービス（ランディングページ、ブログ）",
    imageSrc: null,
    price: 100000,
    contents: ["管理がしやすい", "ブログ機能", "費用が安い"],
  },
  {
    tag: "WordPress",
    title: "WordPress",
    description: "WordPressを用いたWEB制作サービス(ブログ、コーポレート等)",
    imageSrc: null,
    price: 150000,
    contents: ["管理がしやすい", "ブログ機能", "費用が安い"],
  },
  {
    tag: "Next.js + microCMS",
    title: "Next.js + microCMS",
    description:
      "Next.js + microCMSを用いたWEB制作サービス(ブログ、ニュース、コーポレート等)",
    imageSrc: null,
    price: 400000,
    contents: ["管理がしやすい", "ブログ機能", "費用が安い"],
  },
];

const Service: CustomNextPage = () => {
  const { windowSize } = useGetWindowSize();
  return (
    <VStack bg={"gray.100"}>
      <Top title={"サービス"} />
      <Center>
        <Box>
          {windowSize.width > 480 ? (
            <HStack>
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
