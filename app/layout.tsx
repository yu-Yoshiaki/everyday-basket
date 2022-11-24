import "app/styles/global.css";

import { Footer } from "app/Footer";
import { Header } from "app/Header";

const RootLayout = (props: { children: React.ReactNode }) => {
  return (
    <html>
      <body className="grid-cols-[auto,1fr] text-gray-700 md:grid">
        <Header />
        <div className="h-screen overflow-y-auto">
          <main className="min-h-[90vh] bg-gray-100">{props.children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
