import type { CustomNextPage } from "next";
import { HomeTop, Meta } from "src/component";
import { BlogLayout } from "src/layout/BlogLayout";

const Root: CustomNextPage = () => {
  return (
    <div>
      <Meta />
      <div className="flex flex-col space-y-14">
        <HomeTop />
      </div>
    </div>
  );
};

Root.getLayout = BlogLayout;

export default Root;
