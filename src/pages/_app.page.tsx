import { ChakraProvider } from "@chakra-ui/react";
import type { CustomAppPage } from "next/app";
import { Suspense } from "react";

const App: CustomAppPage = (props) => {
  const getLayout =
    props.Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <ChakraProvider>
          {getLayout(<props.Component {...props.pageProps} />)}
        </ChakraProvider>
      </Suspense>
    </>
  );
};

export default App;
