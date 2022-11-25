import { MailIcon } from "@heroicons/react/solid";
import Link from "next/link";
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
    <header className="flex items-center justify-between px-20 py-5">
      <Link
        href="/"
        className="border-b-2 border-white py-2 text-4xl font-bold hover:border-gray-400 md:text-2xl"
      >
        <h1>α-Release企画</h1>
      </Link>

      <nav className="space-x-4">
        {items.map(({ href, label }) => {
          return (
            <Link
              href={href}
              key={label}
              className={
                "inline-block border-b-2 border-white py-2 text-lg font-bold text-gray-600 hover:border-gray-500"
              }
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
