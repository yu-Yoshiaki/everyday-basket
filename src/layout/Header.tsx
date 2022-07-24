import { MailIcon } from "@heroicons/react/solid";
import Link from "next/link";
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
    <header className="flex flex-col items-center divide-y md:flex-row md:gap-10 md:divide-none md:px-8">
      <Link href="/">
        <a className="flex h-[60px] items-center md:h-[80px] ">
          <h1 className="text-xl font-bold hover:border-b-2 hover:border-gray-400 md:text-lg">
            α-Release企画
          </h1>
        </a>
      </Link>

      <nav className="flex h-[40px] items-center gap-4 md:h-[80px]">
        {items.map(({ href, label }) => {
          return (
            <Link href={href} key={label} passHref>
              <a
                className={
                  "text-blue-400 hover:border-b-2 hover:border-blue-400"
                }
              >
                {label}
              </a>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
