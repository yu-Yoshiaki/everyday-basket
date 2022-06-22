import { Text } from "@chakra-ui/react";

const priceList = {
  main: { name: "next.js", price: 200000 },
  additional: [
    { name: "microCMS", price: 200000 },
    { name: "Firebase", price: 100000 },
    { name: "Shopify", price: 300000 },
  ],
};

export const Price = () => {
  return (
    <div>
      <Text
        color="gray.700"
        fontSize={{ base: "3xl", md: "3xl" }}
        fontFamily="body"
        fontWeight={"bold"}
        py={4}
      >
        ¥ {priceList.main.price.toLocaleString()}〜
      </Text>
    </div>
  );
};
