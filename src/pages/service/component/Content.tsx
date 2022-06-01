import { Box, Flex, List, ListIcon, ListItem } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

export const Content = (props: { contents: string[] }) => {
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
        <List spacing={3} textAlign="start">
          {props.contents.map((content) => {
            return (
              <ListItem key={content}>
                <ListIcon as={FaCheckCircle} color="green.500" />
                {content}
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Flex>
  );
};
