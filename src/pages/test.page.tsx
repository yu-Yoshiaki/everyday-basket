import { Box } from "@chakra-ui/react";
import type { CustomNextPage } from "next";
import { PriceList } from "src/component/PriceList";
import { SectionTitle } from "src/component/SectionTitle";
import { Top } from "src/component/Top";
import { Footer } from "src/layout/Footer";
import { Header } from "src/layout/Header";

const Test: CustomNextPage = () => {
  return (
    <div>
      <Header />
      <Box as="main" minHeight="90vh" w={"full"}>
        <Top title={"Test"} />
        <div id="price">
          <SectionTitle titleEn="Price" titleJa="料金" />
          <PriceList />
        </div>
      </Box>
      <Footer />
    </div>
  );
};

export default Test;
