import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
  ogImage?: string;
};

export const Meta = (props: Props) => {
  const defaultTitle = "α-Release企画｜小規模事業者向けアプリケーション開発";
  const defaultDescription =
    "【 Next.jsでの開発承ります 】アプリケーションの開発はα-Release企画まで。";
  const defaultOgImgae = "/arelease.png";

  return (
    <Head>
      <title>{props.title ?? defaultTitle}</title>
      <meta
        property="description"
        content={props.description ?? defaultDescription}
      />
      <meta property="og:title" content={props.title ?? defaultTitle} />
      <meta
        property="og:description"
        content={props.description ?? defaultDescription}
      />
      <meta property="og:image" content={props.ogImage ?? defaultOgImgae} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};
