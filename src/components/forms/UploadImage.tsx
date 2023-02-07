import Image from "next/image";
import type { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { useCallback } from "react";

export const UploadImage: FC<{
  imageUrl?: string;
  newPhoto?: string;
  setNewPhoto: Dispatch<SetStateAction<string | undefined>>;
}> = (props) => {
  const { imageUrl, newPhoto, setNewPhoto } = props;

  const handleChangeFileToBase64 = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files || e.target.files.length === 0) return;
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (!e.target) return;
        setNewPhoto(e.target.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    },
    [setNewPhoto]
  );

  return (
    <div className="flex items-center">
      <span className="relative inline-block h-20 w-20 overflow-hidden rounded-full bg-gray-100">
        <Image src={newPhoto ?? imageUrl ?? ""} alt="" fill />
      </span>
      <div>
        <label
          htmlFor="photo"
          className="ml-5 rounded-md border py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          変更する
          <input
            onChange={handleChangeFileToBase64}
            type="file"
            id="photo"
            accept="image/*"
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};
