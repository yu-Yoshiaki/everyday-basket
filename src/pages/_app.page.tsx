import "src/style/global.css";

import type { CustomAppPage } from "next/app";
import { Suspense } from "react";

const App: CustomAppPage = (props) => {
  const getLayout =
    props.Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <Suspense fallback={<div>loading</div>}>
      {getLayout(<props.Component {...props.pageProps} />)}
    </Suspense>
  );
};

export default App;
