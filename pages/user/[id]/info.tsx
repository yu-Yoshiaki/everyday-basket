import type { CustomNextPage } from "next";
import { Layout } from "src/components/layouts/Layout";
import { UserInfo } from "src/pages/user/UserInfo";

const UserInfoPage: CustomNextPage = () => {
  return <UserInfo />;
};

UserInfoPage.getLayout = Layout;

export default UserInfoPage;
