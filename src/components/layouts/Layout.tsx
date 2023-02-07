import type { CustomLayout } from "next";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Meta } from "src/components/Meta";
import { Nav } from "src/components/Nav";

export const Layout: CustomLayout = (page) => {
  return (
    <div className="text-gray-700">
      <Meta />
      <Header />
      <Nav />
      <main className="min-h-screen">{page}</main>
      <Footer />
    </div>
  );
};
