import { ChakraProvider } from "@chakra-ui/react";
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
        <title>A-Release</title>
      </Head>
      <Suspense fallback={<div>loading</div>}>
        <ChakraProvider>
          {getLayout(<props.Component {...props.pageProps} />)}
        </ChakraProvider>
      </Suspense>
    </>
  );
};

export default App;
