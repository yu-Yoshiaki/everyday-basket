import { ChakraProvider } from "@chakra-ui/react";
import type { CustomAppProps } from "next/app";
import Head from "next/head";
import { memo } from "react";

const App = (props: CustomAppProps) => {
  const getLayout =
    props.Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <>
      <Head>
        <title>nexst</title>
      </Head>
      <ChakraProvider>
        {getLayout(<props.Component {...props.pageProps} />)}
      </ChakraProvider>
    </>
  );
};

export default memo(App);
