import { Box, Heading } from "@chakra-ui/react";

export const Top = (props: { title: string }) => {
  return (
    <Box
      position={"relative"}
      height={{ base: "100px", md: "200px" }}
      width={"full"}
    >
      <Heading
        as={"h2"}
        position={"absolute"}
        left={"50%"}
        top={"50%"}
        textAlign={"left"}
        transform={"translateX(-50%) translateY(-50%)"}
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        color={"blue.200"}
        zIndex={2}
        letterSpacing={3}
      >
        {props.title}
      </Heading>
    </Box>
  );
};
