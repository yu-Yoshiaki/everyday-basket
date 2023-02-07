import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { SubmitButton } from "src/components/buttons/SubmitButton";
import { Label } from "src/components/forms/Label";
import { auth } from "src/libs/firebase";

type Item = {
  email: string;
  password: string;
};

export const Login: FC = () => {
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
    <div className="p-5 ">
      <div className="flex flex-col items-center gap-5 rounded-md border p-5">
        <h2 className="text-xl font-bold">ログイン</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex h-[40vh] flex-col justify-between"
        >
          <div className="flex flex-col gap-5">
            <Label label="メールアドレス">
              <input
                type="text"
                {...register("email", { required: true })}
                className="rounded-md border-gray-300"
              />
            </Label>

            <Label label="パスワード">
              <input
                type="password"
                {...register("password", { required: true })}
                className="rounded-md border-gray-300"
              />
            </Label>
          </div>

          <SubmitButton label="ログイン" />
        </form>
      </div>
    </div>
  );
};
