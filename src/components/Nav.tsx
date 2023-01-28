import Link from "next/link";
import { useRouter } from "next/router";

const menu = [
  { text: "コート", href: "/" },
  // { text: "イベント", href: "/event" },
  // { text: "サークル", href: "/curcle" },
  // { text: "大会", href: "/#" },
  // { text: "ブログ", href: "/blog" },
  { text: "バッシュ", href: "/shoes" },
];

export const Nav = () => {
  const router = useRouter();

  return (
    <nav className="flex w-full overflow-x-scroll">
      {menu.map(({ text, href }) => {
        return (
          <Link
            key={href}
            href={href}
            className={`hidden-scrollbar whitespace-nowrap py-4 px-3 font-semibold ${
              router.asPath === href && "border-b-2 border-blue-900"
            }`}
          >
            {text}
          </Link>
        );
      })}
    </nav>
  );
};
