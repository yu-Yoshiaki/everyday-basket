import Link from "next/link";

export const Contact = () => {
  return (
    <div className="sahdow-xl mx-auto space-y-4 rounded-lg bg-gray-800  p-[50px] text-white md:w-[1000px] md:text-center">
      <p className="text-3xl font-bold">CONTACT</p>
      <p className="text-xl">
        開発依頼・お見積り。その他、お問い合わせは
        <Link href="/contact" passHref>
          <a className="text-blue-400">こちら</a>
        </Link>
        。
      </p>
    </div>
  );
};
