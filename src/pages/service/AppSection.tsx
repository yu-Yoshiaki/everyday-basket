import type { StaticImageData } from "next/image";
import Image from "next/image";
import Invoice from "public/invoice.png";
import LBudy from "public/operateAccount.png";

import { Section } from "./Section";

type List = {
  name: string;
  description: string;
  image?: StaticImageData;
  feature: string[];
  demoLink: string;
}[];
const list: List = [
  {
    name: "L-Buddy | LINEマーケティングツール",
    description:
      "LINE公式アカウントの運用をお助け！タグ機能で詳細な顧客管理、友だち追加経路がわかるURL機能など。LINE公式アカウントだけでは難しい機能をL-Buddyがお助けします。",
    feature: ["会員制機能、"],
    demoLink: "https://lplus.vercel.app/lp",
    image: LBudy,
  },
  {
    name: "Invoice | シンプルな請求書作成ツール",
    description:
      "簡単な操作で請求書を作成することができるWEBアプリです。作成した請求書をテンプレートとして保存することもできます。また、プレビュー機能を使用することで、作成した請求書を確認することができます。(実際の印刷少しの違う場合があります。)",
    feature: ["会員制機能、"],
    demoLink: "https://simple-invoice.vercel.app",
    image: Invoice,
  },
];

export const AppSection = () => {
  return (
    <Section
      title="アプリケーション企画、運営"
      description={
        <>
          自社で新規アプリケーションの企画、開発、運用を行なっています。
          <br />
          「システムの力で、世の中はもっと便利になる」
        </>
      }
    >
      <div className="space-y-10 py-5">
        {list.map((item) => {
          return (
            <div key={item.name} className="grid gap-5 md:grid-cols-2">
              <Image
                src={item.image as StaticImageData}
                alt=""
                className="rounded-md shadow-md"
              />

              <div className="space-y-4">
                <a
                  href={item.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4 className="font-bold md:text-xl">{item.name}</h4>
                </a>
                <a
                  href={item.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold"
                >
                  {item.demoLink}
                </a>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
