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
    <header className="flex h-[80px] items-center gap-10 px-8">
      <Link href="/">
        <a className="hover:border-b-2 hover:border-gray-400">
          <h1 className="text-lg font-bold">α-Release企画</h1>
        </a>
      </Link>

      <nav className="flex items-center gap-4">
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
