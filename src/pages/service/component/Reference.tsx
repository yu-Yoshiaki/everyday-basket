import {
  Box,
  Center,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const references = [
  {
    image: {
      src: "/hotelriverside.png",
    },
    title: "The Hotel Riverside.",
    url: "https://hotel-riverside.studio.site",
    description: "Riversideは隅田川添いにある小さなホテルです。",
  },
  {
    image: {
      src: "/code1on1.png",
    },
    title: "Code1on1",
    url: "https://code1on1.studio.site",
    description: "月額30,000円で身につくプログラミングスクール",
  },
  {
    image: {
      src: "/machisiru.png",
    },
    title: "Machisiru",
    url: "https://machisiru.studio.site",
    description: "暮らしにちょっぴりアクセントを。",
  },
];

export const Reference = () => {
  return (
    <Center display="flex" flexDir="column">
      <Flex
        alignItems="center"
        justifyContent="center"
        _after={{
          borderTop: "1px solid #666666",
          content: `""`,
          width: { base: "4rem", md: "24rem" },
        }}
        _before={{
          borderTop: "1px solid #666666",
          content: `""`,
          width: { base: "4rem", md: "24rem" },
        }}
      >
        <Heading as={"h3"} px={6}>
          Reference
        </Heading>
      </Flex>

      <SimpleGrid columns={{ md: 3 }} gap={{ base: 8, md: 8 }} py={8}>
        {references.map((item) => {
          return (
            <Link href={item.url} key={item.title} passHref>
              <GridItem as={"a"} bg={"white"}>
                <Box w="340px" minH={"330px"} boxShadow="md" pb={8}>
                  <Image
                    src={item.image.src}
                    alt={""}
                    layout={"responsive"}
                    width="4240"
                    height="2232"
                  />
                  <Heading as={"h4"} fontSize={"3xl"} p={4}>
                    {item.title}
                  </Heading>
                  <Text fontFamily="body" px={4}>
                    {item.description}
                  </Text>
                </Box>
              </GridItem>
            </Link>
          );
        })}
      </SimpleGrid>
    </Center>
  );
};
