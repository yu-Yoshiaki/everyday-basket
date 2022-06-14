import {
  Box,
  Center,
  Divider,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { CustomNextPage } from "next";
import Image from "next/image";
import { Contact, Top } from "src/component";
import { Meta } from "src/component";
import { BlogLayout } from "src/layout";
import { Card } from "src/pages/service/component";

const serviceList = [
  {
    tag: ["Stripe"],
    title: "Stripe",
    description: `世界中の企業で導入が進んでいる決済サービスになります。ECプラットフォームを使わずに、自社サイト等に決済機能を組み込むことができます。また、BASEやShopify、クラウドファンディングなどのプラットフォーム開発にもご利用できます。`,
    imageSrc: "/stripelogo.png",
    contents: ["決済機能", "サブスクリプション機能", "世界水準のセキュリティ"],
  },
  {
    tag: ["Firebase"],
    title: "Firebase",
    description:
      "Google社が運営するバックエンドサービスです。認証機能、データ管理、画像ファイル等の保存など、サーバーとしての機能を用意してくれています。開発者はフロントエンドの開発に集中できます。",
    imageSrc: "/firebaselogo.svg",
    contents: [
      "ユーザー認証",
      "データベース",
      "ストレージ",
      "サーバーレス機能",
    ],
  },
  {
    tag: ["microCMS"],
    title: "microCMS",
    description:
      "日本製のヘッドレスCMSになります。専用ダッシュボードはとても見やすく、コンテンツ管理が非常に楽になります。API経由で情報を取得できるので、フロントエンドが自由に開発できます。",
    imageSrc: null,
    contents: [
      "ブログ機能",
      "コンテンツ管理",
      "管理がしやすい",
      "日本製",
      "ドキュメントが見やすい",
    ],
  },
  {
    tag: ["Shopify"],
    title: "Shopify",
    description:
      "ECサイトの開発から運用まで可能なCMSになります。ヘッドレスコマースという開発手法で、EC機能をShopifyにお任せしたまま自由なフロントエンド開発が可能に。そして、フロント開発にNext.jsを採用することで、Shopifyだけでは実現が難しい高パフォーマンスECサイトを構築できます。",
    imageSrc: "/shopify.png",
    contents: ["ECサイト開発が簡単", "郵送サービスとの連携", "管理がしやすい"],
  },
];

const Feature = () => {
  const feature = [
    {
      text: "WEB開発のためのパッケージが豊富",
    },
    { text: "SSR＆SSGのハイブリッド" },
    { text: "画像ファイル最適化" },
  ];
  return (
    <>
      <Text
        position={"relative"}
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight={"bold"}
        color={"blue.100"}
        _before={{
          content: `"特徴"`,
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          color: "gray.600",
          fontSize: "xl",
          zIndex: 0,
        }}
        textAlign="center"
      >
        Feature
      </Text>

      <SimpleGrid
        gap="8"
        columns={{ md: 3 }}
        justifyContent={{ base: "center", md: "start" }}
      >
        {feature.map((data) => {
          return (
            <GridItem key={data.text}>
              <Flex
                w={{ base: "240px", md: "200px" }}
                h={{ base: "240px", md: "200px" }}
                rounded={"full"}
                bg="blue.400"
                justifyContent="center"
                alignItems="center"
              >
                <Text px={4} color="white">
                  {data.text}
                </Text>
              </Flex>
            </GridItem>
          );
        })}
      </SimpleGrid>
    </>
  );
};

const Service: CustomNextPage = () => {
  return (
    <Box bg={"blue.50"}>
      <Meta title={"SERVICE｜A-Release企画"} />
      <Top title={"SERVICE"} />
      <VStack spacing={{ base: "8", md: "14" }} pb={20}>
        <SimpleGrid
          w={{ md: "90%" }}
          minH={"70vh"}
          rounded={"lg"}
          p={{ base: 10, md: 20 }}
          bg={"white"}
          columns={{ md: 3 }}
          row={2}
          gap={8}
        >
          <GridItem colSpan={2} rowSpan={2}>
            <Flex
              gap={{ base: 14, md: 8 }}
              flexDirection={"column"}
              letterSpacing={2}
              fontFamily={"body"}
              color="gray.600"
            >
              <Heading as={"h3"} fontSize={{ base: "2xl", md: "3xl" }}>
                <Text
                  as={"span"}
                  fontSize={{ base: "3xl", md: "6xl" }}
                  color={"blue.500"}
                >
                  Next.js
                </Text>
                を使った
                <br /> WEBアプリケーション開発
              </Heading>
              <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight={"bold"}>
                Next.jsは、近年のWEB開発現場で採用が増えているWEB開発フレームワークです。
                <br />
              </Text>
              <Feature />
              <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight={"bold"}>
                このNext.jsと下記サービスを組み合わせることで、多様なアプリケーション開発を実現できます。
              </Text>
            </Flex>
          </GridItem>

          <GridItem
            position={"relative"}
            bg="black"
            w={{ md: "400px" }}
            display={{ base: "hidden", md: "static" }}
            h={{ base: 0, md: "200px" }}
          >
            <Box w={"80%"}>
              <Image
                src={"/nextjs.svg"}
                alt={""}
                layout={"fill"}
                objectFit={"contain"}
              />
            </Box>
          </GridItem>
        </SimpleGrid>
        <Center>
          <Text
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight="bold"
            color={"gray.600"}
          >
            ✖︎
          </Text>
        </Center>
        <SimpleGrid columns={{ md: 4 }} gap={{ base: 8, md: 8 }}>
          {serviceList.map((item) => {
            return (
              <GridItem key={item.title}>
                <Card {...item} />
              </GridItem>
            );
          })}
        </SimpleGrid>
        <Divider w={"90%"} />
        <Divider w={"90%"} />
        <Contact />
      </VStack>
    </Box>
  );
};

Service.getLayout = BlogLayout;

export default Service;
