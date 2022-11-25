import "app/styles/global.css";

import { Footer } from "app/Footer";
import { Header } from "app/Header";

const RootLayout = (props: { children: React.ReactNode }) => {
  return (
    <html>
      <body className="text-gray-700">
        <Header />
        <main>{props.children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
