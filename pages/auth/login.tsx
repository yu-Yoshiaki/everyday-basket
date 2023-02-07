import { signInWithEmailAndPassword } from "firebase/auth";
import type { CustomNextPage } from "next";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Layout } from "src/components/layouts/Layout";
import { auth } from "src/libs/firebase";

type Item = {
  email: string;
  password: string;
};

const LoginPage: CustomNextPage = () => {
  const { push } = useRouter();
  const { register, handleSubmit } = useForm<Item>();

  const handleBack = () => {
    return push("/");
  };

  const onSubmit = async (data: Item) => {
    const res = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    res.user && handleBack();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        メールアドレス
        <input type="text" {...register("email", { required: true })} />
      </label>

      <label>
        パスワード
        <input type="password" {...register("password", { required: true })} />
      </label>

      <button type="submit">ログイン</button>
    </form>
  );
};

LoginPage.getLayout = Layout;

export default LoginPage;
