import "app/styles/global.css";

import { Footer } from "app/Footer";
import { Header } from "app/Header";
import type { AppProps } from "next/app";
import { memo } from "react";

const App = (props: AppProps) => {
  return (
    <div>
      <Header />
      <main>
        <props.Component {...props.pageProps} />
      </main>
      <Footer />
    </div>
  );
};

export default memo(App);
