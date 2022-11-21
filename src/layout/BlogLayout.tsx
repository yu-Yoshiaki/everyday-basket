import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

export const BlogLayout: CustomLayout = (page) => {
  return (
    <div className="grid-cols-[auto,1fr] text-gray-700 md:grid">
      <Header />
      <div className="h-screen overflow-y-auto">
        <main>
          <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
        </main>
        <Footer />
      </div>
    </div>
  );
};
