import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

export const BlogLayout: CustomLayout = (page) => {
  return (
    <div className="text-gray-700">
      <Header />
      <main className="min-h-[80vh]">
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};
