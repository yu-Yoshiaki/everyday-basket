import Link from "next/link";

export const Contact = () => {
  return (
    <div className="mx-auto w-[90%] rounded-lg bg-white p-[40px] md:w-[1000px]">
      <div className="flex flex-col space-y-5">
        <p className="text-3xl font-bold">CONTACT</p>
        <p className="text-xl">
          開発依頼・お見積り。その他、お問い合わせはこちら。
        </p>
        <Link href="/contact" passHref>
          <a className="rounded-lg bg-blue-400 p-5 text-white">お問い合わせ</a>
        </Link>
      </div>
    </div>
  );
};
