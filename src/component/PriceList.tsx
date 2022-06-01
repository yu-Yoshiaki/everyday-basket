import {
  Box,
  HStack,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import type { ReactNode } from "react";
import { FaCheckCircle } from "react-icons/fa";

type PriceContent = {
  name: string;
  price: number;
  content: string[];
};

const prices: PriceContent[] = [
  {
    name: "ランディングページ",
    price: 80000,
    content: ["レスポンシブデザイン", "標準SEO対"],
  },
  {
    name: "テンプレートデザイン",
    price: 150000,
    content: [
      "6ページ",
      "ブログ・お知らせ機能",
      "レスポンシブデザイン",
      "標準SEO対",
      "デザインカスタム",
    ],
  },
  {
    name: "カスタムデザイン",
    price: 200000,
    content: ["テンプレートデザインの内容"],
  },
];

const Recommend = (props: { children: ReactNode }) => {
  return (
    <Box position="relative">
      <Box
        position="absolute"
        top="-16px"
        left="50%"
        style={{ transform: "translate(-50%)" }}
      >
        <Text
          textTransform="uppercase"
          bg={useColorModeValue("red.300", "red.700")}
          px={3}
          py={1}
          color={useColorModeValue("gray.900", "gray.300")}
          fontSize="sm"
          fontWeight="600"
          rounded="xl"
        >
          おすすめ
        </Text>
      </Box>
      {props.children}
    </Box>
  );
};

const PriceContent = (props: { price: PriceContent }) => {
  return (
    <div>
      <Box py={4} px={12}>
        <Text fontWeight="600" fontSize="2xl">
          {props.price.name}
        </Text>
        <HStack justifyContent="center">
          <Text fontSize="3xl" fontWeight="600">
            ¥
          </Text>
          <Text fontSize="5xl" fontWeight="900">
            {props.price.price}
          </Text>
        </HStack>
      </Box>
      <VStack
        bg={useColorModeValue("gray.50", "gray.700")}
        py={4}
        borderBottomRadius={"xl"}
      >
        <List spacing={3} textAlign="start" px={12}>
          {props.price.content.map((data) => {
            return (
              <ListItem key={data}>
                <ListIcon as={FaCheckCircle} color="green.500" />
                {data}
              </ListItem>
            );
          })}
        </List>
      </VStack>
    </div>
  );
};

export const PriceList = () => {
  const gray = useColorModeValue("gray.200", "gray.500");
  return (
    <Box py={12}>
      <Text fontSize="lg" color={"gray.500"} textAlign="center">
        Start with 14-day free trial. No credit card needed. Cancel at anytime.
      </Text>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        {prices.map((price, index) => {
          return (
            <Box
              key={price.name}
              mb={4}
              shadow="base"
              borderWidth="1px"
              alignSelf={{ base: "center", lg: "flex-start" }}
              borderColor={gray}
              borderRadius={"xl"}
            >
              {index === 1 ? (
                <Recommend>
                  <PriceContent price={price} />
                </Recommend>
              ) : (
                <PriceContent price={price} />
              )}
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};
