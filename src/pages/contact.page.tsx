import type { CustomNextPage } from "next";
import { Meta } from "src/component";
import { Container } from "src/component/Container";
import { BlogLayout } from "src/layout";

const Contact: CustomNextPage = () => {
  return (
    <div>
      <Meta title={`CONTACT｜A-Release企画`} />
      <Container title={"CONTACT"}>
        <iframe
          src="https://form.run/embed/@arelease-labo-1667108571?embed=direct"
          frameBorder="0"
          title="contactform"
          width={1000}
          height={1000}
        ></iframe>
      </Container>
    </div>
  );
};

Contact.getLayout = BlogLayout;

export default Contact;
