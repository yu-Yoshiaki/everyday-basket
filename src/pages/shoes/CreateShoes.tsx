import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { ref, uploadString } from "firebase/storage";
import { useRouter } from "next/router";
import type { FC } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BackArrow } from "src/components/buttons/BackArrow";
import { SubmitButton } from "src/components/buttons/SubmitButton";
import { inputStyle } from "src/components/forms/inputStyle";
import { Label } from "src/components/forms/Label";
import { UploadImage } from "src/components/forms/UploadImage";
import { db, storage } from "src/libs/firebase";
import type { Shoes } from "src/libs/shoes";
import { getPhotoUrl } from "src/libs/storage";

export const CreateShoes: FC = () => {
  const { register, handleSubmit } = useForm<Shoes>();
  const { push } = useRouter();
  const [newPhoto, setNewPhoto] = useState<string | undefined>(undefined);
  const [imageUrl] = useState<string | undefined>(undefined);

  const handleBack = () => {
    return push("/shoes");
  };
  const onSubmit = async (data: any) => {
    const isConf = window.confirm(
      "こちらの情報で編集をします。よろしいでしょうか？"
    );

    if (isConf) {
      const docRef = doc(collection(db, "shoes"));
      const id = docRef.id;

      const storagePath = `shoes/${id}/photo`;
      const storageRef = ref(storage, storagePath);
      await uploadString(storageRef, newPhoto ?? "", "data_url");
      const image = await getPhotoUrl(storagePath, newPhoto);

      const newData = {
        ...data,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        id,
        image,
      };

      await setDoc(docRef, newData);
      handleBack();
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between px-4">
        <BackArrow />
        <h2 className="text-xl font-bold">バッシュ作成</h2>
        <button>クリア</button>
      </div>

      <form
        className="flex flex-col gap-4 px-4 py-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <UploadImage
          imageUrl={imageUrl}
          newPhoto={newPhoto}
          setNewPhoto={setNewPhoto}
        />
        <Label label="メーカー">
          <input
            type="text"
            {...register("maker", { required: true })}
            className={inputStyle}
          />
        </Label>
        <Label label="シューズ名">
          <input
            type="text"
            {...register("name", { required: true })}
            className={inputStyle}
          />
        </Label>
        {/* <Label label="イメージ写真">
         
          <input
            type="file"
            {...register("image", { required: false })}
            className={inputStyle}
          />
        </Label> */}
        <Label label="発売年">
          <input type="text" {...register("model")} className={inputStyle} />
        </Label>
        <Label label="製造番号">
          <input
            type="text"
            {...register("createdNum")}
            className={inputStyle}
          />
        </Label>
        <Label label="公式URL">
          <input type="text" {...register("url")} className={inputStyle} />
        </Label>
        <SubmitButton label="作成する" />
      </form>
    </div>
  );
};
