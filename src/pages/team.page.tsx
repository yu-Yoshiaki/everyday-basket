import { HStack, Text, VStack } from "@chakra-ui/react";
import type { CustomNextPage } from "next";
import { Meta } from "src/component";
import { Top } from "src/component/Top";
import { BlogLayout } from "src/layout";

const teamData = [
  {
    label: "事業所",
    value: "A-Release企画",
  },
  {
    label: "所在地",
    value: "東京都",
  },
  {
    label: "事業内容",
    value: "WEBサイト制作＆WEBアプリケーション開発",
  },
  {
    label: "メンバー",
    value: "湯本 好明",
  },
];

const Team: CustomNextPage = () => {
  return (
    <div>
      <Meta title={`TEAM｜A-Release企画`} />
      <Top title={"TEAM"} />
      <VStack
        w={{ base: "90%", md: "700px" }}
        lineHeight={10}
        mx="auto"
        bg={"white"}
        color={"#2b2c30"}
        letterSpacing={3}
        fontFamily="body"
        fontSize={{ base: "lg", md: "2xl" }}
        fontWeight="semibold"
      >
        {teamData.map((data) => {
          return (
            <HStack
              w="full"
              textAlign="left"
              h={{ md: "70px" }}
              key={data.label}
            >
              <Text w={{ base: "100px", md: "200px" }}>{data.label}</Text>
              <Text w={{ base: "250px", md: "full" }}>{data.value}</Text>
            </HStack>
          );
        })}
      </VStack>
    </div>
  );
};

Team.getLayout = BlogLayout;

export default Team;
