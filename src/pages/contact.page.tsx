import { AspectRatio } from "@chakra-ui/react";
import type { CustomNextPage } from "next";
import { Meta } from "src/component";
import { Top } from "src/component/Top";
import { BlogLayout } from "src/layout";

const Contact: CustomNextPage = () => {
  return (
    <div>
      <Meta title={`CONTACT｜A-Release企画`} />
      <Top title={"CONTACT"} />
      <AspectRatio w={{ base: "80%", md: "500px" }} ratio={2 / 3} mx="auto">
        <iframe
          src="https://www.noway-form.com/f/d9ebbf09-7c18-46f7-80c2-58e2f006d045/embed"
          allowFullScreen
        />
      </AspectRatio>
    </div>
  );
};

Contact.getLayout = BlogLayout;

export default Contact;
