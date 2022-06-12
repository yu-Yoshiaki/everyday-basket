import { Box, Heading } from "@chakra-ui/react";

type Props = {
  title: string;
};

export const Title = (props: Props) => {
  return (
    <Box
      position={"relative"}
      height={{ base: "200px", md: "300px" }}
      width={"full"}
    >
      <Heading
        as={"h2"}
        zIndex={"1"}
        position={"absolute"}
        left={"50%"}
        top={"50%"}
        textAlign={"left"}
        transform={"translateX(-50%) translateY(-50%)"}
        fontWeight={"bold"}
        fontSize={{ base: "2xl", md: "4xl" }}
        color={"black"}
        width={{ base: "90%", md: "auto" }}
        mx={"auto"}
      >
        {props.title}
      </Heading>
    </Box>
  );
};
