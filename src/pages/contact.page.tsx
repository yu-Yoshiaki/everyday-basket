import type { CustomNextPage } from "next";
import { Meta } from "src/component";
import { Top } from "src/component/Top";
import { BlogLayout } from "src/layout";

const Contact: CustomNextPage = () => {
  return (
    <div>
      <Meta title={`CONTACT｜A-Release企画`} />
      <Top title={"CONTACT"} />
      <div className="mx-auto w-[80%] md:w-[500px]">
        <iframe
          src="https://www.noway-form.com/f/d9ebbf09-7c18-46f7-80c2-58e2f006d045/embed"
          allowFullScreen
        />
      </div>
    </div>
  );
};

Contact.getLayout = BlogLayout;

export default Contact;
