import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

import { Content } from "./Content";

type Props = {
  tag: string[];
  title: string;
  description: string;
  imageSrc: string | null;
  contents: string[];
};

export const Card = (props: Props) => {
  return (
    <Flex
      w="340px"
      rounded="xl"
      pt={4}
      pb={10}
      overflow="hidden"
      textAlign="center"
      boxShadow={"md"}
      bg={"white"}
    >
      <VStack spacing={8}>
        <Box w={"80%"} h={"140px"} position="relative">
          {props.imageSrc ? (
            <Image
              src={props.imageSrc}
              alt={props.title}
              layout="fill"
              objectFit="contain"
            />
          ) : (
            <Flex h="full" alignItems="center" justifyContent={"center"}>
              <Heading
                color="gray.700"
                fontSize="4xl"
                fontFamily="body"
                textAlign={"center"}
              >
                {props.title}
              </Heading>
            </Flex>
          )}
        </Box>

        <Text color="gray.600" fontSize="md" textAlign={"left"} px={5}>
          {props.description}
        </Text>
        <Content contents={props.contents} />
      </VStack>
    </Flex>
  );
};
