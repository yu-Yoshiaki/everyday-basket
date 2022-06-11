import { VStack } from "@chakra-ui/react";
import type { CustomNextPage } from "next";
import { HomeTop } from "src/component";
import { Meta } from "src/component";
import { BlogLayout } from "src/layout/BlogLayout";

const Root: CustomNextPage = () => {
  return (
    <div>
      <Meta />
      <VStack spacing={"14"}>
        <HomeTop />
      </VStack>
    </div>
  );
};

Root.getLayout = BlogLayout;

export default Root;
