import { MailIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";

export const HomeTop = () => {
  return (
    <div className="grid grid-cols-2 p-20">
      <div className="flex flex-col space-y-10">
        <h2 className="text-6xl font-semibold">
          <span className="relative text-gray-800 after:absolute after:bottom-1 after:left-0 after:-z-10 after:h-1/3 after:w-full after:bg-blue-400 after:content-['']">
            α-Release,
          </span>
          <br />
          <span className="text-blue-400">create everywhere!</span>
        </h2>

        <div className="container">
          WEB制作をメイン事業に、東京で活動するチーム。
          <br />
          オンラインでの活動がメイン。
          <br />
          全国どこでも対応可能。
          <br />
          お気軽にお問い合わせください。
        </div>

        <Link href="contact">
          <a className="flex w-[200px] items-center justify-center rounded-full bg-blue-400 px-6 py-4 text-lg hover:bg-blue-500">
            <MailIcon width={20} height={20} color={"white"} />
            <p className="text-white">お話を聞く</p>
          </a>
        </Link>
      </div>

      <div className="relative h-[300px] w-[600px] overflow-hidden rounded-2xl shadow-2xl">
        <Image alt={""} layout={"fill"} src={"/team.jpg"} objectFit={"cover"} />
      </div>
    </div>
  );
};
