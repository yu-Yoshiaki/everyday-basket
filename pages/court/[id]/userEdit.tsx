import type { CustomNextPage } from "next";
import { useRouter } from "next/router";
import type { FC } from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BackArrow } from "src/components/buttons/BackArrow";
import { SubmitButton } from "src/components/buttons/SubmitButton";
import { Checkbox } from "src/components/forms/Checkbox";
import { CheckBoxStyle, inputStyle } from "src/components/forms/inputStyle";
import { Label } from "src/components/forms/Label";
import { UploadImage } from "src/components/forms/UploadImage";
import { Layout } from "src/components/layouts/Layout";
import type { CreateUpdateCourt } from "src/libs/court";
import { getCourt, updateCourt } from "src/libs/court";
import useSWR from "swr";

const Heading: FC<{ label: string }> = (props) => {
  return (
    <h3 className="bg-indigo-900 p-2 text-xl font-bold text-white">
      {props.label}
    </h3>
  );
};
const UserEditPage: CustomNextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [newPhoto, setNewPhoto] = useState<string | undefined>(undefined);
  const { data } = useSWR(id && `/court/${id}`, () => {
    return getCourt(id as string);
  });
  const { register, handleSubmit, reset } = useForm<CreateUpdateCourt>();
  const handleBack = () => {
    return router.push("/");
  };
  const onSubmit = async (data: CreateUpdateCourt) => {
    const isConf = window.confirm(
      "こちらの情報で編集をします。よろしいでしょうか？"
    );
    if (isConf) {
      await updateCourt(id as string, data);
      handleBack();
    }
  };

  const handleReset = () => {
    return reset();
  };

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);

  return (
    <div>
      <div className="flex items-center justify-between px-4">
        <BackArrow onBack={handleBack} />
        <h2 className="text-xl font-bold">コート編集</h2>
        <button onClick={handleReset}>クリア</button>
      </div>

      <form
        className="flex flex-col gap-4 px-4 py-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className="w-full rounded-md border-gray-400 text-2xl font-bold">
          {data?.name}
        </span>
        <Heading label="写真" />
        <UploadImage newPhoto={newPhoto} setNewPhoto={setNewPhoto} />
        <Heading label="基本" />
        <fieldset className="flex w-80 flex-wrap gap-3">
          <Checkbox htmlFor={"usecase.everyone"} label={"誰でも利用可能"}>
            <input
              type="checkbox"
              id="usecase.everyone"
              {...register("usecase.everyone")}
              checked
              className={CheckBoxStyle}
            />
          </Checkbox>
          <Checkbox
            htmlFor={"usecase.createCard"}
            label={"カードを市区外でも作成可能"}
          >
            <input
              type="checkbox"
              id="usecase.createCard"
              {...register("usecase.createCard")}
              className={CheckBoxStyle}
            />
          </Checkbox>
          <Checkbox htmlFor={"usecase.rental"} label={"貸しコート"}>
            <input
              type="checkbox"
              id="usecase.rental"
              {...register("usecase.rental")}
              className={CheckBoxStyle}
            />
          </Checkbox>
          <Checkbox htmlFor={"usecase.memberShip"} label={"会員制"}>
            <input
              type="checkbox"
              id="usecase.memberShip"
              {...register("usecase.memberShip")}
              className={CheckBoxStyle}
            />
          </Checkbox>
        </fieldset>
        <Heading label="コート情報" />
        <Label label="公式URL">
          <input type="text" {...register("homepage")} className={inputStyle} />
        </Label>
        <Label label="電話番号">
          <input type="text" {...register("tel")} className={inputStyle} />
        </Label>
        <Label label="営業時間">
          <input
            type="text"
            {...register("openToClose")}
            className={inputStyle}
          />
        </Label>
        <Label label="定休日">
          <input type="text" {...register("horiday")} className={inputStyle} />
        </Label>
        <div className="rounded-md border p-2">
          <Label label="郵便番号">
            <input
              type="text"
              autoComplete="postal-code"
              {...register("location.postalCode")}
              className={inputStyle}
            />
          </Label>
          <Label label="都道府県">
            <input
              type="text"
              autoComplete="address-level1"
              {...register("location.prefecture")}
              className={inputStyle}
            />
          </Label>
          <Label label="市区町村">
            <input
              type="text"
              autoComplete="address-level2"
              {...register("location.city")}
              className={inputStyle}
            />
          </Label>
          <Label label="住所">
            <input
              type="text"
              autoComplete="address-level3"
              {...register("location.address")}
              className={inputStyle}
            />
          </Label>
        </div>
        <Label label="アクセス">
          <input type="text" {...register("access")} className={inputStyle} />
        </Label>
        <Label label="緯度">
          <input type="text" {...register("latitude")} className={inputStyle} />
        </Label>
        <Label label="経度">
          <input
            type="text"
            {...register("longitude")}
            className={inputStyle}
          />
        </Label>
        <Heading label="利用料金" />
        <p className="block text-sm font-semibold text-blue-700">
          １時間当たりの金額を記載してください。
        </p>
        <Label label="市区内者の１時間あたりの料金">
          <input
            type="text"
            {...register("price.citizens")}
            className={inputStyle}
          />
        </Label>{" "}
        <Label label="市区外者の１時間あたりの料金">
          <input
            type="text"
            {...register("price.outCitizens")}
            className={inputStyle}
          />
        </Label>
        <Label label="料金詳細">
          <textarea
            {...register("price.detail")}
            className={inputStyle}
            rows={4}
          />
        </Label>
        {/* <div className="space-y-3">
          <div className="flex items-center">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value={30}
              {...register("")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              30分単位
            </label>
          </div>
          <div className="flex items-center">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              1時間単位
            </label>
          </div>
          <div className="flex items-center">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              2時間単位
            </label>
          </div>
          <div className="flex items-center">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              3時間単位
            </label>
          </div>
        </div> */}
        <fieldset className="flex w-80 flex-wrap gap-5">
          <legend className="block text-sm font-semibold text-gray-700">
            支払い方法の有無
          </legend>
          <Checkbox htmlFor={"price.paymentMethods.money"} label={"現金"}>
            <input
              type="checkbox"
              id="price.paymentMethods.money"
              {...register("price.paymentMethods.money")}
              checked
              className={CheckBoxStyle}
            />
          </Checkbox>
          <Checkbox
            htmlFor={"price.paymentMethods.card"}
            label={"クレジットカード"}
          >
            <input
              type="checkbox"
              id="price.paymentMethods.card"
              {...register("price.paymentMethods.card")}
              className={CheckBoxStyle}
            />
          </Checkbox>
          <Checkbox
            htmlFor={"price.paymentMethods.ic"}
            label={"IC（Pasmo, Suicaなど"}
          >
            <input
              type="checkbox"
              id="price.paymentMethods.ic"
              {...register("price.paymentMethods.ic")}
              className={CheckBoxStyle}
            />
          </Checkbox>
          <Checkbox
            htmlFor={"price.paymentMethods.qr"}
            label={"QR（PayPay, LINEPayなど）"}
          >
            <input
              type="checkbox"
              id="price.paymentMethods.qr"
              {...register("price.paymentMethods.qr")}
              className={CheckBoxStyle}
            />
          </Checkbox>
        </fieldset>
        <Heading label="施設情報" />
        <fieldset className="flex w-80 flex-wrap gap-5">
          <Checkbox htmlFor={"scales"} label={"更衣室"}>
            <input
              type="checkbox"
              id="scales"
              {...register("facility.changingRoom")}
              className={CheckBoxStyle}
            />
          </Checkbox>
          <Checkbox htmlFor={"facility.toilet"} label={"トイレ"}>
            <input
              type="checkbox"
              id="facility.toilet"
              {...register("facility.toilet")}
              className={CheckBoxStyle}
            />
          </Checkbox>
          <Checkbox htmlFor={"facility.shower"} label={"シャワー"}>
            <input
              type="checkbox"
              id="facility.shower"
              {...register("facility.shower")}
              className={CheckBoxStyle}
            />
          </Checkbox>
          <Checkbox htmlFor={"facility.parking"} label={"駐車場"}>
            <input
              type="checkbox"
              id="facility.parking"
              {...register("facility.parking")}
              className={CheckBoxStyle}
            />
          </Checkbox>
        </fieldset>
        <div className="mt-10">
          <SubmitButton label="変更する" />
        </div>
      </form>
    </div>
  );
};

UserEditPage.getLayout = Layout;

export default UserEditPage;
