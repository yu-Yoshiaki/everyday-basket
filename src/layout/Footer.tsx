import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import Link from "next/link";
import type { ReactNode } from "react";
import React from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialButton = (props: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={12}
      h={12}
      cursor={"pointer"}
      as={"a"}
      href={props.href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{props.label}</VisuallyHidden>
      {props.children}
    </chakra.button>
  );
};

export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column-reverse", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Link href="/privacy">
          <a>プライバシーポリシー</a>
        </Link>
        <Text>© 2022 A-Release. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter size={20} />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"}>
            <FaYoutube size={20} />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <FaInstagram size={20} />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};
