import type { CustomNextPage } from "next";
import { Meta } from "src/component";
import { BlogLayout } from "src/layout";

const Contact: CustomNextPage = () => {
  return (
    <div>
      <Meta title={`CONTACT｜A-Release企画`} />
      {/* <Container title={""}> */}
      <div className="bg-white p-5 md:p-20">
        <iframe
          className="w-full border-none"
          height="737px"
          src="https://www.noway-form.com/f/539fef0e-a845-4c05-a3ac-de2e619f3075/embed"
        />
      </div>
      {/* </Container> */}
    </div>
  );
};

Contact.getLayout = BlogLayout;

export default Contact;
