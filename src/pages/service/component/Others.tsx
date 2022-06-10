import { Icon } from "@chakra-ui/icons";
import { Center, GridItem, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FaRegHandPointUp } from "react-icons/fa";

const others = [
  { imageUrl: "/stripelogo.png", imageAlt: "Stripe" },
  { imageUrl: "/firebaselogo.svg", imageAlt: "Firebase" },
];

export const Others = () => {
  return (
    <Center display="flex" flexDir="column" px={8}>
      <HStack spacing={4}>
        <Icon as={FaRegHandPointUp} w={5} h={5} color="blue.400" />
        <Text fontSize={{ base: "md", md: "2xl" }} letterSpacing={4}>
          その他にも下記サービスを使用した開発にも対応可能です。
        </Text>
      </HStack>
      <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: 4, md: 8 }} py={8}>
        {others.map(({ imageAlt, imageUrl }) => {
          return (
            <GridItem key={imageAlt} w={{ base: "full", md: "300px" }}>
              <Image src={imageUrl} alt={imageAlt} width="4240" height="2232" />
            </GridItem>
          );
        })}
      </SimpleGrid>
    </Center>
  );
};
