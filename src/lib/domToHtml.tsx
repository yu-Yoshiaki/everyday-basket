import { Text } from "@chakra-ui/react";
import type { HTMLReactParserOptions } from "html-react-parser";
import parse, {
  attributesToProps,
  domToReact,
  Element,
} from "html-react-parser";

export const domToHtml = (html: string) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.type === "tag") {
        const props = attributesToProps(domNode.attribs);

        if (domNode.attribs) {
          if (domNode.name === "h2") {
            return (
              <Text
                as="h2"
                fontWeight={"bold"}
                fontSize={"36px"}
                py={3}
                {...props}
              >
                {domToReact(domNode.children)}
              </Text>
            );
          }
          if (domNode.name === "h3") {
            return (
              <Text
                as="h3"
                fontWeight={"semibold"}
                fontSize={"24px"}
                py={1}
                {...props}
              >
                {domToReact(domNode.children)}
              </Text>
            );
          }
        }
      }
    },
  };

  return parse(html, options);
};
