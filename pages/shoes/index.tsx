import type { CustomNextPage } from "next";
import { Layout } from "src/components/layouts/Layout";
import { Shoes } from "src/pages/shoes";

const ShoesPage: CustomNextPage = () => {
  return <Shoes />;
};

ShoesPage.getLayout = Layout;

export default ShoesPage;
