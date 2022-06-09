import { Box, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export const Contact = () => {
  return (
    <Box
      w={{ base: "90%", md: "1000px" }}
      rounded="lg"
      p="40px"
      fontFamily="body"
      bgGradient={"inherit"}
      border={"1px"}
      borderColor="blue.400"
      mx="auto"
    >
      <VStack spacing={"5"}>
        <Text fontSize="3xl" fontWeight="bold">
          CONTACT
        </Text>
        <Text fontSize="xl">
          開発依頼・お見積り。その他、お問い合わせはこちら。
        </Text>
        <Link href="/contact" passHref>
          <Box as="a" p={5} bg="blue.400" color="white" rounded="lg">
            お問い合わせページに進む
          </Box>
        </Link>
      </VStack>
    </Box>
  );
};
