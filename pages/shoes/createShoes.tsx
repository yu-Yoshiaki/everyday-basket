import type { CustomNextPage } from "next";
import { Layout } from "src/components/layouts/Layout";
import { CreateShoes } from "src/pages/shoes/CreateShoes";

const CreateShoesPage: CustomNextPage = () => {
  return <CreateShoes />;
};

CreateShoesPage.getLayout = Layout;

export default CreateShoesPage;
