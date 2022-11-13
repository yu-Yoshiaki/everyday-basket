import Image from "next/image";

type List = {
  name: string;
  description: string;
  image?: string;
  feature: string[];
  demoLink: string;
}[];
const list: List = [
  {
    name: "L-Buddy | LINEマーケティングツール",
    description:
      "LINE公式アカウントの運用をお助け！タグ機能で詳細な顧客管理、友だち追加経路がわかるURL機能など。LINE公式アカウントだけでは難しい機能をL-Buddyがお助けします。",
    feature: ["会員制機能、"],
    demoLink: "https:lplus.vercel.app/lp",
    image: "/operateAccount.png",
  },
];

export const AppSection = () => {
  return (
    <div className="grid gap-10">
      <h3 className="flex items-center justify-center text-5xl font-bold">
        アプリケーション企画、運営
      </h3>
      <p className="text-center font-semibold">
        自社で新規アプリケーションの企画、開発、運用を行なっています。
        <br />
        「システムの力で、世の中はもっと便利になる」
      </p>
      <div>
        {list.map((item) => {
          return (
            <div key={item.name} className="grid grid-cols-2 gap-10">
              <div className="rounded-xl">
                <Image
                  src={item.image as string}
                  alt=""
                  layout="responsive"
                  objectFit="cover"
                  width={213}
                  height={116}
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-4">
                <a href={item.demoLink}>
                  <h4 className="text-2xl font-bold text-blue-500">
                    {item.name}
                  </h4>
                </a>
                <p className="w-[80%] text-sm">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
