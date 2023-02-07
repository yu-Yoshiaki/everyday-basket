import {
  CheckCircleIcon,
  HeartIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import type { FC } from "react";
import { FacebookIcon, LineIcon, TwitterIcon } from "react-share";
import { BackArrow } from "src/components/buttons/BackArrow";
import { SubmitButtonStyle } from "src/components/buttons/SubmitButton";
import type { ReadCourt } from "src/libs/court";

export const Detail: FC<{ data: ReadCourt }> = (props) => {
  const { data } = props;

  return (
    <div>
      <div className="p-2">
        <BackArrow />
      </div>

      <div className="relative flex h-[250px] items-center justify-center bg-[url('/basket.jpg')] bg-cover">
        <div className="absolute inset-0 bg-gray-400 opacity-20"></div>
        <div className="absolute z-10 flex items-center gap-2 whitespace-nowrap rounded-md bg-gray-50 p-2 font-semibold">
          <PlusIcon width={20} height={20} />
          コートの写真をアップする
        </div>
      </div>

      <div className="space-y-10 p-4">
        <div className="space-y-3">
          <span className="font-semibold text-green-500">東京都</span>
          <h2 className="text-3xl font-bold">{data.name}</h2>
          <div className="flex gap-5">
            <TwitterIcon className="h-7 w-7 rounded-full" />
            <LineIcon className="h-7 w-7 rounded-full" />
            <FacebookIcon className="h-7 w-7 rounded-full" />
            {true ? (
              <HeartIcon className="h-7 w-7 rounded-full text-red-400" />
            ) : (
              <HeartIcon className="h-7 w-7 rounded-full" />
            )}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-bold">空きコート・予約</h3>
          <p>現在の空き状況です。予約サイトで予約を行ってください。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-bold">コート情報</h3>
          <p className="rounded-md bg-yellow-200 p-2">
            ⚠️ご利用の際は公式ホームページの方をご確認ください。
          </p>
          <dl className="divide-y">
            <div className="flex items-center justify-between border-t bg-white py-3">
              <dt className="whitespace-nowrap text-sm font-semibold">
                ホームページ
              </dt>
              <dd className="text-gray-900">
                <a href={data.homepage} className="text-blue-400 underline">
                  {data.homepage}
                </a>
              </dd>
            </div>
            {/* <div className="flex items-start justify-between gap-24 bg-white py-3">
              <dt className="text-sm font-semibold whitespace-nowrap">
                予約ページ
              </dt>
              <dd className="text-gray-900">{data.url}</dd>
            </div> */}
            <div className="flex items-start justify-between gap-24 bg-white py-3">
              <dt className="whitespace-nowrap text-sm font-semibold">
                電話番号
              </dt>
              <dd className="text-gray-900">
                <a href={`tel:${data.tel}`} className="text-blue-400 underline">
                  {data.tel}
                </a>
              </dd>
            </div>
            <div className="flex items-start justify-between gap-24 bg-white py-3">
              <dt className="whitespace-nowrap text-sm font-semibold">
                営業時間
              </dt>
              <dd className="text-gray-900">{data.openToClose}</dd>
            </div>
            <div className="flex items-start justify-between gap-24 bg-white py-3">
              <dt className="whitespace-nowrap text-sm font-semibold">
                定休日
              </dt>
              <dd className="text-gray-900">{data.horiday}</dd>
            </div>
            <div className="flex items-start justify-between gap-24 bg-white py-3">
              <dt className="whitespace-nowrap text-sm font-semibold">住所</dt>
              <dd className="text-gray-900">{data.address}</dd>
            </div>
            <div className="flex items-start justify-between gap-24 bg-white py-3">
              <dt className="whitespace-nowrap text-sm font-semibold">
                アクセス
              </dt>
              <dd className="text-gray-900">{data.access}</dd>
            </div>
          </dl>
        </div>

        {/* <div className="space-y-3">
          <h3 className="text-2xl font-bold">料金</h3>
          {data.prices.map((price, index) => {
            return (
              <dl className="divide-y" key={index}>
                <div className="flex items-center justify-between gap-6 border-t bg-white py-3">
                  <dt className="text-sm font-semibold whitespace-nowrap">{price.planName}</dt>
                  <dd className="text-gray-900">
                    {price.description}
                  </dd>
                </div>
              </dl>
            );
          })}
        </div> */}

        <div className="space-y-3">
          <h3 className="text-2xl font-bold">施設情報</h3>
          <dl className="divide-y">
            <div className="flex flex-wrap gap-3 border-t bg-white py-3">
              {data.facility?.changingRoom && (
                <dd className="text-gray-900">
                  <span className="flex items-center">
                    <CheckCircleIcon width={20} height={20} />
                    更衣室
                  </span>
                </dd>
              )}
              {data.facility?.parking && (
                <dd className="text-gray-900">
                  <span className="flex items-center">
                    <CheckCircleIcon width={20} height={20} />
                    駐車場
                  </span>
                </dd>
              )}

              {data.facility?.shower && (
                <dd className="text-gray-900">
                  <span className="flex items-center">
                    <CheckCircleIcon width={20} height={20} />
                    シャワー
                  </span>
                </dd>
              )}
              {data.facility?.toilet && (
                <dd className="text-gray-900">
                  <span className="flex items-center">
                    <CheckCircleIcon width={20} height={20} />
                    トイレ
                  </span>
                </dd>
              )}
            </div>
          </dl>
        </div>

        <div className="flex w-full max-w-[400px] flex-col gap-5 bg-gray-200 p-10 text-center">
          <p className="text-lg font-semibold">
            このコートの情報であなたの知っていることがありましたら、
            <br /> ぜひ登録してください。
          </p>
          <Link
            href={`/court/${data.id}/userEdit`}
            className="rounded-md bg-blue-400 p-2 font-semibold text-white"
          >
            コート情報を編集する
          </Link>
        </div>
      </div>
      <div className="fixed bottom-0 w-full bg-white p-4 text-center shadow-md">
        <a href={"/"} className={SubmitButtonStyle}>
          予約サイトに遷移
        </a>
        <span className="text-sm text-gray-400">
          ご不明な点は各施設にご連絡ください。
        </span>
      </div>
    </div>
  );
};
