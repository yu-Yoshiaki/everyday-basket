import "src/styles/global.css";

import type { CustomAppProps } from "next/app";
import { memo } from "react";

const App = (props: CustomAppProps) => {
  const getLayout =
    props.Component.getLayout ||
    ((page: any) => {
      return page;
    });

  return <>{getLayout(<props.Component {...props.pageProps} />)}</>;
};

export default memo(App);
