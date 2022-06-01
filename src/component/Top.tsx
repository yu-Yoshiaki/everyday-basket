import { Box, Image, Text } from "@chakra-ui/react";

export const Top = (props: { title: string }) => {
  return (
    <Box
      position={"relative"}
      height={{ base: "200px", md: "300px" }}
      width={"full"}
      bg="blue"
    >
      <Text
        position={"absolute"}
        left={"50%"}
        top={"50%"}
        textAlign={"left"}
        transform={"translateX(-50%) translateY(-50%)"}
        fontWeight={"bold"}
        fontSize={"4xl"}
        color={"black"}
      >
        {props.title}
      </Text>
      <Image
        alt={"Hero Image"}
        fit={"cover"}
        align={"center"}
        w={"100%"}
        h={"100%"}
        src={
          "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
        }
      />
    </Box>
  );
};
