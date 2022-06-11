import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
};

export const Meta = (props: Props) => {
  const defaultTitle = "A-Release企画｜WEB開発";
  const defaultDescription =
    "【 Next.jsでの開発承ります 】WEBアプリケーションの開発はA-Release企画まで。";

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
      <meta property="og:image" content={`/arelease.png`} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};
