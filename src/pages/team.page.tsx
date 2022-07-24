import type { CustomNextPage } from "next";
import { Meta } from "src/component";
import { Top } from "src/component/Top";
import { BlogLayout } from "src/layout";

const teamData = [
  {
    label: "事業所",
    value: "A-Release企画",
  },
  {
    label: "所在地",
    value: "東京都",
  },
  {
    label: "事業内容",
    value: "WEBサイト制作＆WEBアプリケーション開発",
  },
  {
    label: "メンバー",
    value: "湯本 好明",
  },
];

const Team: CustomNextPage = () => {
  return (
    <div>
      <Meta title={`TEAM｜A-Release企画`} />
      <Top title={"TEAM"} />
      <div className="mx-auto flex w-[90%] flex-col bg-white text-lg font-semibold leading-10 tracking-wide md:w-[700px] md:text-2xl">
        {teamData.map((data) => {
          return (
            <div
              className="flex w-full flex-row text-left md:h-[70px]"
              key={data.label}
            >
              <p className="w-[100px] md:w-[200px]">{data.label}</p>
              <p className="w-[250px] md:w-full">{data.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Team.getLayout = BlogLayout;

export default Team;
