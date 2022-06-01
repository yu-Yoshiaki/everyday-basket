import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

type BlogContent = {
  title: string;
  eyecatch: {
    url: string;
    width: number;
    height: number;
  };
  category: {
    name: string;
  };
};

export const Card = (props: BlogContent) => {
  return (
    <Flex w="300px">
      <Box bg="white" boxShadow="base" rounded="xl" p="6" overflow="hidden">
        <Stack>
          <Box h="200px" mt="-6" mx="-6" pos="relative">
            <Image
              src={props.eyecatch.url ?? "/noimage.jpg"}
              layout="fill"
              width="4240"
              height="2832"
              alt={"アイキャッチ"}
            />
          </Box>
          <Stack>
            <Text
              color="blue.500"
              fontWeight="800"
              fontSize="xs"
              letterSpacing="wide"
            >
              {props.category.name}
            </Text>
            <Heading color="gray.700" fontSize="lg" fontFamily="body">
              {props.title}
            </Heading>
            {/* <Text color="gray.500" fontSize="sm" h={"80px"} overflow={"hidden"}>
              {props.description}
            </Text> */}
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
};
