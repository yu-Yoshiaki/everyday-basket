import "src/styles/global.css";

import type { AppProps } from "next/app";
import { memo } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

const App = (props: AppProps) => {
  return (
    <>
      <Header />
      <main>
        <props.Component {...props.pageProps} />
      </main>
      <Footer />
    </>
  );
};

export default memo(App);
