import type { CustomNextPage } from "next";
import { Contact, Container } from "src/component";
import { Meta } from "src/component";
import { BlogLayout } from "src/layout";
import { AppSection } from "src/pages/service/component/AppSection";

const Service: CustomNextPage = () => {
  return (
    <div className="space-y-20">
      <Meta title={"SERVICE｜A-Release企画"} />
      <Container title={"SERVICE"}>
        <AppSection />
        <div className="my-10 h-[1px] w-full bg-gray-300"></div>
        <Contact />
      </Container>
    </div>
  );
};

Service.getLayout = BlogLayout;

export default Service;
