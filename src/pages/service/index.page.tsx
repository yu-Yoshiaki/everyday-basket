import { GridItem, SimpleGrid, VStack } from "@chakra-ui/react";
import type { CustomNextPage } from "next";
import { Contact, Top } from "src/component";
import { BlogLayout } from "src/layout";

import { Card } from "./component/Card";
import { Reference } from "./component/Reference";

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
  return (
    <VStack spacing={"14"} pb={20}>
      <Top title={"SERVICE"} />
      <SimpleGrid columns={{ md: 3 }} gap={{ base: 8, md: 8 }} py={8}>
        {serviceList.map((item) => {
          return (
            <GridItem key={item.title}>
              <Card {...item} />
            </GridItem>
          );
        })}
      </SimpleGrid>
      <Reference />
      <Contact />
    </VStack>
  );
};

Service.getLayout = BlogLayout;

export default Service;
