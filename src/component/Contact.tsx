import Link from "next/link";

export const Contact = () => {
  return (
    <div className="mx-auto space-y-4 rounded-lg bg-gray-800 p-6 text-white shadow-xl md:w-[1000px] md:p-[50px] md:text-center">
      <p className="text-xl font-bold md:text-3xl">CONTACT</p>
      <p className="md:text-xl">
        開発依頼・お見積り。その他、お問い合わせは
        <Link href="/contact" passHref>
          <a className="text-blue-400">こちら</a>
        </Link>
        。
      </p>
    </div>
  );
};
