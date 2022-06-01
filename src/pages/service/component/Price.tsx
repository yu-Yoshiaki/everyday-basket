import { Box, Flex, Heading } from "@chakra-ui/react";

export const Price = (props: { price: number }) => {
  return (
    <Flex p="4" w="full" maxW="400px">
      <Box
        bg="white"
        boxShadow="base"
        rounded="xl"
        p="10"
        overflow="hidden"
        w="full"
        textAlign="center"
      >
        <Heading
          color="gray.700"
          fontSize={{ base: "xl", md: "3xl" }}
          fontFamily="body"
        >
          ¥ {props.price.toLocaleString()}〜
        </Heading>
      </Box>
    </Flex>
  );
};
