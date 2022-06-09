import { VStack } from "@chakra-ui/react";
import type { CustomNextPage } from "next";
import { HomeTop } from "src/component";
import { BlogLayout } from "src/layout/BlogLayout";

const Root: CustomNextPage = () => {
  return (
    <VStack spacing={"14"}>
      <HomeTop />
    </VStack>
  );
};

Root.getLayout = BlogLayout;

export default Root;
