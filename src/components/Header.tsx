import Link from "next/link";
import { MdArticle } from "react-icons/md";

const items = [{ href: "/blog", label: "BLOG", icon: MdArticle }];

export const Header = () => {
  return (
    <header className="flex flex-col items-center justify-between p-5 md:flex-row">
      <Link
        href="/"
        className="border-b-2 border-white py-2 text-2xl font-bold hover:border-gray-400 md:text-3xl"
      >
        <h1>
          α-Release企画<span className="inline-block rotate-12">📱</span>
        </h1>
      </Link>

      <nav className="flex justify-center space-x-4 border-b-2 border-gray-400">
        {items.map(({ href, label }) => {
          return (
            <Link
              href={href}
              key={label}
              className={
                "inline-block w-[70px] py-2 text-center font-bold text-gray-700 hover:border-gray-500"
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
