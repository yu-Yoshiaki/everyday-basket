import Head from "next/head";

type Props = {
  title: string;
  description?: string;
  ogImage?: string;
};

export const Meta = (props: Props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      {props.description && (
        <meta property="description" content={props.description} />
      )}
      <meta property="og:title" content={props.title} />
      {props.description && (
        <meta property="og:description" content={props.description} />
      )}
      {props.ogImage && <meta property="og:image" content={props.ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};
