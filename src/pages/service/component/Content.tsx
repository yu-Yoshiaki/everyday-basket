import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

export const Content = (props: { contents: string[] }) => {
  return (
    <List spacing={2} textAlign="start" px={8}>
      {props.contents.map((content) => {
        return (
          <ListItem key={content}>
            <ListIcon as={FaCheckCircle} color="skyblue" />
            {content}
          </ListItem>
        );
      })}
    </List>
  );
};
