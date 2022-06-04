import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import type { BlogContent } from "src/type/microcms";

export const Card = (props: BlogContent) => {
  return (
    <Flex w="300px">
      <Box bg="white" boxShadow="base" rounded="xl" p="6" overflow="hidden">
        <Stack>
          <Box h="200px" mt="-6" mx="-6" pos="relative" bg={"blue.300"}>
            {!props.eyecatch ? (
              <Text
                pos={"absolute"}
                fontWeight="800"
                fontSize="4xl"
                letterSpacing="wide"
                left={"50%"}
                top={"50%"}
                transform={"translateX(-50%) translateY(-50%)"}
                color={"white"}
              >
                {props.category}
              </Text>
            ) : (
              <Image
                src={props.eyecatch.url}
                layout="fill"
                width="4240"
                height="2832"
                alt={"アイキャッチ"}
              />
            )}
          </Box>
          <Stack>
            <Text
              color="blue.500"
              fontWeight="800"
              fontSize="xs"
              letterSpacing="wide"
            >
              {props.category}
            </Text>
            <Heading
              color="gray.700"
              fontSize="lg"
              fontFamily="body"
              h={"65px"}
              overflow={"hidden"}
            >
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
