import type { CustomNextPage } from "next";
import { Layout } from "src/components/layouts/Layout";
import { Login } from "src/pages/auth/Login";

const LoginPage: CustomNextPage = () => {
  return <Login />;
};

LoginPage.getLayout = Layout;

export default LoginPage;
