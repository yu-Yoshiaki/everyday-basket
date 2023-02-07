import type { CustomLayout } from "next";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Nav } from "src/components/Nav";

export const Layout: CustomLayout = (page) => {
  return (
    <div>
      <Header />
      <Nav />
      <main className="min-h-screen">{page}</main>
      <Footer />
    </div>
  );
};
