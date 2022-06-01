import { Box } from "@chakra-ui/react";
import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

export const BlogLayout: CustomLayout = (page) => {
  return (
    <div>
      <Header />
      <Box as={"main"} minH={"80vh"}>
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </Box>
      <Footer />
    </div>
  );
};
