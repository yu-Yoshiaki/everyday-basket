import { ref, uploadString } from "firebase/storage";
import type { CustomNextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BackArrow } from "src/components/buttons/BackArrow";
import { SubmitButton } from "src/components/buttons/SubmitButton";
import { inputStyle } from "src/components/forms/inputStyle";
import { Label } from "src/components/forms/Label";
import { UploadImage } from "src/components/forms/UploadImage";
import { Layout } from "src/components/layouts/Layout";
import { useAuth } from "src/libs/auth";
import { storage } from "src/libs/firebase";
import { getPhotoUrl } from "src/libs/storage";
import type { CreateUpdateUserInfo } from "src/libs/user";
import { createUserInfo, getUserInfo } from "src/libs/user";
import useSWR from "swr";

const EditUserProfilePage: CustomNextPage = () => {
  const { user } = useAuth();
  const { data: userInfo } = useSWR(
    user && `/court/${user.uid}/userInfo`,
    () => {
      return getUserInfo(user?.uid as string);
    }
  );
  const { push } = useRouter();
  const { register, handleSubmit, reset } = useForm<CreateUpdateUserInfo>();
  //   const [defaultPhoto, setDefaultPhoto] = useState<string>();
  //新規データプレビュー用(Base64文字列)
  const [newPhoto, setNewPhoto] = useState<string | undefined>(undefined);

  const handleBack = () => {
    return push(`/user/${user}`);
  };

  const handleReset = () => {
    return reset();
  };

  useEffect(() => {
    if (userInfo) {
      reset(userInfo);
    }
  }, [userInfo, reset]);

  if (!user) return <div>Loading...</div>;

  const onSubmit = async (data: CreateUpdateUserInfo) => {
    const isConf = window.confirm(
      "こちらの情報で編集をします。よろしいでしょうか？"
    );

    if (isConf) {
      const storagePath = `users/${user.uid}/photo`;
      await uploadString(ref(storage, storagePath), newPhoto ?? "", "data_url");
      const image = await getPhotoUrl(storagePath, newPhoto);
      await createUserInfo(user.uid, { ...data, image });
      handleBack();
    }
  };

  return (
    <div className="mx-auto max-w-[600px]">
      <div className="flex items-center justify-between px-4">
        <BackArrow />
        <h2 className="text-xl font-bold">プロフィール編集</h2>
        <button onClick={handleReset}>クリア</button>
      </div>

      <form
        className="flex flex-col gap-4 px-4 py-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <UploadImage
          imageUrl={userInfo?.image}
          newPhoto={newPhoto}
          setNewPhoto={setNewPhoto}
        />

        <Label label="名前">
          <input
            type="text"
            {...register("name", { required: false })}
            className={inputStyle}
          />
        </Label>

        <Label label="生まれた年">
          <input
            type="number"
            {...register("age", { required: false })}
            className={inputStyle}
          />
        </Label>
        <Label label="性別">
          <input
            type="text"
            {...register("sex", { required: false })}
            className={inputStyle}
          />
        </Label>
        <Label label="自己紹介">
          <textarea
            rows={5}
            {...register("pr", { required: false })}
            className={inputStyle}
          />
        </Label>
        <SubmitButton label="作成する" />
      </form>
    </div>
  );
};

EditUserProfilePage.getLayout = Layout;

export default EditUserProfilePage;
