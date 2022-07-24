import type { CustomNextPage, GetStaticProps } from "next";
import Image from "next/image";
import { Contact, Top } from "src/component";
import { Meta } from "src/component";
import { BlogLayout } from "src/layout";
import { microcms } from "src/lib/microcms";
import { Card } from "src/pages/service/component";
import type { Microcms, ServiceField } from "src/type/microcms";

const Feature = () => {
  const feature = [
    {
      text: "WEB開発のためのパッケージが豊富",
    },
    { text: "SSR＆SSGのハイブリッド" },
    { text: "画像ファイル最適化" },
  ];
  return (
    <>
      <p className="relative text-center text-3xl font-bold text-blue-100 before:absolute before:top-0 before:left-[50%] before:z-10 before:translate-x-[-50%] before:text-xl before:text-gray-600 before:content-['特徴'] md:text-4xl">
        Feature
      </p>

      <div className="grid justify-center gap-8 md:grid-cols-3 md:justify-start">
        {feature.map((data) => {
          return (
            <div
              key={data.text}
              className="flex h-[240px] w-[240px] items-center justify-center rounded-full bg-blue-400 md:h-[200px] md:w-[200px]"
            >
              <p className="px-4 text-white">{data.text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

const Service: CustomNextPage<{ data: Microcms<ServiceField> }> = (props) => {
  return (
    <div className="bg-blue-50">
      <Meta title={"SERVICE｜A-Release企画"} />
      <Top title={"SERVICE"} />
      <div className="grid min-h-[70vh] grid-rows-2 gap-8 rounded-lg bg-white p-10 md:w-[90%] md:grid-cols-3 md:p-20">
        <div className="col-span-2 row-span-2">
          <div className="flex flex-col gap-14 text-gray-600 md:gap-8">
            <h3 className="text-2xl md:text-3xl">
              <span className="text-3xl text-blue-500 md:text-6xl">
                Next.js
              </span>
              を使った
              <br /> WEBアプリケーション開発
            </h3>
            <p className="text-lg font-bold md:text-2xl">
              Next.jsは、近年のWEB開発現場で採用が増えているWEB開発フレームワークです。
            </p>
            <Feature />
            <p className="text-lg font-bold md:text-2xl">
              このNext.jsと下記サービスを組み合わせることで、多様なアプリケーション開発を実現できます。
            </p>
          </div>
        </div>

        <div className="relative hidden h-0 bg-black md:grid md:h-[200px] md:w-[400px]">
          <div className="w-[80%]">
            <Image
              src={"/nextjs.svg"}
              alt={""}
              layout={"fill"}
              objectFit={"contain"}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-4xl font-bold text-gray-600 md:text-5xl">✖︎</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 md:px-10 lg:grid-cols-3">
        {props.data.contents.map((item) => {
          return <Card {...item} key={item.title} />;
        })}
      </div>
      <Contact />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await microcms.get<Microcms<ServiceField>>({
    endpoint: "service",
  });
  return {
    props: {
      data,
    },
  };
};

Service.getLayout = BlogLayout;

export default Service;
