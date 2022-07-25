import "src/style/global.css";

import type { CustomAppPage } from "next/app";
import Head from "next/head";
import { Suspense } from "react";

const App: CustomAppPage = (props) => {
  const getLayout =
    props.Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <>
      <Head>
        <title>α-Release企画｜小規模事業者向けアプリケーション開発</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta
          property="description"
          content="【 Next.jsでの開発承ります 】アプリケーションの開発はα-Release企画まで。"
        />
        <meta
          property="og:title"
          content="α-Release企画｜小規模事業者向けアプリケーション開発"
        />
        <meta
          property="og:description"
          content="【 Next.jsでの開発承ります 】アプリケーションの開発はα-Release企画まで。"
        />
        <meta property="og:image" content={"/arelease.png"} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Suspense fallback={<div>loading</div>}>
        {getLayout(<props.Component {...props.pageProps} />)}
      </Suspense>
    </>
  );
};

export default App;
