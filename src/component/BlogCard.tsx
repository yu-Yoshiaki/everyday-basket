import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

type BlogContent = {
  tag: string;
  title: string;
  description: string;
  imageSrc: string | null;
};

export const BlogCard = (props: BlogContent) => {
  return (
    <Flex p="4" w="full" maxW="400px">
      <Box bg="white" boxShadow="base" rounded="xl" p="6" overflow="hidden">
        <Stack>
          <Box h="200px" mt="-6" mx="-6" pos="relative">
            <Image
              src={props.imageSrc ?? "/noimage.jpg"}
              layout="fill"
              width="4240"
              height="2832"
              alt="アイキャッチ"
            />
          </Box>
          <Stack>
            <Text
              color="blue.500"
              fontWeight="800"
              fontSize="xs"
              letterSpacing="wide"
            >
              {props.tag}
            </Text>
            <Heading color="gray.700" fontSize="lg" fontFamily="body">
              {props.title}
            </Heading>
            <Text color="gray.500" fontSize="sm">
              {props.description}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
};
