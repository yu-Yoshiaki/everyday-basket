import { MailIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";

export const HomeTop = () => {
  return (
    <div className="min-h-[90vh] px-5 py-10 md:grid-cols-2 md:p-20">
      <div className="relative">
        <Image
          alt={""}
          layout={"responsive"}
          src={"/team.jpg"}
          objectFit={"cover"}
          width={400}
          height={200}
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

      <Link href="contact">
        <a className="flex w-[200px] items-center justify-center rounded-full bg-blue-400 py-2 text-lg hover:bg-blue-500 lg:px-6 lg:py-4">
          <MailIcon width={20} height={20} color={"white"} />
          <p className="text-white">お話を聞く</p>
        </a>
      </Link>
    </div>
  );
};
