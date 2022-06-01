import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import Link from "next/link";

import { MenuComponent } from "./Menu";

export const Header = () => {
  return (
    <header>
      <Flex minWidth="max-content" alignItems="center" gap="2" p="4">
        <Box p="2">
          <Link href="/">
            <a>
              <Heading size="md" as={"h1"}>
                A Release
              </Heading>
            </a>
          </Link>
        </Box>
        <Spacer />
        <MenuComponent />
      </Flex>
    </header>
  );
};
