import { Flex, Heading, Stack, Text } from "@chakra-ui/react";

import { Content } from "./Content";
import { Price } from "./Price";

type Props = {
  tag: string[];
  title: string;
  description: string;
  imageSrc: string | null;
  price: number;
  contents: string[];
};

export const Card = (props: Props) => {
  return (
    <Flex
      w="340px"
      bg="white"
      rounded="xl"
      px={5}
      py={10}
      overflow="hidden"
      textAlign="center"
      // border={"1px skyblue solid"}
      boxShadow={"0px 1px 2px 1px skyblue"}
    >
      <Stack>
        <Heading
          color="gray.700"
          fontSize="4xl"
          fontFamily="body"
          textShadow={"2px 1px skyblue"}
          pb={8}
        >
          {props.title}
        </Heading>
        <Text color="gray.600" fontSize="md" textAlign={"left"}>
          {props.description}
        </Text>
        <Price price={props.price} />
        <Content contents={props.contents} />
      </Stack>
    </Flex>
  );
};
