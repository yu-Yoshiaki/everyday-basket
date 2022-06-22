import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import type { BlogContent } from "src/type/microcms";

export const Card = (props: BlogContent) => {
  return (
    <Flex w="300px">
      <Box
        bg="white"
        border={"1px"}
        borderColor={"gray.200"}
        rounded="xl"
        p="6"
        overflow="hidden"
        _hover={{
          transform: "translateY(5px)",
        }}
      >
        <Stack>
          <Box
            h="200px"
            mt="-6"
            mx="-6"
            px={"0.5"}
            pos="relative"
            bg={props.eyecatch ? "white" : "blue.400"}
            borderBottom={"1px"}
            borderColor={"gray.200"}
          >
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
