import { Center, Heading, Text, VStack } from "@chakra-ui/react";

export const SectionTitle = (props: { titleEn: string; titleJa: string }) => {
  return (
    <Center>
      <VStack spacing="2">
        <Text color="blue.200" fontSize="20px">
          {props.titleEn}
        </Text>
        <Heading as="h3" size="lg">
          {props.titleJa}
        </Heading>
        <Text color="blue.200" width="90px" borderBottom="2px"></Text>
      </VStack>
    </Center>
  );
};
