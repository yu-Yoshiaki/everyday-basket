import Link from "next/link";
import { MdArticle } from "react-icons/md";
import { UserMenu } from "src/components/UserMenu";

const account = { name: "好明", label: "BLOG", icon: MdArticle };

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-5">
      <Link href="/">
        <h1 className="py-2 text-2xl font-bold md:text-3xl">
          <span className="inline-block">🏀</span>エブリデイバスケ
        </h1>
      </Link>

      <UserMenu>{account.name}</UserMenu>
    </header>
  );
};
