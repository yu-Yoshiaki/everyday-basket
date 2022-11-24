import { Contact } from "app/Contact";
import { Meta } from "app/Meta";
import Image from "next/image";

const Root = () => {
  return (
    <div>
      <Meta />
      <div className="flex flex-col space-y-14">
        <div className="min-h-[90vh] space-y-10 px-5 py-10 md:grid-cols-2 md:p-20">
          <div className="relative">
            <Image
              alt={""}
              src={"/team.jpg"}
              width={450}
              height={200}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <div className="absolute inset-y-0 z-10 bg-gray-600 opacity-50"></div>
            <h2 className="top-24 left-10 z-20 text-3xl font-semibold lg:absolute lg:text-6xl lg:text-white">
              行動の数だけ、
              <br />
              挑戦した分だけ、
              <br />
              人生は広がる。
            </h2>
          </div>

          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Root;
