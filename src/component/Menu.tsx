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

const PC = () => {
  return (
    <nav className="flex items-center gap-2">
      {items.map(({ href, label }) => {
        return (
          <Link href={href} key={label} passHref>
            <a
              className={
                "bg-white py-2 px-4 text-blue-400 hover:bg-blue-400 hover:text-white"
              }
            >
              {label}
            </a>
          </Link>
        );
      })}
    </nav>
  );
};

export const MenuComponent = () => {
  return <PC />;
};
