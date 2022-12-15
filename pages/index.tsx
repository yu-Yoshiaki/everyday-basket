import Image from "next/image";
import topImage from "public/team.jpg";
import { ContactForm } from "src/components/ContactForm";
import { Meta } from "src/components/Meta";
import { Service } from "src/pages/service";

const Root = () => {
  return (
    <>
      <Meta />
      <div className="container mx-auto flex flex-col space-y-14">
        <div className="min-h-[90vh] space-y-10 px-5 md:grid-cols-2">
          <div className="relative">
            <Image
              alt={""}
              src={topImage}
              // height={200}
              // sizes="100vw"
            />
            <div className="absolute inset-y-0 z-10 bg-gray-600 opacity-50"></div>
            <h2 className="absolute top-1/2 left-20 z-20 mx-auto translate-y-[-50%] text-3xl font-semibold text-white backdrop-blur-sm lg:text-6xl">
              行動の数だけ、
              <br />
              挑戦した分だけ、
              <br />
              人生は広がる。
            </h2>
          </div>
          <Service />
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Root;
