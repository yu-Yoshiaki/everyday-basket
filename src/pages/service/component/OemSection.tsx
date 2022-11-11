import Image from "next/image";
import Link from "next/link";

type List = {
  name: string;
  description: string;
  image?: string;
  feature: string[];
  demoLink: string;
}[];
const list: List = [
  {
    name: "LINE公式アカウントと組み合わせて作るBOTアプリ",
    description: "LINE公式アカウントに、タグ機能",
    feature: ["会員制機能、"],
    demoLink: "https:lplus.vercel.app/lp",
    image: "/geek.png",
  },
  // {
  //   name: "サブスクリプション型NEWSアプリ",
  //   description: "NEWS PICKSような月額会員制のNEWSアプリ。",
  //   feature: ["会員制機能、"],
  //   demoLink: "https:lplus.vercel.app/lp",
  // },
  // {
  //   name: "ECサイト",
  //   description: "個別販売、サブスクリプション制のどちらにも対応したECサイト。",
  //   feature: [],
  //   demoLink: "https:lplus.vercel.app/lp",
  // },
];

export const OemSection = () => {
  return (
    <div className="grid gap-10">
      <h3 className="flex items-center justify-center text-5xl font-bold">
        OEM販売
      </h3>
      <p className="text-center font-semibold">
        「システム開発を依頼したいけど、どこから始めたらいいのかわからない」
        <br />
        そんなお客様のために、私たちが開発しているシステムの雛形をOEMという形で販売しています。
        <br />
        ゼロから開発を依頼するよりも安く、素早く運用できます。
      </p>

      <div className="mb-20 grid grid-cols-2 gap-10">
        {list.map((item) => {
          return (
            <div key={item.name} className="grid gap-2">
              <Image
                src={item.image as string}
                alt=""
                layout="responsive"
                objectFit="contain"
                width={213}
                height={116}
              />
              <h4 className="text-xl font-bold">{item.name}</h4>
              <p className="rounded-xl bg-gray-200 p-3 text-sm">
                {item.description}
              </p>
              <Link href={item.demoLink}>
                <a>
                  参考アプリケーション:{" "}
                  <span className="text-blue-500">{item.demoLink}</span>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
