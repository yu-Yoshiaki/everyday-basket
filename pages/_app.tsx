import "src/styles/global.css";

import type { AppProps } from "next/app";
import { memo } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Nav } from "src/components/Nav";

const App = (props: AppProps) => {
  return (
    <>
      <Header />
      <Nav />
      <main className="min-h-screen">
        <props.Component {...props.pageProps} />
      </main>
      <Footer />
    </>
  );
};

export default memo(App);
