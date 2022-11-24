import { MailIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
// import { IoMdBusiness } from "react-icons/io";
import { MdArticle } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";

const items = [
  // { href: "/team", label: "TEAM", icon: IoMdBusiness },
  { href: "/service", label: "SERVICE", icon: RiServiceLine },
  { href: "/article", label: "BLOG", icon: MdArticle },
  { href: "/contact", label: "CONTACT", bg: "bg-blue-300", icon: MailIcon },
];

export const Header = () => {
  return (
    <header className="hidden grid-rows-[200px,1fr,200px] bg-gray-800 py-4 text-white md:grid md:h-screen md:w-[280px]">
      <Link href="/" className="flex items-center justify-center ">
        <h1 className="text-center text-3xl font-bold hover:border-b-2 hover:border-gray-400">
          α-Release企画
        </h1>
      </Link>

      <nav className="hidden bg-gray-800 px-4 text-left md:flex md:flex-col">
        {items.map(({ href, label }) => {
          return (
            <Link
              href={href}
              key={label}
              className={
                "inline-block py-4 px-2 text-2xl font-bold hover:bg-gray-200 hover:text-gray-900 "
              }
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="hidden px-4 font-semibold md:block">
        <div className="order-first flex items-center justify-start gap-6 p-5 md:order-none">
          <FaTwitter size={20} className="text-blue-400 hover:text-white" />
          <FaYoutube size={20} className="text-red-400 hover:text-white" />
          <FaInstagram size={20} className="text-orange-400 hover:text-white" />
        </div>
        <Link
          href="/privacy"
          className="flex items-center justify-start p-2 hover:bg-gray-200 hover:text-gray-900"
        >
          プライバシーポリシー
        </Link>
        <Link
          href="/privacy"
          className="flex items-center justify-start p-2 hover:bg-gray-200 hover:text-gray-900"
        >
          特定商取引
        </Link>
      </div>
    </header>
  );
};
