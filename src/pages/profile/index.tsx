import Image from "next/image";
import { Container } from "src/components/Container";
import { Meta } from "src/components/Meta";

export const Profile = () => {
  return (
    <>
      <Meta title={"プロフィール"} />
      <div className="rounded-md bg-gray-800 py-10 text-white">
        <Container title={{ en: "PROFILE", ja: "プロフィール" }}>
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="mx-auto flex h-[136px]  w-[136px] items-center justify-center rounded-full bg-blue-300">
              <div className="relative h-32 w-32 ">
                <Image
                  src={"/profile.jpeg"}
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>
            </div>
            <h3 className="text-center text-lg font-bold">🤭 湯本 好明</h3>
            <p className="mx-auto w-80">
              物流・工事会社で社内システム、進捗管理アプリケーションの開発・運営に携わったのち、新事業メンバーとして越境EC立ち上げに参画。
              <br />
              その後、2022年に独立、フリーランスエンジニアとして個人開発＆スタートアップ企業のフロントエンド開発に従事。
            </p>
            <table className="mx-auto w-80 border-collapse border-spacing-20 rounded-md border">
              <tbody>
                <tr>
                  <th className="border-r border-gray-300 px-4 py-2">屋号</th>
                  <td className="px-4 py-2 font-semibold">α-release企画</td>
                </tr>
                <tr>
                  <th className="border-r border-gray-300 px-4 py-2">
                    🏢 住所
                  </th>
                  <td className="px-4 py-2 font-semibold">
                    東京都立川市一番町4-66-7
                  </td>
                </tr>

                <tr>
                  <th className="border-r border-gray-300 px-4 py-2 text-sm">
                    📞 TEL
                  </th>
                  <td className="px-4 py-2 text-sm font-semibold">
                    <a href="tel:080-5512-0468" className="text-blue-500">
                      080-5512-0468
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </div>
    </>
  );
};
