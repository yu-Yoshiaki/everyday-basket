import { Box, Center, HStack, VStack } from "@chakra-ui/react";
import type { CustomNextPage } from "next";
import { BlogCard } from "src/component/BlogCard";
import { Top } from "src/component/Top";
import { useGetWindowSize } from "src/hook/useGetWindowSize";
import { BlogLayout } from "src/layout";

import { Price } from "./card/Price";

const serviceList = [
  {
    tag: "STUDIO",
    title: "STUDIO",
    description: "STUDIOを用いたWEB制作サービス（ランディングページ、ブログ）",
    imageSrc: null,
    price: 100000,
  },
  {
    tag: "WordPress",
    title: "WordPress",
    description: "WordPressを用いたWEB制作サービス(ブログ、コーポレート等)",
    imageSrc: null,
    price: 150000,
  },
  {
    tag: "Next.js + microCMS",
    title: "Next.js + microCMS",
    description:
      "Next.js + microCMSを用いたWEB制作サービス(ブログ、ニュース、コーポレート等)",
    imageSrc: null,
    price: 400000,
  },
];

const Service: CustomNextPage = () => {
  const { windowSize } = useGetWindowSize();
  return (
    <VStack>
      <Top title={"サービス"} />
      <Center>
        <Box>
          {windowSize.width > 480 ? (
            <HStack display={{ base: "none" }}>
              {serviceList.map((data) => {
                return (
                  <div key={data.title}>
                    <BlogCard {...data} />
                    <Price price={data.price} />
                  </div>
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
