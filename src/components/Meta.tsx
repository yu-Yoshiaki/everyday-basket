import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
  ogImage?: string;
};

export const Meta = (props: Props) => {
  const defaultTitle = "α-Release企画｜小規模事業者向けアプリケーション開発";
  const defaultDescription =
    "【Next.jsでの開発承ります】アプリケーションの開発はα-Release企画まで。";
  const defaultOgImage = "https://www.a-release.com/arelease.png";
  const pageTitle = `${props.title} | A-Release企画`;
  return (
    <Head>
      <title>{props.title ? pageTitle : defaultTitle}</title>
      <meta
        property="og:title"
        content={props.title ? pageTitle : defaultTitle}
      />

      <meta
        property="description"
        content={props.description ?? defaultDescription}
      />
      <meta
        property="og:description"
        content={props.description ?? defaultDescription}
      />

      <meta property="og:image" content={props.ogImage ?? defaultOgImage} />

      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};
