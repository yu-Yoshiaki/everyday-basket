import type { CustomNextPage } from "next";
import { HomeTop } from "src/component/HomeTop";
import { BlogLayout } from "src/layout/BlogLayout";

const Root: CustomNextPage = () => {
  return (
    <div>
      <HomeTop />
    </div>
  );
};

Root.getLayout = BlogLayout;

export default Root;
