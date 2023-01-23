import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
  ogImage?: string;
};

export const Meta = (props: Props) => {
  const defaultTitle = "";
  const defaultDescription = "";
  const defaultOgImage = "";
  const pageTitle = ``;
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
