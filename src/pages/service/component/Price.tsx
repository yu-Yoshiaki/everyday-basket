import { Text } from "@chakra-ui/react";

export const Price = (props: { price: number }) => {
  return (
    <Text
      color="gray.700"
      fontSize={{ base: "3xl", md: "3xl" }}
      fontFamily="body"
      fontWeight={"bold"}
      py={4}
    >
      ¥ {props.price.toLocaleString()}〜
    </Text>
  );
};
